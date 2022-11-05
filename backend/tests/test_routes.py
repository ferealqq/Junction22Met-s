from datetime import date, timedelta,datetime
import random
import uuid
from fastapi.testclient import TestClient
from sqlalchemy.orm import Session
from app.dependencies.auth import JWTService
from app.models.task_completion import TaskCompletion

from app.models.user import User
from seeders.seeder import seed_analytics, seed_task, seed_task_activity, seed_task_completion, seed_user


def test_get_active_tasks(db: Session, auth_client: TestClient):
    user = seed_user(db)

    tas = [
        seed_task_activity(db),
        seed_task_activity(db, ends_at=date.today() + timedelta(days=3))
    ]
    # this task should not be returned 
    ta = seed_task_activity(db)

    tc = seed_task_completion(db,task_activity_id=ta.id, task_id=ta.task_id,user_id=user.id)

    auth_client = use_user(auth_client, user.id)

    res = auth_client.get(f"/api/tasks/active")
    data = res.json()
    assert len(data) == 2

    for (i,item) in enumerate(data):
        assert item["id"] == str(tas[i].id)
        assert item["task"]["id"] == str(tas[i].task.id)


def test_get_user_analytics(db: Session, auth_client: TestClient):
    user = seed_user(db)
    seed_analytics(db, user)

    auth_client = use_user(auth_client, user.id)

    res = auth_client.get(f"/api/tasks/user/analytics")
    data = res.json()
    assert res.status_code == 200
    
    assert data != None
    assert len(data) == 7 

def test_get_active_tasks(db: Session, auth_client: TestClient):
    user = seed_user(db)

    ta = seed_task_activity(db)

    auth_client = use_user(auth_client, user.id)

    res = auth_client.post(f"/api/tasks/complete/{ta.id}")

    assert res.status_code == 200
    data = res.json()

    assert db.query(TaskCompletion).filter(TaskCompletion.id == data["id"]).one_or_none() != None 

def test_login(db: Session, client: TestClient):
    res = client.post("api/user/login",
        json={
            "username": "pekka"
        }
    )

    assert res.status_code == 200 
    data = res.json()
    assert data["jwt"] != None
    assert JWTService().decode(data["jwt"])["id"] != None

def use_user(
    client: TestClient, user_id: uuid.UUID
) -> TestClient:
    token = JWTService().encode({"id": str(user_id)})

    client.headers["Authorization"] = f"Bearer {token}"

    return client