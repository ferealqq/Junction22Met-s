import uuid
import datetime as dt
from pydantic import BaseModel
from sqlalchemy.dialects.postgresql import UUID
import sqlalchemy as sa
from sqlalchemy.orm import relationship

from ..db.base import Base


class User(Base):
    __tablename__ = "user"
    id = sa.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    username = sa.Column(sa.String, nullable=False)
    emissions_saved = sa.Column(sa.DECIMAL, nullable=False, default=0.0)
    money_saved = sa.Column(sa.DECIMAL, nullable=False, default=0.0)
    created_at = sa.Column(
        sa.DateTime,
        nullable=True,
        server_default=sa.func.now(),
    )
    updated_at = sa.Column(
        sa.DateTime,
        nullable=True,
        server_default=sa.func.now(),
        onupdate=sa.func.now(),
    )

    task_completions = relationship(
        "TaskCompletion", back_populates="user", primaryjoin="User.id == TaskCompletion.user_id"
    )


class UserIn(BaseModel):
    username: str


class UserOut(UserIn):
    id: uuid.UUID
    emissions_saved: float
    created_at: dt.datetime
    updated_at: dt.datetime

    class Config:
        orm_mode = True
