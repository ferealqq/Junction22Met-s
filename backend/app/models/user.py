import uuid
import datetime as dt
from pydantic import BaseModel
from sqlalchemy.dialects.postgresql import UUID
import sqlalchemy as sa

from ..db.base import Base

class User(Base):
    __tablename__ = "user"
    id = sa.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    first_name = sa.Column(sa.String, nullable=False)
    last_name = sa.Column(sa.String, nullable=False)
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


class UserIn(BaseModel):
    first_name: str
    last_name: str


class UserOut(UserIn):
    id: uuid.UUID 
    created_at: dt.datetime
    updated_at: dt.datetime

    class Config:
        orm_mode = True
