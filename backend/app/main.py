from fastapi import Depends, FastAPI

from app import exceptions
from app.routers.user import router as user_router
from app.routers.tasks import router as tasks_router
from app.routers.peaks import router as peaks_router
from app.settings import get_settings
from fastapi.middleware.cors import CORSMiddleware

# from app.db.deps import set_db
from app.db.exceptions import DatabaseValidationError

settings = get_settings()

app = FastAPI(
    title=settings.SERVICE_NAME,
    debug=settings.DEBUG,
    # dependencies=[Depends(set_db)],
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_allow,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(user_router, prefix="/api/user")
app.include_router(tasks_router, prefix="/api/tasks")
app.include_router(peaks_router, prefix="/api/peaks")

app.add_exception_handler(
    DatabaseValidationError,
    exceptions.database_validation_exception_handler,
)
