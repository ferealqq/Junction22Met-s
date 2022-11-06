from datetime import date, timedelta
import random
from app.db.utils import save_model
from app.models.task import Task 
from app.models.task_activity import TaskActivity 
from app.models.task_completion import TaskCompletion 
from app.models.user import User

from faker import Faker

from sqlalchemy.orm import Session

fake = Faker()

def seed_user(
    db: Session, username=fake.name()
) -> User:
    return save_model(db, User(username=username))

def seed_task(
    db: Session,
    title = fake.name(),
    desc = fake.text(),
    emission = fake.pyint()
) -> Task:
    return save_model(db, Task(
        title = title,
        desc = desc,
        emission = emission
    ))

def seed_task_activity(
    db: Session, 
    starts_at=date.today(), 
    ends_at=date.today() + timedelta(days=1),
    emissions_saved=fake.pyint(),
    money_saved=random.uniform(0.01, 0.19),
    task_id=None
) -> TaskActivity:
    if task_id == None:
        ta = TaskActivity(
            starts_at = starts_at,
            ends_at = ends_at,
            task_id = seed_task(db).id, 
            emissions_saved = emissions_saved,
            money_saved = money_saved
        )
    else:
        ta = TaskActivity(
            starts_at = starts_at,
            ends_at = ends_at,
            task_id = task_id,
            emissions_saved = emissions_saved,
            money_saved = money_saved
        )
    return save_model(db,ta)

def seed_task_completion(
    db: Session,
    task_id = None,
    task_activity_id = None,
    user_id = None,
    completed_at = date.today()
) -> TaskCompletion:
    data = {
        "task_id": task_id,
        "task_activity_id":task_activity_id,
        "user_id": user_id,
        "completed_at": completed_at
    }
    if task_id == None:
        data["task_id"] = seed_task(db).id
    if task_activity_id == None:
        data["task_activity_id"] = seed_task_activity(db,task_id=data["task_id"]).id
    if user_id == None:
        data["user_id"] = seed_user(db).id 

    return save_model(db,TaskCompletion(**data))

def seed_analytics(db, user : User, tasks = None):
    if tasks == None:
        tasks = [seed_task(db) for _ in range(4)]
    tas = []
    tcs = []
    for i in range(10):
        for j in range(2):
            tas.append(
                ta := seed_task_activity(
                    db, 
                    starts_at=date.today() + timedelta(days=i) - timedelta(hours=j+2),
                    ends_at=date.today() + timedelta(days=i) - timedelta(hours=j+2) - timedelta(minutes=i*random.randint(4,23)),
                    emissions_saved = random.randint(13,100),
                    money_saved = random.uniform(0.01, 0.29),
                    task_id= tasks[random.randint(0,len(tasks)-1)].id
                )
            )
            print(user)
            print(f"emissions saved user {user.emissions_saved}")
            print(f"emissions saved task {ta.emissions_saved}")
            user.emissions_saved += ta.emissions_saved
            user.money_saved += ta.money_saved
            db.add(user)

            tcs.append(
                seed_task_completion(
                    db,
                    task_id = ta.task_id,
                    task_activity_id = ta.id,
                    user_id = user.id,
                    completed_at=date.today() - timedelta(days=i) - timedelta(hours=j+2) - timedelta(minutes=i*3),
                )
            )

    return [tasks, tas, tcs]