import datetime as dt
from pydantic import BaseModel
from sqlalchemy.dialects.postgresql import UUID

import uuid
import sqlalchemy as sa
from sqlalchemy.orm import relationship

from ..db.base import Base


class Task(Base):
    __tablename__ = "task"
    id = sa.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    title = sa.Column(sa.String, nullable=False)
    desc = sa.Column(sa.String, nullable=False)
    emission = sa.Column(sa.DECIMAL, nullable=False)

    created_at = sa.Column("created_at", sa.DateTime(), server_default=sa.text("now()"), nullable=True)
    updated_at = sa.Column("updated_at", sa.DateTime(), server_default=sa.text("now()"), nullable=True)

    task_activities = relationship(
        "TaskActivity",
        back_populates="task",
    )
    task_completions = relationship(
        "TaskCompletion",
        back_populates="task",
    )


class TaskIn(BaseModel):
    title: str
    desc: str
    emission: float


class TaskOut(TaskIn):
    id: uuid.UUID
    created_at: dt.datetime
    updated_at: dt.datetime

    class Config:
        orm_mode = True
