import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary frontend login
    // We will connect this to your FastAPI backend later.
    console.log("Login data:", formData);

    navigate("/");
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

          <span>WELCOME BACK</span>

          <h1>
            Continue your
            <br />
            digital journey.
          </h1>

          <p>
            Sign in to access your purchases,
            downloads and personalized marketplace
            experience.
          </p>

          <div className="pro-auth-benefits">

            <div>
              <strong>01</strong>
              <span>Access your digital products</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Manage your purchases</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Discover new products</span>
            </div>

          </div>

        </div>

        {/* LOGIN FORM */}

        <div className="pro-auth-card">

          <div className="pro-auth-card-header">

            <h2>Sign in</h2>

            <p>
              Enter your details to continue.
            </p>

          </div>

          <form onSubmit={handleSubmit}>

            <div className="pro-form-group">

              <label>
                Email address
              </label>

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

              <div className="pro-label-row">

                <label>
                  Password
                </label>

                <a href="#forgot">
                  Forgot password?
                </a>

              </div>

              <div className="pro-password-input">

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>

            <label className="pro-checkbox">

              <input type="checkbox" />

              <span>
                Remember me
              </span>

            </label>

            <button
              type="submit"
              className="pro-auth-submit"
            >
              Sign in
            </button>

          </form>

          <div className="pro-auth-divider">
            <span>OR</span>
          </div>

          <p className="pro-auth-register">

            Don't have an account?

            <Link to="/register">
              Create an account
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

export default Login;