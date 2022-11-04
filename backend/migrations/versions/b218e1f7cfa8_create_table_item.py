"""Create table item

Revision ID: b218e1f7cfa8
Revises: b4ff9cc66fbf
Create Date: 2022-11-03 22:32:01.419090

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'b218e1f7cfa8'
down_revision = 'b4ff9cc66fbf'
branch_labels = None
depends_on = None


def upgrade():
    # depricated delete later 
    op.create_table('item',
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("name", sa.String(), nullable=True),
        sa.Column('user_id', postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column('created_at', sa.DateTime(), server_default=sa.text('now()'), nullable=True),
        sa.Column('updated_at', sa.DateTime(), server_default=sa.text('now()'), nullable=True),
        sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
        sa.PrimaryKeyConstraint('id')
    )


def downgrade():
    op.drop_table('item')