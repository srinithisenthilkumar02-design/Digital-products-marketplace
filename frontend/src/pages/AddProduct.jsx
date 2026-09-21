import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function AddProduct() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/products/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            description: description,
            price: Number(price),
            file_url: fileUrl,
            seller_id: 3,
            category_id: 3,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      alert("Product added successfully!");

      navigate("/seller/dashboard");
    } catch (error) {
      console.error("Add product error:", error);
      alert("Failed to add product. Please check the backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="container py-5">

        <div className="mb-4">
          <Link
            to="/seller/dashboard"
            className="text-decoration-none"
          >
            ← Back to Seller Dashboard
          </Link>
        </div>

        <h1 className="fw-bold mb-2">
          Add New Product
        </h1>

        <p className="text-muted mb-4">
          Add a new digital product to your marketplace.
        </p>

        <div className="card shadow-sm">
          <div className="card-body p-4">

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label fw-bold">
                  Product Title
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter product title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">
                  Description
                </label>

                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Enter product description"
                  value={description}
                  onChange={(e) =>
                    setDescription(e.target.value)
                  }
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">
                  Price
                </label>

                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter price"
                  min="1"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label fw-bold">
                  Product File URL
                </label>

                <input
                  type="url"
                  className="form-control"
                  placeholder="https://example.com/product.zip"
                  value={fileUrl}
                  onChange={(e) =>
                    setFileUrl(e.target.value)
                  }
                  required
                />

                <small className="text-muted">
                  Enter the download URL of your digital product.
                </small>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading
                  ? "Adding Product..."
                  : "Add Product"}
              </button>

            </form>

          </div>
        </div>

      </div>
    </div>
  );
}

export default AddProduct;