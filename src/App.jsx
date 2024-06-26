import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import "@fortawesome/fontawesome-free/css/all.min.css";
const App = () => {
  return (
    <div className="bg-[#F6F0DE]">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
