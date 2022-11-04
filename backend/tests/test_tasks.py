from datetime import date, timedelta
from fastapi.testclient import TestClient
from sqlalchemy.orm import Session
from app.db.utils import save_model

from app.models.task import Task
from app.models.task_activity import TaskActivity
from app.models.task_completion import TaskCompletion
from app.models.user import User


def test_task_relationship(db: Session):
    task = Task(
        title="pekka",
        desc="jotain",
        emission=123,
    )
    task = save_model(db, task)
    ta = TaskActivity(starts_at=date.today(), ends_at=date.today() - timedelta(days=2), task_id=task.id)
    ta = save_model(db, ta)
    assert ta.task != None
    assert ta.task.id == task.id


def test_task_completion_relationships(db: Session):
    task = Task(
        title="pekka",
        desc="jotain",
        emission=123,
    )
    task = save_model(db, task)
    ta = TaskActivity(starts_at=date.today(), ends_at=date.today() - timedelta(days=2), task_id=task.id)
    ta = save_model(db, ta)
    assert ta.task != None
    assert ta.task.id == task.id

    user = User(first_name="jasse", last_name="juho")
    user = save_model(db, user)

    tc = TaskCompletion(
        user_id=user.id,
        task_id=task.id,
        task_activity_id=ta.id,
    )
    tc = save_model(db,tc)

    assert tc != None
    assert tc.user != None
    assert tc.user.first_name == user.first_name
    assert tc.task_activity.ends_at == ta.ends_at
    assert tc.task.title == task.title

    user = db.query(User).filter(User.id == tc.user.id).one_or_none()
    assert user is not None 
    assert len(user.task_completions) == 1
