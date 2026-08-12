from pydantic_settings import BaseSettings


class Settings(BaseSettings):

    DATABASE_URL: str = "sqlite:///./marketplace.db"

    SECRET_KEY: str = "digital_marketplace_secret_key"

    ALGORITHM: str = "HS256"


    class Config:
        env_file = ".env"


settings = Settings()