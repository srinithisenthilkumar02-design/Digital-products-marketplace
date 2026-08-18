import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Downloads() {
  const downloads = [
    {
      id: 1,
      title: "Digital Marketing Guide",
      category: "E-Book",
      format: "PDF",
    },
    {
      id: 2,
      title: "Modern Resume Template",
      category: "Template",
      format: "ZIP",
    },
  ];

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

        {downloads.map((item) => (
          <div
            className="card shadow-sm mb-3"
            key={item.id}
          >
            <div className="card-body">
              <div className="row align-items-center">

                <div className="col-md-2">
                  <div
                    className="bg-secondary text-white rounded d-flex align-items-center justify-content-center"
                    style={{ height: "80px" }}
                  >
                    File
                  </div>
                </div>

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

                <div className="col-md-3">
                  <span className="text-success">
                    ✓ Purchased
                  </span>
                </div>

                <div className="col-md-2">
                  <button className="btn btn-primary">
                    Download
                  </button>
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

export default Downloads;