import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Purchases() {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        // Get all orders
        const ordersResponse = await fetch(
          "http://127.0.0.1:8000/api/orders/"
        );

        if (!ordersResponse.ok) {
          throw new Error("Failed to fetch orders");
        }

        const orders = await ordersResponse.json();

        // Get all products
        const productsResponse = await fetch(
          "http://127.0.0.1:8000/api/products/"
        );

        if (!productsResponse.ok) {
          throw new Error("Failed to fetch products");
        }

        const products = await productsResponse.json();

        // Show purchases of buyer ID 1
        const buyerOrders = orders.filter(
          (order) => order.buyer_id === 1
        );

        // Combine order information with product information
        const purchaseData = buyerOrders.map((order) => {
          const product = products.find(
            (item) => item.id === order.product_id
          );

          return {
            orderId: order.id,
            productId: order.product_id,
            title: product
              ? product.title
              : "Digital Product",
            description: product
              ? product.description
              : "Purchased digital product",
            price: order.total_amount,
          };
        });

        setPurchases(purchaseData);
      } catch (error) {
        console.error("Purchase loading error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPurchases();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container py-5">

        <h1 className="fw-bold mb-2">
          My Purchases
        </h1>

        <p className="text-muted mb-4">
          View your purchased digital products.
        </p>

        {loading ? (
          <div className="text-center py-5">
            <h4>Loading purchases...</h4>
          </div>
        ) : purchases.length === 0 ? (
          <div className="text-center py-5">
            <h3>No purchases yet</h3>

            <p className="text-muted">
              Purchase a digital product to see it here.
            </p>

            <Link
              to="/products"
              className="btn btn-primary"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          purchases.map((purchase) => (
            <div
              className="card shadow-sm mb-3"
              key={purchase.orderId}
            >
              <div className="card-body">

                <div className="row align-items-center">

                  {/* Product Preview */}

                  <div className="col-md-2">
                    <div
                      className="bg-secondary text-white rounded d-flex align-items-center justify-content-center"
                      style={{ height: "90px" }}
                    >
                      DIGITAL
                    </div>
                  </div>

                  {/* Product Information */}

                  <div className="col-md-5">

                    <h5 className="fw-bold">
                      {purchase.title}
                    </h5>

                    <span className="badge bg-primary">
                      Digital Product
                    </span>

                    <p className="text-muted mb-0 mt-2">
                      Order ID: #{purchase.orderId}
                    </p>

                  </div>

                  {/* Price */}

                  <div className="col-md-2">

                    <strong className="text-primary">
                      ₹{purchase.price}
                    </strong>

                  </div>

                  {/* Access */}

                  <div className="col-md-3">

                    <Link
                      to="/downloads"
                      className="btn btn-primary"
                    >
                      Access Product
                    </Link>

                  </div>

                </div>

              </div>
            </div>
          ))
        )}

        <Link
          to="/dashboard"
          className="btn btn-outline-secondary mt-3"
        >
          ← Back to Dashboard
        </Link>

      </div>
    </div>
  );
}

export default Purchases;