from fastapi import FastAPI

from app.core.database import Base, engine
import app.models

from app.api import (
    auth_routes,
    user_routes,
    product_routes,
    category_routes,
    order_routes,
    payment_routes
)


# Create database tables
Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="Digital Products Marketplace",
    description="Marketplace for buying and selling digital products",
    version="1.0.0"
)


# Root API
@app.get("/")
def home():
    return {
        "message": "Digital Products Marketplace API Running"
    }


# Authentication API
app.include_router(
    auth_routes.router,
    prefix="/api/auth",
    tags=["Authentication"]
)


# User API
app.include_router(
    user_routes.router,
    prefix="/api/users",
    tags=["Users"]
)


# Product API
app.include_router(
    product_routes.router,
    prefix="/api/products",
    tags=["Products"]
)


# Category API
app.include_router(
    category_routes.router,
    prefix="/api/categories",
    tags=["Categories"]
)


# Order API
app.include_router(
    order_routes.router,
    prefix="/api/orders",
    tags=["Orders"]
)


# Payment API
app.include_router(
    payment_routes.router,
    prefix="/api/payments",
    tags=["Payments"]
)