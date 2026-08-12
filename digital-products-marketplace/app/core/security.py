from jose import jwt
from passlib.context import CryptContext


SECRET_KEY = "digital_marketplace_secret_key"

ALGORITHM = "HS256"


pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)


def hash_password(password: str):

    return pwd_context.hash(password[:72])


def verify_password(
    plain_password,
    hashed_password
):

    return pwd_context.verify(
        plain_password[:72],
        hashed_password
    )


def create_token(data: dict):

    return jwt.encode(
        data,
        SECRET_KEY,
        algorithm=ALGORITHM
    )