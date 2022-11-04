from functools import lru_cache
from pydantic import BaseSettings
from sqlalchemy.engine.url import URL


class Settings(BaseSettings):
    SERVICE_NAME: str = "MetsäBäkkäri"
    DEBUG: bool = False

    DB_POOL_SIZE: int = 5
    DB_MAX_OVERFLOW: int = 0
    DB_ECHO: bool = False
    DB_DSN: str

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"

@lru_cache()
def get_settings():
    return Settings()
