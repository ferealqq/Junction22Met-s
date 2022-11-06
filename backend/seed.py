

from fastapi import Depends
from app.db.deps import get_db

from seeders.seeder import seed_analytics, seed_task, seed_task_activity, seed_user, seed_task_completion
import datetime

# db = Depends(get_db)
db = next(get_db())
def vanha():
  users = [
    pekka := seed_user(db, "pekka"),
    seed_user(db, "jasse"),
    seed_user(db, "jaakko"),
    seed_user(db, "aleksi"),
    seed_user(db, "ilkka"),
    seed_user(db, "gcp_cron_trigger"),
  ]

users = [
  pekka := seed_user(db, "pekka"),
  jasse := seed_user(db, "jasse"),
  jaakko := seed_user(db, "jaakko"),
  aleksi := seed_user(db, "aleksi"),
  ilkka := seed_user(db, "ilkka"),
  seed_user(db, "gcp_cron_trigger"),
]

pyykinpesu = seed_task(db, "Washing clothes", "You should program your washing machine to run at this time to optimise savings and minimize your carbon footprint", 1.2)
astianpesukone = seed_task(db, "Washing Dishes", "You should program your dishwasher to run at this time to optimise savings and minimize your carbon footprint", 1)
lappari = seed_task(db, "Laptop charging", "An energy consumption peak is coming! Don't charge your laptop for the next hour to save on energy.", 0.12)
lamput = seed_task(db, "Turn lamps off", "An energy consumption peak is coming and it's still sunny outside, save energy by turning the ligths of.", 0.05)
kiuas = seed_task(db, "Sauna", "This day has higher energy prices and consumption than unsual. You should avoid going to the sauna today.", 10)
lounas = seed_task(db, "Lunch", "We have determined that this time is the most efficient time slot to take a lunch.", 1.1)
dinner = seed_task(db, "Dinner", "We have determined that this time is the most efficient time slot to take a lunch.", 1.1)
tesla = seed_task(db, "Electric vehicles charging", "Charge your electric vehicle at this time to get massive savings and you'll also have a big impact on your carbon footprint.", 80)

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

print("Done!")