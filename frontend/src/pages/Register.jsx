import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // We will connect this to FastAPI later.
    console.log("Register data:", formData);

    navigate("/login");
  };

  return (
    <div className="pro-auth-page">

      <div className="pro-auth-brand">
        <Link to="/" className="pro-logo">
          Digital<span>Mart</span>
        </Link>
      </div>

      <div className="pro-auth-container">

        {/* LEFT SIDE */}

        <div className="pro-auth-info">

          <span>JOIN THE MARKETPLACE</span>

          <h1>
            Create your
            <br />
            digital account.
          </h1>

          <p>
            Join a marketplace where you can discover,
            purchase and manage high-quality digital
            products.
          </p>

          <div className="pro-auth-benefits">

            <div>
              <strong>01</strong>
              <span>Discover digital products</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Purchase securely</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Access your purchases anytime</span>
            </div>

          </div>

        </div>

        {/* REGISTER FORM */}

        <div className="pro-auth-card">

          <div className="pro-auth-card-header">

            <h2>Create account</h2>

            <p>
              Enter your details to get started.
            </p>

          </div>

          <form onSubmit={handleSubmit}>

            <div className="pro-form-group">

              <label>Full name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />

            </div>

            <div className="pro-form-group">

              <label>Email address</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />

            </div>

            <div className="pro-form-group">

              <label>Password</label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
              />

            </div>

            <div className="pro-form-group">

              <label>Confirm password</label>

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
              />

            </div>

            <label className="pro-checkbox">

              <input type="checkbox" required />

              <span>
                I agree to the terms and conditions
              </span>

            </label>

            <button
              type="submit"
              className="pro-auth-submit"
            >
              Create account
            </button>

          </form>

          <div className="pro-auth-divider">
            <span>OR</span>
          </div>

          <p className="pro-auth-register">

            Already have an account?

            <Link to="/login">
              Sign in
            </Link>

          </p>

        </div>

      </div>

      <p className="pro-auth-footer">
        © 2026 DigitalMart. Secure digital marketplace.
      </p>

    </div>
  );
}

export default Register;