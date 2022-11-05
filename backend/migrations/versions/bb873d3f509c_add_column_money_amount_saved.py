"""add column money amount saved

Revision ID: bb873d3f509c
Revises: 6ca6ffbfd1f2
Create Date: 2022-11-05 23:02:55.606631

"""
from alembic import op
import sqlalchemy as sa
from app.models.task_activity import TaskActivity

from app.models.user import User


# revision identifiers, used by Alembic.
revision = 'bb873d3f509c'
down_revision = '6ca6ffbfd1f2'
branch_labels = None
depends_on = None


def upgrade():  
    conn = op.get_bind()

    op.add_column("user", sa.Column("money_saved", sa.DECIMAL(), nullable=True, default=0.0))
    stmt = sa.update(User).where(User.money_saved == None).values(money_saved=0.0)
    conn.execute(stmt)
    op.alter_column("user", "money_saved", nullable=False)

    op.add_column("task_activity", sa.Column("money_saved", sa.DECIMAL(), nullable=True, default=0.0))
    stmt = sa.update(TaskActivity).where(TaskActivity.money_saved == None).values(money_saved=0.0)
    conn.execute(stmt)
    op.alter_column("task_activity", "money_saved", nullable=False)



def downgrade():
    op.drop_column("user", "money_saved")
    op.drop_column("task_activity", "money_saved")