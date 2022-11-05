

from fastapi import Depends
from app.db.deps import get_db
from seeders.seeder import seed_analytics, seed_task, seed_task_activity, seed_user

# db = Depends(get_db)
db = next(get_db())

users = [
  pekka := seed_user(db, "pekka"),
  seed_user(db, "jasse"),
  seed_user(db, "jaakko"),
  seed_user(db, "aleksi"),
  seed_user(db, "ilkka"),
  seed_user(db, "gcp_cron_trigger"),
]

# tasks = []
# tas = []
# for i in range(5):
#   tasks.append(task := seed_task(db))
#   tas.append(seed_task_activity(db,task_id=task.id))

seed_analytics(db, pekka)