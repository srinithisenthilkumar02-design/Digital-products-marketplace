from fastapi import APIRouter, Depends

from sqlalchemy.orm import Session

from app.core.database import get_db

from app.schemas.order_schema import (
    OrderCreate,
    OrderResponse
)

from app.services.order_service import (
    create_order,
    get_orders
)


router = APIRouter()



@router.post(
    "/",
    response_model=OrderResponse
)
def add_order(
    order: OrderCreate,
    db: Session = Depends(get_db)
):

    return create_order(
        db,
        order
    )



@router.get(
    "/",
    response_model=list[OrderResponse]
)
def list_orders(
    db: Session = Depends(get_db)
):

    return get_orders(db)