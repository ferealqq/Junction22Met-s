from typing import Any, Optional, List

from fastapi import APIRouter, Depends
from sqlalchemy import String, bindparam
from sqlalchemy.orm import Session
from app.db.deps import get_db
from app.db.utils import save_model

from app.models.user import User, UserIn, UserOut


router = APIRouter()


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


@router.post(
    "/",
    response_model=UserOut,
)
def post_game(user: UserIn, db: Session = Depends(get_db)):
    db_game = User(**user.dict())
    return save_model(db, db_game)
