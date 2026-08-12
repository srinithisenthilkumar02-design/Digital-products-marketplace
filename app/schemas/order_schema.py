from pydantic import BaseModel


class OrderCreate(BaseModel):
    buyer_id: int
    product_id: int
    total_amount: float



class OrderResponse(BaseModel):
    id: int
    buyer_id: int
    product_id: int
    total_amount: float

    class Config:
        from_attributes = True