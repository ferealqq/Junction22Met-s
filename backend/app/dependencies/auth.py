from enum import Enum
from typing import List


import time
import uuid

import jwt
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric.types import (
    PRIVATE_KEY_TYPES,
    PUBLIC_KEY_TYPES,
)

from ..settings import get_settings
from fastapi import Depends
from fastapi.security import (
    HTTPAuthorizationCredentials,
    HTTPBearer,
)
from pydantic import BaseModel
from pydantic.error_wrappers import ValidationError

# from ..auth.JWTService import JWTService
from ..db.utils import (
    INVALID_CREDENTIALS_EXCEPTION,
    ISE_EXCEPTION,
)

auth_scheme = HTTPBearer()



class TokenUser(BaseModel):
    id: str

def credential_check(
    authorization: HTTPAuthorizationCredentials = Depends(auth_scheme),
) -> TokenUser:
    credentials = authorization.credentials

    try:
        token = JWTService().decode(credentials)
        if "id" not in token:
            raise INVALID_CREDENTIALS_EXCEPTION
    except:
        raise INVALID_CREDENTIALS_EXCEPTION

    try:
        return TokenUser(**token)
    except ValidationError:
        raise INVALID_CREDENTIALS_EXCEPTION
    except:
        raise ISE_EXCEPTION



settings = get_settings()


class JWTService:
    def __init__(self):
        self.private_key = self.load_private_key()
        self.public_key = self.load_pub_key()

    def get_private_key(self) -> bytes:
        with open(settings.JWT_PRIVATE, "rb") as file:
            return file.read()

    def load_pub_key(self) -> PUBLIC_KEY_TYPES:
        with open(settings.JWT_PUBLIC, "rb") as file:
            return serialization.load_pem_public_key(
                file.read(), backend=default_backend()
            )

    def load_private_key(self) -> PRIVATE_KEY_TYPES:
        return serialization.load_pem_private_key(
            self.get_private_key(),
            password=settings.JWT_PASS.encode(),
            backend=default_backend(),
        )

    def decode(self, encodedJwt: str) -> dict:
        return jwt.decode(
            encodedJwt,
            self.public_key,
            algorithms=["RS256"],
            options={
                "require": ["exp", "iat"],
                "verify_signature": True,
                "verify_exp": True,
                "verify_nbf": True,
                "verify_iat": True,
                "verify_aud": True,
                "verify_iss": True,
            },
        )

    def encode(self, data: dict) -> bytes:
        """
        Returns: bytes presentation of the a JWT token that contains the email address of a user
        """
        if data.get("exp") == None:
            data["exp"] = int(time.time()) + 60 * 60 * 24 * 7

        if data.get("iat") == None:
            data["iat"] = int(time.time())

        return jwt.encode(data, self.private_key, algorithm="RS256")
