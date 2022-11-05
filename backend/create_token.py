import uuid
from dotenv import load_dotenv
from app.dependencies.auth import JWTService

load_dotenv()

data = {"user_id": str(uuid.uuid4())}

print(JWTService().encode(data))