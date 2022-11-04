from sqlalchemy.dialects.postgresql import UUID

import uuid
import sqlalchemy as sa

from ..db.base import Base

class Item(Base):
    __tablename__ = "item"
    id = sa.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    first_name = sa.Column(sa.String, nullable=False)
    last_name = sa.Column(sa.String, nullable=False)
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('now()'), nullable=True),
    sa.Column('updated_at', sa.DateTime(), server_default=sa.text('now()'), nullable=True),