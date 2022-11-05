import datetime as dt
from pydantic import BaseModel
from sqlalchemy.dialects.postgresql import UUID

import uuid
import sqlalchemy as sa
from sqlalchemy.orm import relationship

from .task import Task, TaskOut

from ..db.base import Base


class TaskActivity(Base):
    __tablename__ = "task_activity"
    id = sa.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    starts_at = sa.Column("starts_at", sa.DateTime(), nullable=True)
    ends_at = sa.Column("ends_at", sa.DateTime(), nullable=True)
    task_id = sa.Column(UUID(as_uuid=True), sa.ForeignKey(Task.id))
    emissions_saved = sa.Column(sa.DECIMAL, nullable=False, default=0.0)
    created_at = sa.Column("created_at", sa.DateTime(), server_default=sa.text("now()"), nullable=True)
    updated_at = sa.Column("updated_at", sa.DateTime(), server_default=sa.text("now()"), nullable=True)

    task = relationship("Task", back_populates="task_activities")
    task_completions = relationship("TaskCompletion", back_populates="task_activity")


class TaskActivityIn(BaseModel):
    task_id: uuid.UUID
    ends_at: dt.datetime
    starts_at: dt.datetime


class TaskActivityOut(TaskActivityIn):
    id: uuid.UUID
    created_at: dt.datetime
    updated_at: dt.datetime
    task: TaskOut

    class Config:
        orm_mode = True
