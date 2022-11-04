from fastapi.testclient import TestClient
from sqlalchemy.orm import Session

from app.models.user import User


def test_post_user(db: Session, client: TestClient):
    assert True == True
