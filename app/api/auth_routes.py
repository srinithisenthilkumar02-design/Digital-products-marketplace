from fastapi import APIRouter, Depends, HTTPException

from sqlalchemy.orm import Session

from app.core.database import get_db

from app.schemas.user_schema import UserCreate, UserLogin

from app.services.auth_service import (
    register_user,
    login_user
)


router = APIRouter()



@router.post("/signup")
def signup(
    user: UserCreate,
    db: Session = Depends(get_db)
):

    return register_user(
        db,
        user
    )



@router.post("/login")
def login(
    user: UserLogin,
    db: Session = Depends(get_db)
):

    result = login_user(
        db,
        user.email,
        user.password
    )


    if not result:
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )


    return result