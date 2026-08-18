import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  const products = [
    {
      id: 1,
      title: "Digital Marketing Guide",
      category: "E-Books",
      price: 299,
      rating: 4.8,
      reviews: 124,
      icon: "📘",
      description: "Practical strategies to grow your digital presence.",
    },
    {
      id: 2,
      title: "Modern Resume Bundle",
      category: "Templates",
      price: 149,
      rating: 4.9,
      reviews: 86,
      icon: "📄",
      description: "Professional resume templates for job seekers.",
    },
    {
      id: 3,
      title: "Complete Web Development",
      category: "Courses",
      price: 499,
      rating: 4.7,
      reviews: 210,
      icon: "💻",
      description: "Learn modern web development step by step.",
    },
    {
      id: 4,
      title: "Creative Design Pack",
      category: "Graphics",
      price: 249,
      rating: 4.8,
      reviews: 73,
      icon: "🎨",
      description: "Premium resources for your creative projects.",
    },
    {
      id: 5,
      title: "Python Programming Handbook",
      category: "E-Books",
      price: 349,
      rating: 4.9,
      reviews: 156,
      icon: "🐍",
      description: "A beginner-friendly guide to Python programming.",
    },
    {
      id: 6,
      title: "Social Media Templates",
      category: "Templates",
      price: 199,
      rating: 4.6,
      reviews: 91,
      icon: "📱",
      description: "Ready-to-use designs for social media.",
    },
    {
      id: 7,
      title: "UI/UX Design Masterclass",
      category: "Courses",
      price: 699,
      rating: 4.8,
      reviews: 188,
      icon: "✏️",
      description: "Master the fundamentals of modern UI/UX design.",
    },
    {
      id: 8,
      title: "Presentation Graphics Pack",
      category: "Graphics",
      price: 299,
      rating: 4.7,
      reviews: 64,
      icon: "🖼️",
      description: "Professional graphics for presentations.",
    },
  ];

  const categories = [
    "All",
    "E-Books",
    "Templates",
    "Courses",
    "Graphics",
  ];

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch =
        product.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, category, sort]);

  return (
    <div className="pro-products-page">

      <Navbar />

      {/* PAGE HEADER */}

      <section className="pro-explore-header">

        <div className="pro-container">

          <span>DISCOVER DIGITAL PRODUCTS</span>

          <h1>
            Explore our marketplace
          </h1>

          <p>
            Find e-books, templates, courses and
            creative resources from independent creators.
          </p>

        </div>

      </section>

      {/* PRODUCTS AREA */}

      <section className="pro-explore-section">

        <div className="pro-container">

          {/* SEARCH + SORT */}

          <div className="pro-filter-top">

            <div className="pro-explore-search">

              <span>⌕</span>

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search products..."
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                >
                  ×
                </button>
              )}

            </div>

            <select
              value={sort}
              onChange={(e) =>
                setSort(e.target.value)
              }
            >
              <option value="featured">
                Featured
              </option>

              <option value="low">
                Price: Low to High
              </option>

              <option value="high">
                Price: High to Low
              </option>

              <option value="rating">
                Highest Rated
              </option>
            </select>

          </div>

          {/* CATEGORY FILTER */}

          <div className="pro-category-filter">

            {categories.map((item) => (
              <button
                key={item}
                className={
                  category === item
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setCategory(item)
                }
              >
                {item}
              </button>
            ))}

          </div>

          {/* RESULT COUNT */}

          <div className="pro-result-info">

            <div>
              <strong>
                {filteredProducts.length}
              </strong>{" "}
              products found
            </div>

            {search && (
              <span>
                Results for "{search}"
              </span>
            )}

          </div>

          {/* PRODUCT GRID */}

          {filteredProducts.length > 0 ? (

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

              <h2>
                No products found
              </h2>

              <p>
                Try a different search term or
                choose another category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
              >
                Clear Filters
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