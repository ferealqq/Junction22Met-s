"""add column emissions saved

Revision ID: cfe4d1cf8fd3
Revises: c65a165d8fbf
Create Date: 2022-11-05 13:13:37.122218
"""
from alembic import op
import sqlalchemy as sa

# from app.db.deps import get_db
from app.models.task_activity import TaskActivity
from app.models.user import User


# revision identifiers, used by Alembic.
revision = 'cfe4d1cf8fd3'
down_revision = 'c65a165d8fbf'
branch_labels = None
depends_on = None


def upgrade():  
    conn = op.get_bind()

    op.add_column("user", sa.Column("emissions_saved", sa.DECIMAL(), nullable=True, default=0.0))
    stmt = sa.update(User).where(User.emissions_saved == None).values(emissions_saved=0.0)
    conn.execute(stmt)
    op.alter_column("user", "emissions_saved", nullable=False)

    op.add_column("task_activity", sa.Column("emissions_saved", sa.DECIMAL(), nullable=True, default=0.0))
    stmt = sa.update(TaskActivity).where(TaskActivity.emissions_saved == None).values(emissions_saved=0.0)
    conn.execute(stmt)
    op.alter_column("task_activity", "emissions_saved", nullable=False)



def downgrade():
    op.drop_column("user", "emissions_saved")