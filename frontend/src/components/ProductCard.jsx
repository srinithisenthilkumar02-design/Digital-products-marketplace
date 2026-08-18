import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="pro-product-card">

      <div className="pro-product-image">
        <span>{product.category}</span>

        <div className="pro-product-icon">
          {product.icon}
        </div>

        <button className="pro-wishlist">
          ♡
        </button>
      </div>

      <div className="pro-product-content">

        <div className="pro-product-rating">
          ★ {product.rating}
          <span>({product.reviews})</span>
        </div>

        <h3>{product.title}</h3>

        <p>{product.description}</p>

        <div className="pro-product-footer">

          <div>
            <small>Starting from</small>
            <strong>₹{product.price}</strong>
          </div>

          <Link
            to={`/product/${product.id}`}
            className="pro-view-button"
          >
            View
          </Link>

        </div>

      </div>
    </div>
  );
}

export default ProductCard;