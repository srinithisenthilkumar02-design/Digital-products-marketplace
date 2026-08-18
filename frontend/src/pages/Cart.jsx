import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Cart() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="cart-page">
      <Navbar />

      <div className="container py-5">

        <div className="cart-header">
          <div>
            <span>YOUR SHOPPING CART</span>
            <h1>Shopping Cart</h1>
          </div>

          <Link to="/" className="continue-shopping">
            ← Continue Shopping
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>

            <h2>Your cart is empty</h2>

            <p>
              Discover useful digital products and add
              them to your cart.
            </p>

            <Link to="/" className="cart-primary-button">
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="cart-layout">

            {/* Items */}
            <div className="cart-items">

              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>

                  <div className="cart-product-image">
                    DIGITAL
                  </div>

                  <div className="cart-product-info">
                    <span>{item.category}</span>

                    <h3>{item.title}</h3>

                    <p>
                      Digital product • {item.format || "Digital"}
                    </p>
                  </div>

                  <div className="cart-product-price">
                    ₹{item.price}
                  </div>

                  <button
                    className="remove-cart"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    Remove
                  </button>

                </div>
              ))}

            </div>

            {/* Summary */}
            <div className="cart-summary">

              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Products</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>

              <div className="summary-row">
                <span>Discount</span>
                <span>₹0</span>
              </div>

              <hr />

              <div className="summary-total">
                <span>Total</span>
                <strong>₹{total}</strong>
              </div>

              <Link
                to="/checkout"
                className="checkout-button"
              >
                Proceed to Checkout →
              </Link>

              <div className="secure-checkout">
                🔒 Secure checkout
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default Cart;