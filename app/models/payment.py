from sqlalchemy import Column, Integer, String, Float, ForeignKey
from app.core.database import Base


class Payment(Base):

    __tablename__ = "payments"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    order_id = Column(
        Integer,
        ForeignKey("orders.id")
    )

    payment_status = Column(
        String,
        default="pending"
    )

    amount = Column(
        Float
    )