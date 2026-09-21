import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/orders/"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await response.json();

        const buyerOrders = data.filter(
          (order) => order.buyer_id === 1
        );

        setOrders(buyerOrders);
      } catch (error) {
        console.error("Dashboard error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container py-5">

        <h1 className="fw-bold mb-2">
          My Dashboard
        </h1>

        <p className="text-muted mb-4">
          Manage your account and digital products.
        </p>

        <div className="row g-4">

          {/* Profile */}

          <div className="col-md-4">
            <div className="card shadow-sm h-100">

              <div className="card-body">

                <h4 className="fw-bold">
                  👤 Profile
                </h4>

                <p className="text-muted">
                  View and manage your account information.
                </p>

                <button className="btn btn-outline-primary">
                  View Profile
                </button>

              </div>
            </div>
          </div>

          {/* Purchases */}

          <div className="col-md-4">
            <div className="card shadow-sm h-100">

              <div className="card-body">

                <h4 className="fw-bold">
                  🛍️ My Purchases
                </h4>

                <p className="text-muted">
                  View the digital products you have purchased.
                </p>

                <h5 className="text-primary">
                  {loading
                    ? "Loading..."
                    : `${orders.length} Purchase${
                        orders.length !== 1 ? "s" : ""
                      }`}
                </h5>

                <Link
                  to="/purchases"
                  className="btn btn-outline-primary"
                >
                  View Purchases
                </Link>

              </div>
            </div>
          </div>

          {/* Downloads */}

          <div className="col-md-4">
            <div className="card shadow-sm h-100">

              <div className="card-body">

                <h4 className="fw-bold">
                  📥 My Downloads
                </h4>

                <p className="text-muted">
                  Access your purchased digital products.
                </p>

                <h5 className="text-primary">
                  {loading
                    ? "Loading..."
                    : `${orders.length} Available`}
                </h5>

                <Link
                  to="/downloads"
                  className="btn btn-outline-primary"
                >
                  View Downloads
                </Link>

              </div>
            </div>
          </div>

        </div>

        {/* Account Information */}

        <div className="card shadow-sm mt-4">

          <div className="card-body">

            <h4 className="fw-bold">
              Account Information
            </h4>

            <p className="mb-1">
              <strong>Name:</strong> Test User
            </p>

            <p className="mb-0">
              <strong>Email:</strong> testuser@gmail.com
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;