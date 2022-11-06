import time
import uuid
from dotenv import load_dotenv
from app.db.base import engine
from tests.conftest import drop_everything

load_dotenv()

drop_everything(engine)

import os
os.system('poetry run alembic upgrade head')

# time.sleep(3)

import seed