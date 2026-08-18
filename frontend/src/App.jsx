import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import Purchases from "./pages/Purchases";
import Downloads from "./pages/Downloads";
import SellerDashboard from "./pages/SellerDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route path="/cart" element={<Cart />} />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/purchases"
          element={<Purchases />}
        />

        <Route
          path="/downloads"
          element={<Downloads />}
        />

        <Route
          path="/seller/dashboard"
          element={<SellerDashboard />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;