import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="pro-navbar">

      <div className="pro-navbar-container">

        <Link to="/" className="pro-logo">
          Digital<span>Mart</span>
        </Link>

        <nav className="pro-nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/products">
            Explore
          </Link>

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/seller/dashboard">
            Sell
          </Link>

        </nav>

        <div className="pro-nav-actions">

          <Link
            to="/cart"
            className="pro-cart"
          >
            🛒
            <span>Cart</span>
          </Link>

          <Link
            to="/login"
            className="pro-login"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="pro-signup"
          >
            Get Started
          </Link>

        </div>

      </div>

    </header>
  );
}

export default Navbar;