"""pekka tekee sudokun

Revision ID: 6ca6ffbfd1f2
Revises: cfe4d1cf8fd3
Create Date: 2022-11-05 18:16:47.966684

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6ca6ffbfd1f2'
down_revision = 'cfe4d1cf8fd3'
branch_labels = None
depends_on = None


def upgrade():
    op.add_column("peaks", sa.Column("isValley", sa.Boolean(), nullable=True))
    
    pass


def downgrade():
    pass