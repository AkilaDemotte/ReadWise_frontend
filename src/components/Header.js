import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-500 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
        ReadWise
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-200">
            About
          </Link>
          <Link to="/services" className="hover:text-gray-200">
            Services
          </Link>
          <Link to="/contact" className="hover:text-gray-200">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          id="menu-button"
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div id="menu-dropdown" className="hidden md:hidden bg-blue-400 px-4 py-2">
        <Link to="/" className="block py-1 hover:text-gray-200">
          Home
        </Link>
        <Link to="/about" className="block py-1 hover:text-gray-200">
          About
        </Link>
        <Link to="/services" className="block py-1 hover:text-gray-200">
          Services
        </Link>
        <Link to="/contact" className="block py-1 hover:text-gray-200">
          Contact
        </Link>
      </div>
    </header>
  );
}

export default Header;
