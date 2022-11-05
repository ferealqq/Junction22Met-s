from typing import Optional, List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.deps import get_db
from app.dependencies.auth import TokenUser, credential_check
# from app.db.utils import save_model

from app.models.task import Task, TaskOut
from app.models.task_activity import TaskActivity, TaskActivityOut
from app.models.task_completion import TaskCompletion

router = APIRouter()


@router.get("/", response_model=List[TaskOut])
async def get_tasks(
    limit: Optional[int] = 100,
    skip: Optional[int] = 0,
    db: Session = Depends(get_db),
):
    return db.query(Task).limit(limit).offset(skip).all()

@router.get("/active", response_model=List[TaskActivityOut])
async def get_active_tasks(
    limit: Optional[int] = 100,
    skip: Optional[int] = 0,
    db: Session = Depends(get_db),
    user: TokenUser = Depends(credential_check)
):
    query = (         
        db.query(TaskActivity).
        filter(
            TaskActivity.id.not_in(
                db.query(TaskCompletion.task_activity_id)
                    .filter(TaskCompletion.user_id == user.id)
            )
        ).
        order_by(TaskActivity.ends_at)
    )

    return (
        query.limit(limit).offset(skip).all()
    )