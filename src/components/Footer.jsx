import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-[#1e1e1e] text-white pt-8 mt-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-4 lg:mb-0">
              <p className="text-3xl font-medium font-roboto-mono text-[#EC493E]">
                <Link to="/">garima bang.</Link>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4 lg:mt-0">
              <Link
                to="/"
                className="text-white font-roboto-mono hover:text-[#F1CF30] hover:underline mb-2"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white font-roboto-mono hover:text-[#F1CF30] hover:underline mb-2"
              >
                About
              </Link>
              <Link
                to="/work"
                className="text-white font-roboto-mono hover:text-[#F1CF30] hover:underline mb-2"
              >
                Work
              </Link>
            </div>
            <div className="flex gap-4 mt-4 lg:mt-0">
              <a
                href="https://www.behance.net/garimabang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F1CF30]"
              >
                <i className="fa-brands fa-behance"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/garima-bang-4054b6194"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F1CF30]"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/garimabang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F1CF30]"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-8 pb-8 lg:pb-4">
            <h4 className="text-white font-roboto text-xs font-light">
              @2024 All rights reserved.
            </h4>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
