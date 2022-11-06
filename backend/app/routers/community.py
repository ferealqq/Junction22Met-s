from typing import Any, Optional, List
import uuid

from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy import String, bindparam
from sqlalchemy.orm import Session
from app.db.deps import get_db
from app.db.utils import BAD_REQUEST_EXCEPTION, save_model
from app.dependencies.auth import JWTService, TokenUser, credential_check
from sqlalchemy.dialects.postgresql import aggregate_order_by
from sqlalchemy import func
from app.models.community import Community, CommunityIn, CommunityMember

from app.models.user import User, UserIn, UserOut


router = APIRouter()


@router.get("/", response_model=List[UserOut])
async def get_communities(
    db: Session = Depends(get_db),
    user : TokenUser = Depends(credential_check)
):
    return db.query(
        func.array_agg(aggregate_order_by(User.username, User.money_saved)),
        func.sum(User.emissions_saved).label("emissions_saved"),
        func.sum(User.money_saved).label("money_saved"),
        Community.created_at.label("created_at")
    ).filter(
        Community.id.in_(
            db.query(CommunityMember.id.distinct()).outerjoin(User, User.id == CommunityMember.user_id)
        )
    ).group_by(Community.id).all()



@router.post(
    "/",
    response_model=Any,
)
def post_community(
    data: Any, 
    db: Session = Depends(get_db),
    user : TokenUser = Depends(credential_check)
):
    if data.member_names != None and len(data.member_names) > 0:
        users = db.query(User).filter(User.username._in(data.member_names)).all()
    elif data.member_ids != None and len(data.member_ids) > 0:
        users = db.query(User).filter(User.username._in(data.member_ids)).all()
    else:
        raise BAD_REQUEST_EXCEPTION

    comm = Community(owner_id = user.id) 
    comm.members.extend(users)
    comm = save_model(db,comm)
    
    return get_community_data(comm.id,db)

def get_community_data(id, db = Depends(get_db)):
    return db.query(
        func.array_agg(aggregate_order_by(User.username, User.money_saved)),
        func.sum(User.emissions_saved).label("emissions_saved"),
        func.sum(User.money_saved).label("money_saved"),
        Community.created_at.label("created_at")
    ).filter(Community.id == id).group_by(Community.id).all()

