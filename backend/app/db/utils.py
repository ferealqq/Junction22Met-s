import logging
from contextlib import asynccontextmanager
from typing import AsyncGenerator
from fastapi import HTTPException

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.sql import operators
from fastapi import HTTPException, status

from app.db.deps import get_db


logger = logging.getLogger(__name__)


@asynccontextmanager
async def transaction() -> AsyncGenerator[None, None]:
    db: AsyncSession = get_db()
    """if select was called before than implicit transaction has already started"""
    if not db.in_transaction():
        async with db.begin():
            logger.debug("explicit transaction begin")
            yield
        logger.debug("explicit transaction commit")
    else:
        logger.debug("already in transaction")
        yield
        if db.in_transaction():
            await db.commit()
            logger.debug("implicit transaction commit")


# https://github.com/absent1706/sqlalchemy-mixins/blob/master/sqlalchemy_mixins/smartquery.py
operators_map = {
    "isnull": lambda c, v: (c == None) if v else (c != None),
    "exact": operators.eq,
    "ne": operators.ne,  # not equal or is not (for None)
    "gt": operators.gt,  # greater than , >
    "ge": operators.ge,  # greater than or equal, >=
    "lt": operators.lt,  # lower than, <
    "le": operators.le,  # lower than or equal, <=
    "in": operators.in_op,
    "notin": operators.notin_op,
    "between": lambda c, v: c.between(v[0], v[1]),
    "like": operators.like_op,
    "ilike": operators.ilike_op,
    "startswith": operators.startswith_op,
    "istartswith": lambda c, v: c.ilike(v + "%"),
    "endswith": operators.endswith_op,
    "iendswith": lambda c, v: c.ilike("%" + v),
    "overlaps": lambda c, v: getattr(c, "overlaps")(v),
}


def save_model(db, model):
    # save model to the database
    db.add(model)
    db.commit()
    # TODO this is a bit excessive. We should find a way to return the model without fetching it from the database
    # refresh fecthes the item from the database
    db.refresh(model)
    return model

NOT_FOUND_EXCEPTION = HTTPException(
    status_code=status.HTTP_404_NOT_FOUND, detail="Resource not found"
)

INVALID_CREDENTIALS_EXCEPTION = HTTPException(
    status_code=status.HTTP_400_BAD_REQUEST,
    detail="Could not validate credentials",
)

UNAUTHORIZED_EXCEPTION = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Unauthorized request",
)

FORBIDDEN_EXCEPTION = HTTPException(
    status_code=status.HTTP_403_FORBIDDEN, detail="Forbidden request"
)

ISE_EXCEPTION = HTTPException(
    status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
    detail="Internal server error",
)

BAD_REQUEST_EXCEPTION = HTTPException(
    status_code=status.HTTP_400_BAD_REQUEST,
    detail="Malformed request sent to the server",
)