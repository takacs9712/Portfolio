import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 py-4">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <h1 className="text-white text-3xl font-semibold">My Projects</h1>
          <ul className="flex space-x-4 text-white">
            <li>
              <a href="/portfolio" className="hover:text-blue-200">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-200">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-200">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
