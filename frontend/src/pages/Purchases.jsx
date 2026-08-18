import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Purchases() {
  const purchases = [
    {
      id: 1,
      title: "Digital Marketing Guide",
      category: "E-Book",
      price: 299,
      date: "12 August 2026",
    },
    {
      id: 2,
      title: "Modern Resume Template",
      category: "Template",
      price: 149,
      date: "10 August 2026",
    },
  ];

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

        {purchases.map((purchase) => (
          <div
            className="card shadow-sm mb-3"
            key={purchase.id}
          >
            <div className="card-body">
              <div className="row align-items-center">

                <div className="col-md-2">
                  <div
                    className="bg-secondary text-white rounded d-flex align-items-center justify-content-center"
                    style={{ height: "90px" }}
                  >
                    Preview
                  </div>
                </div>

                <div className="col-md-5">
                  <h5 className="fw-bold">
                    {purchase.title}
                  </h5>

                  <span className="badge bg-primary">
                    {purchase.category}
                  </span>

                  <p className="text-muted mb-0 mt-2">
                    Purchased on: {purchase.date}
                  </p>
                </div>

                <div className="col-md-2">
                  <strong className="text-primary">
                    ₹{purchase.price}
                  </strong>
                </div>

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
        ))}

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