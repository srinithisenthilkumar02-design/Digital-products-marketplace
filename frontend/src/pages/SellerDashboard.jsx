import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function SellerDashboard() {
  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSellerData = async () => {
      try {
        // Get products
        const productsResponse = await fetch(
          "http://127.0.0.1:8000/api/products/"
        );

        if (!productsResponse.ok) {
          throw new Error("Failed to fetch products");
        }

        const productsData = await productsResponse.json();

        // Seller ID = 3
        const sellerProducts = productsData.filter(
          (product) => product.seller_id === 3
        );

        setProducts(sellerProducts);

        // Get orders
        const ordersResponse = await fetch(
          "http://127.0.0.1:8000/api/orders/"
        );

        if (!ordersResponse.ok) {
          throw new Error("Failed to fetch orders");
        }

        const ordersData = await ordersResponse.json();

        // Find orders for seller's products
        const sellerSales = ordersData
          .map((order) => {
            const product = sellerProducts.find(
              (item) => item.id === order.product_id
            );

            if (!product) {
              return null;
            }

            return {
              orderId: order.id,
              buyerId: order.buyer_id,
              product: product,
              amount: order.total_amount,
            };
          })
          .filter(Boolean);

        setSales(sellerSales);
      } catch (error) {
        console.error(
          "Seller dashboard error:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSellerData();
  }, []);

  const totalEarnings = sales.reduce(
    (sum, sale) => sum + Number(sale.amount),
    0
  );

  return (
    <div>
      <Navbar />

      <div className="container py-5">

        {/* Page Heading */}

        <h1 className="fw-bold mb-2">
          Seller Dashboard
        </h1>

        <p className="text-muted mb-4">
          Manage your digital products and sales.
        </p>

        {/* Dashboard Cards */}

        <div className="row g-4">

          {/* My Products */}

          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">

                <h4 className="fw-bold">
                  📦 My Products
                </h4>

                <p className="text-muted">
                  View and manage your digital products.
                </p>

                <h5 className="text-primary">
                  {loading
                    ? "Loading..."
                    : `${products.length} Product${
                        products.length !== 1
                          ? "s"
                          : ""
                      }`}
                </h5>

                <Link
                  to="/products"
                  className="btn btn-primary"
                >
                  View Products
                </Link>

              </div>
            </div>
          </div>

          {/* Add Product */}

          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">

                <h4 className="fw-bold">
                  ➕ Add Product
                </h4>

                <p className="text-muted">
                  Upload a new digital product
                  to the marketplace.
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

          {/* Sales */}

          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">

                <h4 className="fw-bold">
                  💰 Sales
                </h4>

                <p className="text-muted">
                  View your product sales and earnings.
                </p>

                {loading ? (
                  <h5>
                    Loading...
                  </h5>
                ) : (
                  <>
                    <h5 className="text-success">
                      {sales.length} Sale
                      {sales.length !== 1 ? "s" : ""}
                    </h5>

                    <p className="mb-3">
                      Earnings:{" "}
                      <strong>
                        ₹{totalEarnings}
                      </strong>
                    </p>
                  </>
                )}

                <button
                  className="btn btn-outline-primary"
                  onClick={() => {
                    document
                      .getElementById("sales-section")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                >
                  View Sales
                </button>

              </div>
            </div>
          </div>

        </div>

        {/* My Products */}

        <div className="card shadow-sm mt-4">

          <div className="card-body">

            <h4 className="fw-bold mb-3">
              My Products
            </h4>

            {loading ? (
              <p>
                Loading products...
              </p>
            ) : products.length === 0 ? (
              <p className="text-muted">
                No products found.
              </p>
            ) : (
              products.map((product) => (
                <div
                  key={product.id}
                  className="border rounded p-3 mb-3"
                >

                  <div className="d-flex justify-content-between align-items-center">

                    <div>

                      <h5 className="fw-bold mb-1">
                        {product.title}
                      </h5>

                      <p className="text-muted mb-1">
                        {product.description}
                      </p>

                      <strong className="text-primary">
                        ₹{product.price}
                      </strong>

                    </div>

                    <span className="badge bg-success">
                      Active
                    </span>

                  </div>

                </div>
              ))
            )}

          </div>
        </div>

        {/* Sales Section */}

        <div
          id="sales-section"
          className="card shadow-sm mt-4"
        >

          <div className="card-body">

            <h4 className="fw-bold mb-3">
              💰 Sales Details
            </h4>

            {loading ? (
              <p>
                Loading sales...
              </p>
            ) : sales.length === 0 ? (
              <div>
                <h5>
                  No sales yet
                </h5>

                <p className="text-muted mb-0">
                  When customers purchase your
                  products, the sales will appear here.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-4">
                  <h5 className="text-success">
                    Total Earnings: ₹{totalEarnings}
                  </h5>

                  <p className="text-muted">
                    Total Sales: {sales.length}
                  </p>
                </div>

                {sales.map((sale) => (
                  <div
                    key={sale.orderId}
                    className="border rounded p-3 mb-3"
                  >

                    <div className="d-flex justify-content-between align-items-center">

                      <div>

                        <h5 className="fw-bold mb-1">
                          {sale.product.title}
                        </h5>

                        <p className="text-muted mb-1">
                          Order ID: #{sale.orderId}
                        </p>

                        <p className="text-muted mb-0">
                          Buyer ID: {sale.buyerId}
                        </p>

                      </div>

                      <div className="text-end">

                        <strong className="text-success">
                          ₹{sale.amount}
                        </strong>

                        <br />

                        <span className="badge bg-success mt-2">
                          Completed
                        </span>

                      </div>

                    </div>

                  </div>
                ))}
              </>
            )}

          </div>
        </div>

        {/* Seller Information */}

        <div className="card shadow-sm mt-4">

          <div className="card-body">

            <h4 className="fw-bold">
              Seller Information
            </h4>

            <p className="mb-1">
              <strong>Name:</strong> Test Seller
            </p>

            <p className="mb-0">
              <strong>Email:</strong> seller@gmail.com
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default SellerDashboard;