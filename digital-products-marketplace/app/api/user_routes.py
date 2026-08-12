from fastapi import APIRouter, Depends

from sqlalchemy.orm import Session

from app.core.database import get_db

from app.models.user import User


router = APIRouter()


@router.get("/")
def get_users(
    db: Session = Depends(get_db)
):

    users = db.query(User).all()

    return users


@router.get("/{user_id}")
def get_user(
    user_id: int,
    db: Session = Depends(get_db)
):

    user = db.query(User).filter(
        User.id == user_id
    ).first()

    return user