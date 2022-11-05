import datetime as dt
from pydantic import BaseModel
from sqlalchemy.dialects.postgresql import UUID

import uuid
import sqlalchemy as sa
from sqlalchemy.orm import relationship

from ..db.base import Base


class Peaks(Base):
    __tablename__ = "peaks"
    id = sa.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    time = sa.Column(sa.String, nullable=False)
    value = sa.Column(sa.DECIMAL, nullable=False)
    isPeak = sa.Column(sa.Boolean, nullable=False)
    isValley = sa.Column(sa.Boolean, nullable=False)

    created_at = sa.Column("created_at", sa.DateTime(), server_default=sa.text("now()"), nullable=True)
    updated_at = sa.Column("updated_at", sa.DateTime(), server_default=sa.text("now()"), nullable=True)


class peaksIn(BaseModel):
    time: dt.datetime
    value: str
    isPeak: bool
    isValley: bool


class peaksOut(peaksIn):
    id: uuid.UUID
    created_at: dt.datetime
    updated_at: dt.datetime

    class Config:
        orm_mode = True
