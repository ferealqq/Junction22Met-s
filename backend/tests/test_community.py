from sqlalchemy.orm import Session
from app.db.utils import save_model
from app.models.community import Community, CommunityMember
from app.models.user import User
from app.routers.community import get_community_data

from seeders.seeder import seed_analytics, seed_task, seed_user

from fastapi.testclient import TestClient

from tests.test_routes import use_user

def test_community_models(db: Session):
    owner = seed_user(db)

    comm = Community(
        user_id = owner.id
    )
    comm.members.extend([owner,pekka:=User(username="pekka"),jasse:=User(username="jasse")])
    db.add_all([comm,owner,pekka,jasse])
    db.commit()
    c = db.query(Community).filter(Community.id == comm.id).one_or_none()
    assert c != None 
    assert c.members != None
    assert len(c.members) == 3

def test_get_community_data(db : Session):
    owner = seed_user(db)

    comm = Community(
        user_id = owner.id
    )
    comm.members.extend([owner,pekka:=User(username="pekka"),jasse:=User(username="jasse")])
    db.add_all([comm,owner,pekka,jasse])
    tasks = [seed_task(db) for _ in range(4)]
    for i in [owner,pekka,jasse]:
        seed_analytics(db,i,tasks)
    data = get_community_data(comm.id,db)

    assert data != None

def test_get_communities(db : Session, auth_client: TestClient):
    owner = seed_user(db)

    comm = Community(
        user_id = owner.id
    )
    comm.members.extend([owner,pekka:=User(username="pekka"),jasse:=User(username="jasse")])
    db.add_all([comm,owner,pekka,jasse])
    tasks = [seed_task(db) for _ in range(4)]
    for i in [owner,pekka,jasse]:
        seed_analytics(db,i,tasks)

    auth_client = use_user(auth_client,owner)

    res = auth_client.get("/api/communities")

    assert res.status_code == 200