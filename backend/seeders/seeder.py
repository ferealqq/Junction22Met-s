from datetime import date, timedelta
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
    ends_at=date.today() - timedelta(days=2),
    task_id=None
) -> TaskActivity:
    if task_id == None:
        ta = TaskActivity(
            starts_at = starts_at,
            ends_at = ends_at,
            task_id = seed_task(db).id        
        )
    else:
        ta = TaskActivity(
            starts_at = starts_at,
            ends_at = ends_at,
            task_id = task_id
        )
    return save_model(db,ta)

def seed_task_completion(
    db: Session,
    
)