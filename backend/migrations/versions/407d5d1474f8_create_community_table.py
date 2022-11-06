"""create community table

Revision ID: 407d5d1474f8
Revises: bb873d3f509c
Create Date: 2022-11-05 23:40:58.602567

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql


# revision identifiers, used by Alembic.
revision = '407d5d1474f8'
down_revision = 'bb873d3f509c'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table('community',
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column('created_at', sa.DateTime(), server_default=sa.text('now()'), nullable=True),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_table('community_members',
        sa.Column("user_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("community_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(['user_id'], ['user.id']),
        sa.ForeignKeyConstraint(['community_id'], ['community.id']),
    )



def downgrade():
    op.drop_table('community_members')
    op.drop_table('community')