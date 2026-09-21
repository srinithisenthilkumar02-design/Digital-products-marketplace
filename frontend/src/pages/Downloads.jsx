import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Downloads() {
  const [downloads, setDownloads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDownloads = async () => {
      try {
        // Get orders
        const ordersResponse = await fetch(
          "http://127.0.0.1:8000/api/orders/"
        );

        if (!ordersResponse.ok) {
          throw new Error("Failed to fetch orders");
        }

        const orders = await ordersResponse.json();

        // Get products
        const productsResponse = await fetch(
          "http://127.0.0.1:8000/api/products/"
        );

        if (!productsResponse.ok) {
          throw new Error("Failed to fetch products");
        }

        const products = await productsResponse.json();

        // Get buyer's orders
        const buyerOrders = orders.filter(
          (order) => order.buyer_id === 1
        );

        // Combine orders with products
        const downloadData = buyerOrders.map((order) => {
          const product = products.find(
            (item) => item.id === order.product_id
          );

          return {
            id: order.id,
            title: product
              ? product.title
              : "Digital Product",
            category: "Digital Product",
            format: "ZIP",
            fileUrl: product
              ? product.file_url
              : "",
          };
        });

        setDownloads(downloadData);
      } catch (error) {
        console.error("Download loading error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDownloads();
  }, []);

  const handleDownload = (fileUrl) => {
    if (!fileUrl) {
      alert("Download file is not available yet.");
      return;
    }

    window.open(fileUrl, "_blank");
  };

  return (
    <div>
      <Navbar />

      <div className="container py-5">

        <h1 className="fw-bold mb-2">
          My Downloads
        </h1>

        <p className="text-muted mb-4">
          Access your purchased digital products.
        </p>

        {loading ? (
          <div className="text-center py-5">
            <h4>Loading downloads...</h4>
          </div>
        ) : downloads.length === 0 ? (
          <div className="text-center py-5">
            <h3>No downloads available</h3>

            <p className="text-muted">
              Purchase a digital product to access your downloads.
            </p>

            <Link
              to="/products"
              className="btn btn-primary"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          downloads.map((item) => (
            <div
              className="card shadow-sm mb-3"
              key={item.id}
            >
              <div className="card-body">

                <div className="row align-items-center">

                  {/* File Preview */}

                  <div className="col-md-2">
                    <div
                      className="bg-secondary text-white rounded d-flex align-items-center justify-content-center"
                      style={{ height: "80px" }}
                    >
                      FILE
                    </div>
                  </div>

                  {/* Product Information */}

                  <div className="col-md-5">

                    <h5 className="fw-bold">
                      {item.title}
                    </h5>

                    <span className="badge bg-primary me-2">
                      {item.category}
                    </span>

                    <span className="badge bg-secondary">
                      {item.format}
                    </span>

                  </div>

                  {/* Purchase Status */}

                  <div className="col-md-3">
                    <span className="text-success">
                      ✓ Purchased
                    </span>
                  </div>

                  {/* Download Button */}

                  <div className="col-md-2">

                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        handleDownload(item.fileUrl)
                      }
                    >
                      Download
                    </button>

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

export default Downloads;