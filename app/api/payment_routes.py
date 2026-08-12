from fastapi import APIRouter, Depends

from sqlalchemy.orm import Session

from app.core.database import get_db

from app.schemas.payment_schema import (
    PaymentCreate,
    PaymentResponse,
    PaymentUpdate
)

from app.services.payment_service import (
    create_payment,
    get_payments,
    update_payment_status
)


router = APIRouter()



@router.post(
    "/",
    response_model=PaymentResponse
)
def add_payment(
    payment: PaymentCreate,
    db: Session = Depends(get_db)
):

    return create_payment(
        db,
        payment
    )



@router.get(
    "/",
    response_model=list[PaymentResponse]
)
def list_payments(
    db: Session = Depends(get_db)
):

    return get_payments(db)



@router.put(
    "/{payment_id}",
    response_model=PaymentResponse
)
def change_payment_status(
    payment_id: int,
    payment: PaymentUpdate,
    db: Session = Depends(get_db)
):

    return update_payment_status(
        db,
        payment_id,
        payment.payment_status
    )