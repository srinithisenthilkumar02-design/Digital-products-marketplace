from sqlalchemy import Column, Integer, String, Float, ForeignKey
from app.core.database import Base


class Product(Base):

    __tablename__ = "products"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    title = Column(
        String(255),
        nullable=False
    )

    description = Column(
        String(1000)
    )

    price = Column(
        Float,
        nullable=False
    )

    file_url = Column(
        String(500)
    )

    seller_id = Column(
        Integer,
        ForeignKey("users.id")
    )

    category_id = Column(
        Integer,
        ForeignKey("categories.id")
    )