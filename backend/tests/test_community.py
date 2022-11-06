from sqlalchemy import func
from sqlalchemy.orm import Session
from app.db.utils import save_model
from app.models.community import Community, CommunityMember
from app.models.user import User
from app.routers.community import get_community_data

from seeders.seeder import seed_analytics, seed_task, seed_user

from fastapi.testclient import TestClient
from sqlalchemy.dialects.postgresql import aggregate_order_by
from tests.test_routes import use_user

def test_community_models(db: Session):
    owner = seed_user(db)

    comm = Community()
    comm.members.extend([owner,pekka:=User(username="pekka"),jasse:=User(username="jasse")])
    db.add_all([comm,owner,pekka,jasse])
    db.commit()
    c = db.query(Community).filter(Community.id == comm.id).one_or_none()
    assert c != None 
    assert c.members != None
    assert len(c.members) == 3

def test_get_community_data(db : Session):
    owner = seed_user(db)

    comm = Community()
    comm.members.extend([owner,pekka:=User(username="pekka"),jasse:=User(username="jasse")])
    db.add_all([comm,owner,pekka,jasse])
    tasks = [seed_task(db) for _ in range(4)]
    for i in [owner,pekka,jasse]:
        seed_analytics(db,i,tasks)
    data = get_community_data(comm.id,db)

    assert data != None

async def test_get_communities(db : Session, auth_client: TestClient):
    owner = seed_user(db,username="jaakko")

    comm = Community()
    comm.members.extend([owner,pekka:=User(username="pekka"),jasse:=User(username="jasse")])
    db.add_all([comm,owner,pekka,jasse])
    tasks = [seed_task(db) for _ in range(4)]
    for i in [owner,pekka,jasse]:
        seed_analytics(db,i,tasks)
    db.commit()
    # data = db.query(
    #     func.array_agg(aggregate_order_by(User.username, User.money_saved)).label("users"),
    #     func.array_agg(aggregate_order_by(User.id, User.money_saved)).label("user_ids"),
    #     func.sum(User.emissions_saved).label("emissions_saved"),
    #     func.sum(User.money_saved).label("money_saved"),
    #     Community.created_at.label("created_at")
    # ).filter(
    #     Community.id.in_(
    #         db.query(Community.id.distinct()).filter(CommunityMember.c.user_id == owner.id)
    #     )
    # ).group_by(Community.id).all()
    # print(data)
    # assert data == None
    auth_client = use_user(auth_client,owner)
    res = auth_client.get("/api/communities")
    assert res.status_code == 200