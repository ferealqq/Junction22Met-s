from typing import Optional, List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.deps import get_db

# from app.db.utils import save_model

from app.models.task import Task, TaskOut
from app.models.task_activity import TaskActivity

router = APIRouter()


@router.get("/", response_model=List[TaskOut])
async def get_tasks(
    search: Optional[str] = None,
    limit: Optional[int] = 100,
    skip: Optional[int] = 0,
    db: Session = Depends(get_db),
):
    return db.query(Task).limit(limit).offset(skip).all()


@router.get("/active", response_model=List[TaskOut])
async def get_active_tasks(
    search: Optional[str] = None,
    limit: Optional[int] = 100,
    skip: Optional[int] = 0,
    db: Session = Depends(get_db),
):
    return db.query(TaskActivity).limit(limit).offset(skip).all()


@router.get("/mock_tasks")
async def get_mock_tasks():
    return [
        {
            "id": 1,
            "title": "Task 1",
            "desc": "Task 1 description",
            "emission": 1.0,
        },
        {
            "id": 2,
            "title": "Task 2",
            "desc": "Task 2 description",
            "emission": 2.0,
        },
        {
            "id": 3,
            "title": "Task 3",
            "desc": "Task 3 description",
            "emission": 3.0,
        },
    ]
