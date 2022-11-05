"""alter user delete first & lastname, add username

Revision ID: 7128bc4e6461
Revises: 016c95d4c187
Create Date: 2022-11-04 21:54:33.377551

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7128bc4e6461'
down_revision = '016c95d4c187'
branch_labels = None
depends_on = None


def upgrade():
    op.add_column("user", sa.Column("username", sa.String(), nullable=False))
    op.drop_column("user", "first_name")
    op.drop_column("user", "last_name")

def downgrade():
    op.add_column("user", sa.Column("last_name", sa.String(), nullable=False))
    op.add_column("user", sa.Column("first_name", sa.String(), nullable=False))
    op.drop_column("user", "username")