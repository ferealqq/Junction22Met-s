import uuid
from dotenv import load_dotenv
from app.db.deps import get_db
from app.db.utils import save_model
from app.dependencies.auth import JWTService
import app.models.task_completion
from app.models.user import User

load_dotenv()

# db = next(get_db())

# name = input("Type username: ")

# user = db.query(User).filter(User.username == name).one_or_none()
# if user == None:
#   c = input("user not found create new? Enter for YES, press any other key to cancel")
#   if c == "" or c == None:
#     user = save_model(db,User(user))

# data = {"id": str(user.id)}
data = {
  "id": "9358c51b-7d08-4b03-bafe-c22667b83786" 
}

print(JWTService().encode(data))