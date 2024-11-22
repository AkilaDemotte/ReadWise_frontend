import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding Section */}
        <div>
          <h1 className="text-2xl font-bold">ReadWise</h1>
          <p className="text-gray-400 mt-2">
            Empowering solutions for a better future. Stay connected and grow
            with us.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
          <div className="flex align- space-x-4 justify-center">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.11 8.44 9.88v-6.99h-2.54v-2.89h2.54v-2.21c0-2.5 1.48-3.89 3.74-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.24 0-1.63.77-1.63 1.55v1.89h2.79l-.45 2.89h-2.34v6.99C18.34 21.11 22 16.99 22 12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.832 9.832 0 0 1-2.828.775 4.93 4.93 0 0 0 2.165-2.725 9.856 9.856 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.379 4.482C7.691 8.095 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.708.869 3.215 2.188 4.099a4.904 4.904 0 0 1-2.228-.616c-.054 2.281 1.581 4.415 3.946 4.894a4.935 4.935 0 0 1-2.224.084c.626 1.956 2.444 3.378 4.604 3.418A9.874 9.874 0 0 1 0 19.54a13.913 13.913 0 0 0 7.548 2.209c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0 0 24 4.557z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.97 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM7.09 20.45H3.55V9h3.54v11.45zM5.32 7.57c-1.14 0-2.06-.93-2.06-2.08s.92-2.08 2.06-2.08 2.06.93 2.06 2.08-.92 2.08-2.06 2.08zm15.13 12.88h-3.54v-5.81c0-1.39-.03-3.17-1.94-3.17-1.95 0-2.25 1.52-2.25 3.09v5.89H9.17V9h3.4v1.56h.05c.47-.89 1.63-1.83 3.35-1.83 3.58 0 4.24 2.35 4.24 5.41v6.31z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        © 2024 ReadWise. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
