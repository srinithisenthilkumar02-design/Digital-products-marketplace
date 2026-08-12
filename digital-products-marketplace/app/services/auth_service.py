from sqlalchemy.orm import Session

from app.models.user import User

from app.schemas.user_schema import UserCreate

from app.core.security import hash_password, verify_password, create_token



def register_user(
    db: Session,
    user: UserCreate
):

    new_user = User(
        name=user.name,
        email=user.email,
        password=hash_password(user.password),
        role=user.role
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user



def login_user(
    db: Session,
    email: str,
    password: str
):

    user = db.query(User).filter(
        User.email == email
    ).first()


    if not user:
        return None


    if not verify_password(
        password,
        user.password
    ):
        return None


    token = create_token(
        {
            "user_id": user.id,
            "role": user.role
        }
    )


    return {
        "access_token": token,
        "token_type": "bearer"
    }