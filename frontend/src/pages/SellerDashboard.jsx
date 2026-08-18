import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function SellerDashboard() {
  return (
    <div>
      <Navbar />

      <div className="container py-5">
        <h1 className="fw-bold mb-2">
          Seller Dashboard
        </h1>

        <p className="text-muted mb-4">
          Manage your digital products and sales.
        </p>

        {/* Dashboard Cards */}
        <div className="row g-4">

          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h4 className="fw-bold">
                  📦 My Products
                </h4>

                <p className="text-muted">
                  View and manage your digital products.
                </p>

                <Link
                  to="/seller/products"
                  className="btn btn-primary"
                >
                  Manage Products
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h4 className="fw-bold">
                  ➕ Add Product
                </h4>

                <p className="text-muted">
                  Upload a new digital product to the marketplace.
                </p>

                <Link
                  to="/seller/add-product"
                  className="btn btn-primary"
                >
                  Add Product
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h4 className="fw-bold">
                  💰 Sales
                </h4>

                <p className="text-muted">
                  View your product sales and earnings.
                </p>

                <button className="btn btn-outline-primary">
                  View Sales
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Seller Information */}
        <div className="card shadow-sm mt-4">
          <div className="card-body">
            <h4 className="fw-bold">
              Seller Information
            </h4>

            <p className="mb-1">
              <strong>Name:</strong> Seller
            </p>

            <p className="mb-0">
              <strong>Email:</strong> seller@example.com
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SellerDashboard;