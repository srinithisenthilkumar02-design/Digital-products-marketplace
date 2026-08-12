from sqlalchemy.orm import Session

from app.models.payment import Payment
from app.schemas.payment_schema import PaymentCreate



def create_payment(
    db: Session,
    payment: PaymentCreate
):

    new_payment = Payment(
        order_id=payment.order_id,
        amount=payment.amount,
        payment_status="pending"
    )

    db.add(new_payment)
    db.commit()
    db.refresh(new_payment)

    return new_payment



def get_payments(
    db: Session
):

    return db.query(Payment).all()



def update_payment_status(
    db: Session,
    payment_id: int,
    status: str
):

    payment = db.query(Payment).filter(
        Payment.id == payment_id
    ).first()


    if payment:
        payment.payment_status = status

        db.commit()
        db.refresh(payment)


    return payment