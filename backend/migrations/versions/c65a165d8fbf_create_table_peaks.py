"""create table peaks

Revision ID: c65a165d8fbf
Revises: 7128bc4e6461
Create Date: 2022-11-04 23:10:27.429586

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'c65a165d8fbf'
down_revision = '7128bc4e6461'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table('peaks',
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("time", sa.DateTime(), nullable=True),
        sa.Column("value", sa.DECIMAL(), nullable=True),
        sa.Column("isPeak", sa.Boolean(), nullable=True),
        sa.Column('created_at', sa.DateTime(), server_default=sa.text('now()'), nullable=True),
        sa.Column('updated_at', sa.DateTime(), server_default=sa.text('now()'), nullable=True),
        sa.PrimaryKeyConstraint('id')
    )
    pass


def downgrade():
    pass