function Footer() {
  return (
    <footer className="pro-footer">

      <div className="pro-footer-container">

        <div className="pro-footer-brand">
          <h2>
            Digital<span>Mart</span>
          </h2>

          <p>
            Discover quality digital products from
            creators around the world.
          </p>
        </div>

        <div>
          <h4>Marketplace</h4>
          <a href="#products">Products</a>
          <a href="#categories">Categories</a>
          <a href="#sellers">Become a Seller</a>
        </div>

        <div>
          <h4>Account</h4>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
          <a href="/dashboard">Dashboard</a>
        </div>

        <div>
          <h4>Support</h4>
          <a href="#help">Help Center</a>
          <a href="#contact">Contact Us</a>
          <a href="#privacy">Privacy Policy</a>
        </div>

      </div>

      <div className="pro-footer-bottom">
        <p>
          © 2026 DigitalMart. All rights reserved.
        </p>

        <span>
          Built for digital creators and customers.
        </span>
      </div>

    </footer>
  );
}

export default Footer;