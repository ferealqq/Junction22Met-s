from contextvars import ContextVar
from typing import Optional

from sqlalchemy.orm import Session

from app.db.base import SessionLocal


# session_context_var: ContextVar[Optional[Session]] = ContextVar("_session", default=None)


# def set_db():
#     """Store db session in the context var and reset it"""
#     db = SessionLocal()
#     token = session_context_var.set(db)
#     try:
#         yield
#     finally:
#         db.close()
#         session_context_var.reset(token)


def get_db():
    """Fetch db session from the context var"""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()