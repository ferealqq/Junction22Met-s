import datetime as dt
from pydantic import BaseModel
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship

import uuid
import sqlalchemy as sa

from .user import User, UserOut
from .task_activity import TaskActivity, TaskActivityOut
from .task import Task, TaskOut

from ..db.base import Base


class TaskCompletion(Base):
    __tablename__ = "task_completion"
    id = sa.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    task_id = sa.Column(UUID(as_uuid=True), sa.ForeignKey(Task.id), nullable=False)
    task_activity_id = sa.Column(UUID(as_uuid=True), sa.ForeignKey(TaskActivity.id), nullable=False)
    user_id = sa.Column(UUID(as_uuid=True), sa.ForeignKey(User.id), nullable=False)

    completed_at = sa.Column("completed_at", sa.DateTime(), server_default=sa.text("now()"), nullable=True)
    task_activity = relationship("TaskActivity", back_populates="task_completions")

    task = relationship("Task", back_populates="task_completions")

    user = relationship("User", back_populates="task_completions")


class TaskCompletionIn(BaseModel):
    task_id: uuid.UUID
    user_id: uuid.UUID


class TaskCompletionOut(TaskCompletionIn):
    id: uuid.UUID
    completed_at: dt.datetime
    # these are probably not necessary??
    task: TaskOut
    task_activity: TaskActivityOut
    user: UserOut

    class Config:
        orm_mode = True
