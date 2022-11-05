import datetime as dt
from typing import Optional, List
import uuid

from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy import func
from sqlalchemy.orm import Session
from app.db.deps import get_db
from app.db.utils import NOT_FOUND_EXCEPTION, save_model
from app.dependencies.auth import TokenUser, credential_check
# from app.db.utils import save_model

from app.models.task import Task, TaskOut
from app.models.task_activity import TaskActivity, TaskActivityOut
from app.models.task_completion import TaskCompletion, TaskCompletionOut
from app.models.user import User

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

@router.post("/complete/{task_activity_id}", response_model=TaskCompletionOut)
async def post_complete_task(
    task_activity_id : uuid.UUID,
    db : Session = Depends(get_db),
    user : TokenUser = Depends(credential_check)  
):

    task_activity = db.query(TaskActivity).filter(TaskActivity.id == task_activity_id).one_or_none()
    if task_activity == None:
        raise NOT_FOUND_EXCEPTION

    tc = TaskCompletion(
        task_activity_id = task_activity_id,
        task_id = task_activity.task.id,
        user_id = user.id
    )

    return save_model(db,tc)

@router.get("/user/completed", response_model=List[TaskActivityOut])
async def get_active_tasks(
    limit: Optional[int] = 100,
    skip: Optional[int] = 0,
    db: Session = Depends(get_db),
    user: TokenUser = Depends(credential_check)
):
    return (
        db.query(TaskCompletion).   
        filter(TaskCompletion.user_id == user.id).
        limit(limit).offset(skip).all()
    )

class Analytics(BaseModel):
    emissions_saved: float
    date: dt.datetime 


@router.get("/user/analytics", response_model=List[dict])
async def get_active_tasks(
    days: Optional[int] = 6,
    db: Session = Depends(get_db),
    user: TokenUser = Depends(credential_check)
):
    query = (
        db.query(
            func.sum(TaskActivity.emissions_saved).label(
                "emissions_saved"
            ),
            func.date_trunc('day', TaskCompletion.completed_at).label("completed_at")
            # TaskCompletion.completed_at.label("completed_at")
        ).
        outerjoin(TaskActivity, TaskActivity.id == TaskCompletion.task_activity_id).
        filter(
            TaskCompletion.user_id == user.id,
            func.date(TaskCompletion.completed_at) >= dt.date.today() - dt.timedelta(days=days)
        ).group_by(
            func.date_trunc('day', TaskCompletion.completed_at)
        )
    )
    print(str(query))

    # data = query.limit(limit).offset(skip).all()
    data = query.all()

    return data