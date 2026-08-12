from sqlalchemy.orm import Session

from app.models.product import Product
from app.schemas.product_schema import ProductCreate


def create_product(
    db: Session,
    product: ProductCreate
):

    new_product = Product(
        title=product.title,
        description=product.description,
        price=product.price,
        file_url=product.file_url,
        seller_id=product.seller_id,
        category_id=product.category_id
    )

    db.add(new_product)
    db.commit()
    db.refresh(new_product)

    return new_product



def get_products(db: Session):

    return db.query(Product).all()