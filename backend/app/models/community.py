from ast import List
import datetime as dt
from typing import Any, Optional
from pydantic import BaseModel
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship

import uuid
import sqlalchemy as sa

from .user import User, UserOut
from .task_activity import TaskActivity, TaskActivityOut
from .task import Task, TaskOut

from ..db.base import Base


CommunityMember = sa.Table(
    "community_members",
    Base.metadata,
    sa.Column("community_id", sa.ForeignKey("community.id"), primary_key=True),
    sa.Column("user_id", sa.ForeignKey("user.id"), primary_key=True),
)


class Community(Base):
    __tablename__ = "community"
    id = sa.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    created_at = sa.Column("created_at", sa.DateTime(), server_default=sa.text("now()"), nullable=True)

    members = relationship("User", secondary=CommunityMember, backref="communities")

class CommunityIn(BaseModel):
    names: Optional[list]
    ids: Optional[list]
    # member_ids: Optional[List[uuid.UUID]]

class CommunityOut(BaseModel):
    id: uuid.UUID
    created_at: dt.datetime
    # members: List[UserOut]

    class Config:
        orm_mode = True