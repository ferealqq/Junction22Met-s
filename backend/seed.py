

from fastapi import Depends
from app.db.deps import get_db
from seeders.seeder import seed_analytics, seed_task, seed_task_activity, seed_user, seed_task_completion
import datetime

# db = Depends(get_db)
db = next(get_db())

users = [
  pekka := seed_user(db, "pekka"),
  jasse := seed_user(db, "jasse"),
  jaakko := seed_user(db, "jaakko"),
  aleksi := seed_user(db, "aleksi"),
  ilkka := seed_user(db, "ilkka"),
  seed_user(db, "gcp_cron_trigger"),
]

pyykinpesu = seed_task(db, "pyykinpesu", "pyykinpesu", 1.2)
astianpesukone = seed_task(db, "astianpesukone", "astianpesukone", 1)
lappari = seed_task(db, "lappari", "lappari", 0.12)
lamput = seed_task(db, "lamput", "lamput", 0.05)
kiuas = seed_task(db, "kiuas", "kiuas", 10)
lounas = seed_task(db, "lounas", "lounas", 1.1)
dinner = seed_task(db, "dinner", "dinner", 1.1)
tesla = seed_task(db, "tesla", "tesla", 80)

now = datetime.datetime.now()
today = datetime.date.today()
yesterday = today - datetime.timedelta(days=1)
two_days_ago = today - datetime.timedelta(days=2)
three_days_ago = today - datetime.timedelta(days=3)
four_days_ago = today - datetime.timedelta(days=4)
five_days_ago = today - datetime.timedelta(days=5)
six_days_ago = today - datetime.timedelta(days=6)

pyykki1 = seed_task_activity(db, task_id=pyykinpesu.id, starts_at=two_days_ago, ends_at=two_days_ago + datetime.timedelta(hours=1), emissions_saved=4.2, money_saved=4.2)
pyykki2 = seed_task_activity(db, task_id=pyykinpesu.id, starts_at=three_days_ago, ends_at=three_days_ago + datetime.timedelta(hours=1), emissions_saved=1.2, money_saved=2.1)
lounas1 = seed_task_activity(db, task_id=lounas.id, starts_at=two_days_ago, ends_at=two_days_ago + datetime.timedelta(hours=1), emissions_saved=1.1, money_saved=1.5)
lounas2 = seed_task_activity(db, task_id=lounas.id, starts_at=three_days_ago, ends_at=three_days_ago + datetime.timedelta(hours=1), emissions_saved=31, money_saved=1.3)
dinner1 = seed_task_activity(db, task_id=dinner.id, starts_at=two_days_ago, ends_at=two_days_ago + datetime.timedelta(hours=1), emissions_saved=11, money_saved=1)
dinner2 = seed_task_activity(db, task_id=dinner.id, starts_at=three_days_ago, ends_at=three_days_ago + datetime.timedelta(hours=1), emissions_saved=3.1, money_saved=0.2)
tesla1 = seed_task_activity(db, task_id=tesla.id, starts_at=two_days_ago, ends_at=two_days_ago + datetime.timedelta(hours=1), emissions_saved=10, money_saved=10)
kiuas1 = seed_task_activity(db, task_id=kiuas.id, starts_at=two_days_ago, ends_at=two_days_ago + datetime.timedelta(hours=1), emissions_saved=10, money_saved=10)
lamput1 = seed_task_activity(db, task_id=lamput.id, starts_at=two_days_ago, ends_at=two_days_ago + datetime.timedelta(hours=1), emissions_saved=0.5, money_saved=0.1)
lappari1 = seed_task_activity(db, task_id=lappari.id, starts_at=two_days_ago, ends_at=two_days_ago + datetime.timedelta(hours=1), emissions_saved=0.12, money_saved=0.1)
astianpesukone1 = seed_task_activity(db, task_id=astianpesukone.id, starts_at=two_days_ago, ends_at=two_days_ago + datetime.timedelta(hours=1), emissions_saved=1, money_saved=0.3)

seed_task_completion(db, user_id=pekka.id, task_id=pyykinpesu.id, task_activity_id=pyykki1.id, completed_at=today)
seed_task_completion(db, user_id=pekka.id, task_id=lounas.id, task_activity_id=lounas2.id, completed_at=today)
seed_task_completion(db, user_id=pekka.id, task_id=lounas.id, task_activity_id=lounas1.id, completed_at=yesterday)
seed_task_completion(db, user_id=pekka.id, task_id=lounas.id, task_activity_id=lounas1.id, completed_at=yesterday)
seed_task_completion(db, user_id=pekka.id, task_id=lounas.id, task_activity_id=lounas1.id, completed_at=two_days_ago)
seed_task_completion(db, user_id=pekka.id, task_id=pyykinpesu.id, task_activity_id=pyykki1.id, completed_at=two_days_ago)
seed_task_completion(db, user_id=pekka.id, task_id=pyykinpesu.id, task_activity_id=pyykki1.id, completed_at=two_days_ago)
seed_task_completion(db, user_id=pekka.id, task_id=pyykinpesu.id, task_activity_id=pyykki1.id, completed_at=two_days_ago)
seed_task_completion(db, user_id=pekka.id, task_id=pyykinpesu.id, task_activity_id=pyykki2.id, completed_at=three_days_ago)
seed_task_completion(db, user_id=pekka.id, task_id=lounas.id, task_activity_id=lounas2.id, completed_at=three_days_ago)
seed_task_completion(db, user_id=pekka.id, task_id=lounas.id, task_activity_id=lounas2.id, completed_at=four_days_ago)
seed_task_completion(db, user_id=pekka.id, task_id=dinner.id, task_activity_id=dinner2.id, completed_at=four_days_ago)
seed_task_completion(db, user_id=pekka.id, task_id=kiuas.id, task_activity_id=kiuas1.id, completed_at=five_days_ago)
seed_task_completion(db, user_id=pekka.id, task_id=lounas.id, task_activity_id=lounas2.id, completed_at=five_days_ago)
seed_task_completion(db, user_id=pekka.id, task_id=dinner.id, task_activity_id=dinner1.id, completed_at=six_days_ago)
seed_task_completion(db, user_id=pekka.id, task_id=lounas.id, task_activity_id=lounas2.id, completed_at=six_days_ago)

seed_task_completion(db, user_id=ilkka.id, task_id=pyykinpesu.id, task_activity_id=pyykki1.id, completed_at=today)
seed_task_completion(db, user_id=ilkka.id, task_id=lounas.id, task_activity_id=lounas2.id, completed_at=today)
seed_task_completion(db, user_id=ilkka.id, task_id=lounas.id, task_activity_id=lounas1.id, completed_at=yesterday)
seed_task_completion(db, user_id=ilkka.id, task_id=lounas.id, task_activity_id=lounas1.id, completed_at=yesterday)
seed_task_completion(db, user_id=ilkka.id, task_id=pyykinpesu.id, task_activity_id=pyykki2.id, completed_at=two_days_ago)
seed_task_completion(db, user_id=ilkka.id, task_id=pyykinpesu.id, task_activity_id=pyykki1.id, completed_at=two_days_ago)
seed_task_completion(db, user_id=ilkka.id, task_id=tesla.id, task_activity_id=tesla1.id, completed_at=three_days_ago)
seed_task_completion(db, user_id=ilkka.id, task_id=pyykinpesu.id, task_activity_id=pyykki1.id, completed_at=three_days_ago)
seed_task_completion(db, user_id=ilkka.id, task_id=lappari.id, task_activity_id=lappari1.id, completed_at=four_days_ago)
seed_task_completion(db, user_id=ilkka.id, task_id=dinner.id, task_activity_id=dinner1.id, completed_at=four_days_ago)
seed_task_completion(db, user_id=ilkka.id, task_id=dinner.id, task_activity_id=dinner2.id, completed_at=five_days_ago)
seed_task_completion(db, user_id=ilkka.id, task_id=pyykinpesu.id, task_activity_id=pyykki1.id, completed_at=five_days_ago)
seed_task_completion(db, user_id=ilkka.id, task_id=lamput.id, task_activity_id=lamput1.id, completed_at=six_days_ago)
seed_task_completion(db, user_id=ilkka.id, task_id=pyykinpesu.id, task_activity_id=pyykki1.id, completed_at=six_days_ago)

seed_task_completion(db, user_id=jasse.id, task_id=pyykinpesu.id, task_activity_id=pyykki1.id, completed_at=today)
seed_task_completion(db, user_id=jasse.id, task_id=lounas.id, task_activity_id=lounas2.id, completed_at=yesterday)
seed_task_completion(db, user_id=jasse.id, task_id=lounas.id, task_activity_id=lounas1.id, completed_at=yesterday)
seed_task_completion(db, user_id=jasse.id, task_id=lounas.id, task_activity_id=lounas1.id, completed_at=today)
seed_task_completion(db, user_id=jasse.id, task_id=pyykinpesu.id, task_activity_id=pyykki2.id, completed_at=two_days_ago)
seed_task_completion(db, user_id=jasse.id, task_id=pyykinpesu.id, task_activity_id=pyykki1.id, completed_at=three_days_ago)
seed_task_completion(db, user_id=jasse.id, task_id=tesla.id, task_activity_id=tesla1.id, completed_at=three_days_ago)
seed_task_completion(db, user_id=jasse.id, task_id=pyykinpesu.id, task_activity_id=pyykki1.id, completed_at=two_days_ago)
seed_task_completion(db, user_id=jasse.id, task_id=lappari.id, task_activity_id=lappari1.id, completed_at=six_days_ago)
seed_task_completion(db, user_id=jasse.id, task_id=dinner.id, task_activity_id=dinner1.id, completed_at=four_days_ago)
seed_task_completion(db, user_id=jasse.id, task_id=dinner.id, task_activity_id=dinner2.id, completed_at=five_days_ago)
seed_task_completion(db, user_id=jasse.id, task_id=pyykinpesu.id, task_activity_id=pyykki1.id, completed_at=four_days_ago)
seed_task_completion(db, user_id=jasse.id, task_id=lamput.id, task_activity_id=lamput1.id, completed_at=six_days_ago)
seed_task_completion(db, user_id=jasse.id, task_id=pyykinpesu.id, task_activity_id=pyykki1.id, completed_at=five_days_ago)

seed_task_completion(db, user_id=jaakko.id, task_id=pyykinpesu.id, task_activity_id=pyykki1.id, completed_at=six_days_ago)
seed_task_completion(db, user_id=jaakko.id, task_id=lounas.id, task_activity_id=lounas2.id, completed_at=four_days_ago)
seed_task_completion(db, user_id=jaakko.id, task_id=lounas.id, task_activity_id=lounas1.id, completed_at=six_days_ago)
seed_task_completion(db, user_id=jaakko.id, task_id=lounas.id, task_activity_id=lounas1.id, completed_at=five_days_ago)
seed_task_completion(db, user_id=jaakko.id, task_id=pyykinpesu.id, task_activity_id=pyykki2.id, completed_at=two_days_ago)
seed_task_completion(db, user_id=jaakko.id, task_id=pyykinpesu.id, task_activity_id=pyykki1.id, completed_at=five_days_ago)
seed_task_completion(db, user_id=jaakko.id, task_id=tesla.id, task_activity_id=tesla1.id, completed_at=three_days_ago)
seed_task_completion(db, user_id=jaakko.id, task_id=pyykinpesu.id, task_activity_id=pyykki1.id, completed_at=yesterday)
seed_task_completion(db, user_id=jaakko.id, task_id=lappari.id, task_activity_id=lappari1.id, completed_at=three_days_ago)
seed_task_completion(db, user_id=jaakko.id, task_id=dinner.id, task_activity_id=dinner1.id, completed_at=today)
seed_task_completion(db, user_id=jaakko.id, task_id=dinner.id, task_activity_id=dinner2.id, completed_at=two_days_ago)
seed_task_completion(db, user_id=jaakko.id, task_id=pyykinpesu.id, task_activity_id=pyykki1.id, completed_at=four_days_ago)
seed_task_completion(db, user_id=jaakko.id, task_id=lamput.id, task_activity_id=lamput1.id, completed_at=today)
seed_task_completion(db, user_id=jaakko.id, task_id=pyykinpesu.id, task_activity_id=pyykki1.id, completed_at=yesterday)

seed_task_completion(db, user_id=aleksi.id, task_id=pyykinpesu.id, task_activity_id=pyykki1.id, completed_at=six_days_ago)
seed_task_completion(db, user_id=aleksi.id, task_id=lounas.id, task_activity_id=lounas2.id, completed_at=six_days_ago)
seed_task_completion(db, user_id=aleksi.id, task_id=lounas.id, task_activity_id=lounas1.id, completed_at=five_days_ago)
seed_task_completion(db, user_id=aleksi.id, task_id=lounas.id, task_activity_id=lounas1.id, completed_at=five_days_ago)
seed_task_completion(db, user_id=aleksi.id, task_id=lounas.id, task_activity_id=lounas1.id, completed_at=four_days_ago)
seed_task_completion(db, user_id=aleksi.id, task_id=pyykinpesu.id, task_activity_id=pyykki1.id, completed_at=four_days_ago)
seed_task_completion(db, user_id=aleksi.id, task_id=pyykinpesu.id, task_activity_id=pyykki1.id, completed_at=three_days_ago)
seed_task_completion(db, user_id=aleksi.id, task_id=pyykinpesu.id, task_activity_id=pyykki1.id, completed_at=six_days_ago)
seed_task_completion(db, user_id=aleksi.id, task_id=pyykinpesu.id, task_activity_id=pyykki2.id, completed_at=today)
seed_task_completion(db, user_id=aleksi.id, task_id=lounas.id, task_activity_id=lounas2.id, completed_at=three_days_ago)
seed_task_completion(db, user_id=aleksi.id, task_id=lounas.id, task_activity_id=lounas2.id, completed_at=two_days_ago)
seed_task_completion(db, user_id=aleksi.id, task_id=dinner.id, task_activity_id=dinner2.id, completed_at=two_days_ago)
seed_task_completion(db, user_id=aleksi.id, task_id=kiuas.id, task_activity_id=kiuas1.id, completed_at=yesterday)
seed_task_completion(db, user_id=aleksi.id, task_id=lounas.id, task_activity_id=lounas2.id, completed_at=yesterday)
seed_task_completion(db, user_id=aleksi.id, task_id=dinner.id, task_activity_id=dinner1.id, completed_at=today)
seed_task_completion(db, user_id=aleksi.id, task_id=lounas.id, task_activity_id=lounas2.id, completed_at=today)

# tasks = []
# tas = []
# for i in range(5):
#   tasks.append(task := seed_task(db))
#   tas.append(seed_task_activity(db,task_id=task.id))

# seed_analytics(db, pekka)

print("seed analytics")