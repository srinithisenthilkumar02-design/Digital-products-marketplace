from pydantic import BaseModel


class PaymentCreate(BaseModel):
    order_id: int
    payment_status: str
    amount: float


class PaymentResponse(BaseModel):
    id: int
    order_id: int
    payment_status: str
    amount: float

    class Config:
        from_attributes = True