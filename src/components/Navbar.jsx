import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#F6F0DE] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="bg-[#F6F0DE] flex justify-between items-center font-roboto-mono py-8 text-[#1e1e1e] relative">
        <h1 className="font-medium mx-20 text-2xl hover:font-bold transform hover:scale-125 transition duration-300">
          garima bang.
        </h1>
        <nav>
          <div className="lg:hidden ">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl focus:outline-none mr-10"
            >
              ☰
            </button>
          </div>
          <ul
            className={`${
              menuOpen ? "block" : "hidden"
            } lg:flex items-center gap-4 lg:gap-20 text-lg lg:text-xl font-normal mx-4 lg:mx-20 mr-10`}
          >
            <li className="hover:font-medium transform hover:scale-125 transition duration-300">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="hover:font-medium transform hover:scale-125 transition duration-300">
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li className="hover:font-medium transform hover:scale-125 transition duration-300">
              <Link to="/work" onClick={() => setMenuOpen(false)}>
                Work
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
