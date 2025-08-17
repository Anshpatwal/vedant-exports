
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/product.jsx";
import CertificatesPage from "./pages/certificates.jsx";
import ContactPage from "./pages/contactus.jsx";
import AboutUs from "./pages/about.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/product" element={<ProductsPage />} />
      <Route path="/certificates" element={<CertificatesPage />} />
      <Route path="/contactus" element={<ContactPage />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  </BrowserRouter>
);
