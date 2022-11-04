from fastapi import Depends, FastAPI

from app import exceptions
from app.routers.user import router as user_router
from app.settings import get_settings

# from app.db.deps import set_db
from app.db.exceptions import DatabaseValidationError

settings = get_settings()

app = FastAPI(
    title=settings.SERVICE_NAME,
    debug=settings.DEBUG,
    # dependencies=[Depends(set_db)],
)

app.include_router(user_router, prefix="/api/user")

app.add_exception_handler(
    DatabaseValidationError,
    exceptions.database_validation_exception_handler,
)
