from sqlalchemy.orm import Session

from app.models.order import Order
from app.schemas.order_schema import OrderCreate



def create_order(
    db: Session,
    order: OrderCreate
):

    new_order = Order(
        buyer_id=order.buyer_id,
        product_id=order.product_id,
        total_amount=order.total_amount
    )


    db.add(new_order)
    db.commit()
    db.refresh(new_order)

    return new_order



def get_orders(
    db: Session
):

    return db.query(Order).all()