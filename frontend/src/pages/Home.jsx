import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

function Home() {

  const products = [
    {
      id: 1,
      title: "Digital Marketing Guide",
      category: "E-Book",
      price: 299,
      rating: 4.8,
      reviews: 124,
      icon: "📘",
      description:
        "Learn practical digital marketing strategies.",
    },
    {
      id: 2,
      title: "Modern Resume Bundle",
      category: "Template",
      price: 149,
      rating: 4.9,
      reviews: 86,
      icon: "📄",
      description:
        "Professional templates for your next career move.",
    },
    {
      id: 3,
      title: "Complete Web Development",
      category: "Course",
      price: 499,
      rating: 4.7,
      reviews: 210,
      icon: "💻",
      description:
        "Build modern websites from beginner to advanced.",
    },
    {
      id: 4,
      title: "Creative Design Pack",
      category: "Graphics",
      price: 249,
      rating: 4.8,
      reviews: 73,
      icon: "🎨",
      description:
        "High-quality resources for creative projects.",
    },
  ];

  return (
    <div className="pro-home">

      <Navbar />

      {/* HERO */}

      <section className="pro-hero">

        <div className="pro-hero-container">

          <div className="pro-hero-content">

            <div className="pro-eyebrow">
              THE DIGITAL MARKETPLACE
            </div>

            <h1>
              Everything digital,
              <br />
              <span>all in one place.</span>
            </h1>

            <p>
              Discover e-books, templates, courses,
              graphics and other premium digital products
              created by talented sellers.
            </p>

            <div className="pro-search">

              <span>⌕</span>

              <input
                type="text"
                placeholder="Search for digital products..."
              />

              <button>
                Search
              </button>

            </div>

            <div className="pro-trust">

              <div>
                <strong>1,000+</strong>
                <span>Products</span>
              </div>

              <div>
                <strong>500+</strong>
                <span>Creators</span>
              </div>

              <div>
                <strong>2,000+</strong>
                <span>Customers</span>
              </div>

            </div>

          </div>

          <div className="pro-hero-visual">

            <div className="hero-main-card">

              <div className="hero-card-label">
                FEATURED COLLECTION
              </div>

              <div className="hero-big-icon">
                ✦
              </div>

              <h3>
                Premium Digital Resources
              </h3>

              <p>
                Curated resources to help you
                learn, create and grow.
              </p>

              <div className="hero-card-price">
                <span>Starting from</span>
                <strong>₹149</strong>
              </div>

            </div>

            <div className="hero-floating-card">
              ★ 4.9
              <span>Top Rated</span>
            </div>

          </div>

        </div>

      </section>

      {/* CATEGORIES */}

      <section
        className="pro-section"
        id="categories"
      >

        <div className="pro-container">

          <div className="pro-section-header">

            <div>
              <span>EXPLORE</span>

              <h2>
                Browse by category
              </h2>
            </div>

            <a href="#products">
              View all →
            </a>

          </div>

          <div className="pro-category-grid">

            <div className="pro-category-card">
              <div>📚</div>
              <h3>E-Books</h3>
              <p>Books, guides & resources</p>
            </div>

            <div className="pro-category-card">
              <div>▣</div>
              <h3>Templates</h3>
              <p>Ready-to-use templates</p>
            </div>

            <div className="pro-category-card">
              <div>▶</div>
              <h3>Courses</h3>
              <p>Learn valuable skills</p>
            </div>

            <div className="pro-category-card">
              <div>✦</div>
              <h3>Graphics</h3>
              <p>Creative digital assets</p>
            </div>

          </div>

        </div>

      </section>

      {/* PRODUCTS */}

      <section
        className="pro-products-section"
        id="products"
      >

        <div className="pro-container">

          <div className="pro-section-header">

            <div>
              <span>HANDPICKED FOR YOU</span>

              <h2>
                Featured products
              </h2>
            </div>

            <button>
              Explore all →
            </button>

          </div>

          <div className="pro-product-grid">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        </div>

      </section>

      {/* SELLER CTA */}

      <section
        className="pro-seller-section"
        id="sellers"
      >

        <div className="pro-seller-container">

          <div>
            <span>
              FOR CREATORS
            </span>

            <h2>
              Have something digital
              to sell?
            </h2>

            <p>
              Turn your knowledge and creativity
              into income by selling your digital
              products on DigitalMart.
            </p>

            <a
              href="/register"
              className="pro-seller-button"
            >
              Become a Seller →
            </a>
          </div>

          <div className="pro-seller-stat">
            <strong>500+</strong>
            <span>
              creators already building
              their digital business
            </span>
          </div>

        </div>

      </section>

      {/* WHY US */}

      <section className="pro-section">

        <div className="pro-container">

          <div className="pro-centered-heading">

            <span>WHY DIGITALMART</span>

            <h2>
              Built for digital commerce
            </h2>

            <p>
              A simple and secure way to discover,
              purchase and sell digital products.
            </p>

          </div>

          <div className="pro-benefits">

            <div>
              <div>01</div>
              <h3>Secure purchases</h3>
              <p>
                Your account and purchase
                information are protected.
              </p>
            </div>

            <div>
              <div>02</div>
              <h3>Instant access</h3>
              <p>
                Access your purchased digital
                products whenever you need them.
              </p>
            </div>

            <div>
              <div>03</div>
              <h3>Trusted creators</h3>
              <p>
                Discover useful products from
                independent digital sellers.
              </p>
            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Home;