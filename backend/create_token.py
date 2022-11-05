import uuid
from dotenv import load_dotenv
from app.dependencies.auth import JWTService

load_dotenv()

data = {"id": str(uuid.uuid4())}

print(JWTService().encode(data))