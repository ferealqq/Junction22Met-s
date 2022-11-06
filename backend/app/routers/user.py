from typing import Any, Optional, List

from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy import String, bindparam
from sqlalchemy.orm import Session
from app.db.deps import get_db
from app.db.utils import save_model
from app.dependencies.auth import JWTService

from app.models.user import User, UserIn, UserOut


router = APIRouter()


@router.get("/{user_id}")
async def get_user(user_id: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(str(User.id) == user_id).one_or_none()
    return user


@router.get("/", response_model=List[UserOut])
async def get_users(
    search: Optional[str] = None,
    limit: Optional[int] = 100,
    skip: Optional[int] = 0,
    db: Session = Depends(get_db),
):
    db_result = db.query(User)

    if search:
        db_result = db_result.filter(User.name.like(bindparam("search", type_=String))).params(search=f"%{search}%")

    return db_result.limit(limit).offset(skip).all()


class JwtResponse(BaseModel):
    jwt: str


@router.post(
    "/login",
    response_model=JwtResponse,
)
def post_user(user: UserIn, db: Session = Depends(get_db)):

    model = db.query(User).filter(User.username == user.username).one_or_none()
    if model == None:
        model = save_model(db, User(username=user.username))

    token = JWTService().encode({"id": str(model.id)})

    return {"jwt": str(token)}
