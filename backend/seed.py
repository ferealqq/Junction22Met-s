

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

seed_task(db, "pyykinpesu", "pyykinpesu", 1.2)
seed_task(db, "astianpesukone", "astianpesukone", 1)
seed_task(db, "lappari", "lappari", 0.12)
seed_task(db, "lamput", "lamput", 0.05)
seed_task(db, "kiuas", "kiuas", 10)
seed_task(db, "lounas", "lounas", 1.1)
seed_task(db, "dinner", "dinner", 1.1)
seed_task(db, "tesla", "tesla", 80)

# tasks = []
# tas = []
# for i in range(5):
#   tasks.append(task := seed_task(db))
#   tas.append(seed_task_activity(db,task_id=task.id))

# seed_analytics(db, pekka)

print("seed analytics")