from logging import log
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


@router.get("/get")
def get_communities(
    db: Session = Depends(get_db),
    user : TokenUser = Depends(credential_check)
):    
    # return db.query(Community.id).filter(CommunityMember.c.user_id == user.id).all()
    # log.info("halooo")
    data = db.query(
        func.array_agg(aggregate_order_by(User.username, User.money_saved)).label("users"),
        func.array_agg(aggregate_order_by(User.id, User.money_saved)).label("user_ids"),
        func.sum(User.emissions_saved).label("emissions_saved"),
        func.sum(User.money_saved).label("money_saved"),
        Community.created_at.label("created_at")
    ).filter(
        Community.id.in_(
            db.query(CommunityMember.c.community_id).filter(CommunityMember.c.user_id == user.id).subquery()
        )
    ).outerjoin(
        CommunityMember, CommunityMember.c.community_id == Community.id 
    ).outerjoin(User,
        (CommunityMember.c.user_id == User.id) & (CommunityMember.c.community_id == Community.id)
    ).group_by(Community.id)

    return data.all()


@router.post(
    "/",
    response_model=Any,
)
def post_community(
    data: CommunityIn, 
    db: Session = Depends(get_db),
    user : TokenUser = Depends(credential_check)
):
    usr = db.query(User).filter(User.id == user.id).one_or_none()
    if usr == None:
        raise BAD_REQUEST_EXCEPTION
    if data.names != None and len(data.names) > 0:
        users = db.query(User).filter(User.username.in_(data.names)).all()
    elif data.ids != None and len(data.ids) > 0:
        users = db.query(User).filter(User.username.in_(data.ids)).all()
    else:
        raise BAD_REQUEST_EXCEPTION

    comm = Community() 
    comm.members.extend([*users,usr])
    comm = save_model(db,comm)
    
    return get_community_data(comm.id,db)

def get_community_data(id, db = Depends(get_db)):
    return db.query(
        func.array_agg(aggregate_order_by(User.username, User.money_saved)).label("users"),
        func.array_agg(aggregate_order_by(User.id, User.money_saved)).label("user_ids"),
        # func.array_agg(aggregate_order_by(User.username, User.money_saved)),
        func.sum(User.emissions_saved).label("emissions_saved"),
        func.sum(User.money_saved).label("money_saved"),
        Community.created_at.label("created_at")
    ).filter(Community.id == id).group_by(Community.id).all()

