import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Checkout() {
  const navigate = useNavigate();

  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [loading, setLoading] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      for (const item of cartItems) {
        // Create Order
        const orderResponse = await fetch(
          "http://127.0.0.1:8000/api/orders/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              buyer_id: 1,
              product_id: item.id,
              total_amount: item.price,
            }),
          }
        );

        if (!orderResponse.ok) {
          throw new Error("Order creation failed");
        }

        const order = await orderResponse.json();

        // Create Payment
        const paymentResponse = await fetch(
          "http://127.0.0.1:8000/api/payments/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              order_id: order.id,
              payment_status: "completed",
              amount: item.price,
            }),
          }
        );

        if (!paymentResponse.ok) {
          throw new Error("Payment creation failed");
        }
      }

      alert("Payment successful! Order placed successfully.");

      localStorage.removeItem("cart");

      navigate("/dashboard");
    } catch (error) {
      console.error("Checkout error:", error);

      alert(
        "Payment failed. Please make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page">
        <Navbar />

        <div className="container py-5">
          <div className="empty-checkout">
            <div>🛒</div>

            <h2>Your cart is empty</h2>

            <p>
              Add a digital product before proceeding to checkout.
            </p>

            <Link
              to="/products"
              className="checkout-primary-button"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <Navbar />

      <div className="container py-5">

        <div className="checkout-heading">
          <span>SECURE CHECKOUT</span>

          <h1>Complete Your Purchase</h1>

          <p>
            Enter your details and choose your payment method.
          </p>
        </div>

        <form onSubmit={handlePlaceOrder}>
          <div className="checkout-layout">

            {/* Customer Information */}

            <div className="checkout-main">

              <div className="checkout-card">

                <div className="checkout-card-heading">
                  <span>01</span>

                  <div>
                    <h2>Customer Information</h2>
                    <p>Enter your contact details</p>
                  </div>
                </div>

                <div className="checkout-form-grid">

                  <div className="checkout-field">
                    <label>First Name</label>

                    <input
                      type="text"
                      placeholder="Enter first name"
                      required
                    />
                  </div>

                  <div className="checkout-field">
                    <label>Last Name</label>

                    <input
                      type="text"
                      placeholder="Enter last name"
                      required
                    />
                  </div>

                  <div className="checkout-field full">
                    <label>Email Address</label>

                    <input
                      type="email"
                      placeholder="Enter email address"
                      required
                    />
                  </div>

                </div>
              </div>

              {/* Payment */}

              <div className="checkout-card">

                <div className="checkout-card-heading">
                  <span>02</span>

                  <div>
                    <h2>Payment Method</h2>
                    <p>
                      Choose your preferred payment method
                    </p>
                  </div>
                </div>

                <div className="payment-options">

                  {/* Card Payment */}

                  <label
                    className={
                      paymentMethod === "card"
                        ? "payment-option active"
                        : "payment-option"
                    }
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                    />

                    <div>
                      <strong>💳 Card Payment</strong>

                      <small>
                        Credit or debit card
                      </small>
                    </div>
                  </label>

                  {/* UPI Payment */}

                  <label
                    className={
                      paymentMethod === "upi"
                        ? "payment-option active"
                        : "payment-option"
                    }
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={paymentMethod === "upi"}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                    />

                    <div>
                      <strong>📱 UPI</strong>

                      <small>
                        Pay using UPI
                      </small>
                    </div>
                  </label>

                </div>

                {/* Card Details */}

                {paymentMethod === "card" && (
                  <div className="payment-fields">

                    <div className="checkout-field full">
                      <label>Card Number</label>

                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>

                    <div className="checkout-field">
                      <label>Expiry Date</label>

                      <input
                        type="text"
                        placeholder="MM / YY"
                        required
                      />
                    </div>

                    <div className="checkout-field">
                      <label>CVV</label>

                      <input
                        type="password"
                        placeholder="CVV"
                        required
                      />
                    </div>

                  </div>
                )}

                {/* UPI Details */}

                {paymentMethod === "upi" && (
                  <div className="payment-fields">

                    <div className="checkout-field full">
                      <label>UPI ID</label>

                      <input
                        type="text"
                        placeholder="example@upi"
                        required
                      />
                    </div>

                  </div>
                )}

              </div>
            </div>

            {/* Order Summary */}

            <div className="checkout-summary">

              <div className="checkout-summary-card">

                <h2>Order Summary</h2>

                {cartItems.map((item) => (
                  <div
                    className="checkout-product"
                    key={item.id}
                  >
                    <div className="checkout-product-image">
                      DIGITAL
                    </div>

                    <div>
                      <strong>{item.title}</strong>

                      <small>
                        Digital Product
                      </small>
                    </div>

                    <span>
                      ₹{item.price}
                    </span>
                  </div>
                ))}

                <hr />

                <div className="checkout-total-row">
                  <span>Subtotal</span>
                  <span>₹{total}</span>
                </div>

                <div className="checkout-total-row">
                  <span>Discount</span>
                  <span>₹0</span>
                </div>

                <hr />

                <div className="checkout-grand-total">
                  <span>Total</span>

                  <strong>
                    ₹{total}
                  </strong>
                </div>

                <button
                  type="submit"
                  className="place-order-button"
                  disabled={loading}
                >
                  {loading
                    ? "Processing Payment..."
                    : "Place Order →"}
                </button>

                <p className="checkout-security">
                  🔒 Your payment information is secure
                </p>

              </div>
            </div>

          </div>
        </form>

      </div>
    </div>
  );
}

export default Checkout;