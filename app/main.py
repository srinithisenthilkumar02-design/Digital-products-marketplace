from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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


# Create FastAPI application
app = FastAPI(
    title="Digital Products Marketplace",
    description="Marketplace for buying and selling digital products",
    version="1.0.0"
)


# Allow frontend to communicate with backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Home
@app.get("/")
def home():
    return {
        "message": "Digital Products Marketplace API Running"
    }


# API routes
app.include_router(
    auth_routes.router,
    prefix="/api/auth",
    tags=["Authentication"]
)

app.include_router(
    user_routes.router,
    prefix="/api/users",
    tags=["Users"]
)

app.include_router(
    product_routes.router,
    prefix="/api/products",
    tags=["Products"]
)

app.include_router(
    category_routes.router,
    prefix="/api/categories",
    tags=["Categories"]
)

app.include_router(
    order_routes.router,
    prefix="/api/orders",
    tags=["Orders"]
)

app.include_router(
    payment_routes.router,
    prefix="/api/payments",
    tags=["Payments"]
)