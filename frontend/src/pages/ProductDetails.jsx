import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        return response.json();
      })
      .then((data) => {
        console.log("Products from backend:", data);
        console.log("Product ID from URL:", id);

        const foundProduct = data.find(
          (item) => String(item.id) === String(id)
        );

        setProduct(foundProduct || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Product API error:", error);
        setLoading(false);
      });
  }, [id]);

  const addToCart = () => {
    if (!product) return;

    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const alreadyAdded = existingCart.some(
      (item) => item.id === product.id
    );

    if (!alreadyAdded) {
      existingCart.push(product);

      localStorage.setItem(
        "cart",
        JSON.stringify(existingCart)
      );

      alert("Product added to cart!");
    } else {
      alert("Product is already in your cart.");
    }
  };

  if (loading) {
    return (
      <div className="pro-details-page">
        <Navbar />

        <main className="pro-details-main">
          <div className="pro-container">
            <h2>Loading product...</h2>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pro-details-page">
        <Navbar />

        <main className="pro-details-main">
          <div className="pro-container">
            <h2>Product not found.</h2>

            <Link to="/products">
              ← Back to Products
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="pro-details-page">

      <Navbar />

      <main className="pro-details-main">

        <div className="pro-container">

          {/* BREADCRUMB */}

          <div className="pro-breadcrumb">

            <Link to="/">
              Home
            </Link>

            <span>/</span>

            <Link to="/products">
              Products
            </Link>

            <span>/</span>

            <strong>
              {product.title}
            </strong>

          </div>

          <div className="pro-details-layout">

            {/* PRODUCT PREVIEW */}

            <div className="pro-details-preview">

              <div className="pro-details-image">

                <span className="pro-preview-category">
                  Digital Product
                </span>

                <div className="pro-details-icon">
                  💻
                </div>

                <div className="pro-preview-label">
                  DIGITAL PRODUCT
                </div>

              </div>

              <div className="pro-preview-info">

                <span>
                  Instant digital access
                </span>

                <span>
                  Secure purchase
                </span>

                <span>
                  No physical shipping
                </span>

              </div>

            </div>

            {/* PRODUCT INFORMATION */}

            <div className="pro-details-content">

              <div className="pro-details-category">
                Digital Product
              </div>

              <h1>
                {product.title}
              </h1>

              <div className="pro-details-rating">

                <strong>
                  ★ 4.8
                </strong>

                <span>
                  Digital product
                </span>

              </div>

              <p className="pro-details-description">
                {product.description}
              </p>

              {/* SELLER */}

              <div className="pro-details-seller">

                <div className="pro-seller-avatar">
                  S
                </div>

                <div>

                  <small>
                    Created by
                  </small>

                  <strong>
                    Seller #{product.seller_id}
                  </strong>

                </div>

              </div>

              <div className="pro-details-divider" />

              {/* PRICE */}

              <div className="pro-details-price">

                <div>

                  <small>
                    Digital product price
                  </small>

                  <strong>
                    ₹{product.price}
                  </strong>

                </div>

                <span>
                  One-time purchase
                </span>

              </div>

              {/* ACTIONS */}

              <div className="pro-details-actions">

                <button
                  className="pro-add-cart"
                  onClick={addToCart}
                >
                  Add to Cart
                </button>

                <Link
                  to="/checkout"
                  className="pro-buy-now"
                  onClick={addToCart}
                >
                  Buy Now →
                </Link>

              </div>

              <div className="pro-purchase-note">
                🔒 Secure checkout • Instant access after purchase
              </div>

            </div>

          </div>

          {/* DESCRIPTION */}

          <section className="pro-details-bottom">

            <div className="pro-description-card">

              <span>
                PRODUCT INFORMATION
              </span>

              <h2>
                About this product
              </h2>

              <p>
                {product.description}
              </p>

            </div>

            {/* FEATURES */}

            <div className="pro-features-card">

              <h3>
                What's included?
              </h3>

              <div>
                ✓ Digital product access
              </div>

              <div>
                ✓ Instant download
              </div>

              <div>
                ✓ Lifetime access
              </div>

              <div>
                ✓ Secure purchase
              </div>

            </div>

          </section>

        </div>

      </main>

      <Footer />

    </div>
  );
}

export default ProductDetails;