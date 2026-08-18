import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProductDetails() {
  const { id } = useParams();

  const product = {
    id: id || 1,
    title: "Digital Marketing Guide",
    category: "E-Books",
    price: 299,
    rating: 4.8,
    reviews: 124,
    icon: "📘",
    description:
      "A practical digital marketing guide designed to help beginners understand modern marketing strategies and build a strong online presence.",
    seller: "Creative Studio",
  };

  const addToCart = () => {
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

  return (
    <div className="pro-details-page">

      <Navbar />

      <main className="pro-details-main">

        <div className="pro-container">

          <div className="pro-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/products">Products</Link>
            <span>/</span>
            <strong>{product.title}</strong>
          </div>

          <div className="pro-details-layout">

            {/* PRODUCT PREVIEW */}

            <div className="pro-details-preview">

              <div className="pro-details-image">

                <span className="pro-preview-category">
                  {product.category}
                </span>

                <div className="pro-details-icon">
                  {product.icon}
                </div>

                <div className="pro-preview-label">
                  DIGITAL PRODUCT
                </div>

              </div>

              <div className="pro-preview-info">
                <span>Instant digital access</span>
                <span>Secure purchase</span>
                <span>No physical shipping</span>
              </div>

            </div>

            {/* PRODUCT INFORMATION */}

            <div className="pro-details-content">

              <div className="pro-details-category">
                {product.category}
              </div>

              <h1>{product.title}</h1>

              <div className="pro-details-rating">
                <strong>★ {product.rating}</strong>
                <span>
                  {product.reviews} reviews
                </span>
              </div>

              <p className="pro-details-description">
                {product.description}
              </p>

              <div className="pro-details-seller">

                <div className="pro-seller-avatar">
                  CS
                </div>

                <div>
                  <small>Created by</small>
                  <strong>{product.seller}</strong>
                </div>

              </div>

              <div className="pro-details-divider" />

              <div className="pro-details-price">

                <div>
                  <small>Digital product price</small>
                  <strong>₹{product.price}</strong>
                </div>

                <span>One-time purchase</span>

              </div>

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

              <span>PRODUCT INFORMATION</span>

              <h2>
                About this product
              </h2>

              <p>
                This digital product provides practical,
                easy-to-understand information that can be
                accessed immediately after purchase.
                It is designed for learners, creators and
                professionals looking for useful digital
                resources.
              </p>

            </div>

            <div className="pro-features-card">

              <h3>What's included?</h3>

              <div>✓ Digital product access</div>
              <div>✓ Instant download</div>
              <div>✓ Lifetime access</div>
              <div>✓ Secure purchase</div>

            </div>

          </section>

        </div>

      </main>

      <Footer />

    </div>
  );
}

export default ProductDetails;