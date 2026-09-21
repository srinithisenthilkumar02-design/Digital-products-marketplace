import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Products from backend:", data);
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Product API error:", error);
        setLoading(false);
      });
  }, []);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());

      return matchesSearch;
    });

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, search, sort]);

  return (
    <div className="pro-products-page">
      <Navbar />

      <section className="pro-explore-header">
        <div className="pro-container">
          <span>DISCOVER DIGITAL PRODUCTS</span>

          <h1>Explore our marketplace</h1>

          <p>
            Find e-books, templates, courses and creative resources from
            independent creators.
          </p>
        </div>
      </section>

      <section className="pro-explore-section">
        <div className="pro-container">

          <div className="pro-filter-top">

            <div className="pro-explore-search">
              <span>⌕</span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
              />

              {search && (
                <button onClick={() => setSearch("")}>
                  ×
                </button>
              )}
            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>

          </div>

          <div className="pro-result-info">
            <div>
              <strong>{filteredProducts.length}</strong> products found
            </div>

            {search && (
              <span>
                Results for "{search}"
              </span>
            )}
          </div>

          {loading ? (
            <div className="pro-no-results">
              <h2>Loading products...</h2>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="pro-product-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="pro-no-results">
              <div>⌕</div>

              <h2>No products found</h2>

              <p>
                Try a different search term or clear the search.
              </p>

              <button onClick={() => setSearch("")}>
                Clear Search
              </button>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Products;