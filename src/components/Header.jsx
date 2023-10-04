import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-white text-3xl font-extrabold">
          <NavLink
            to="/Portfolio"
            className="hover:text-blue-300 transition duration-300"
          >
            My Projects
          </NavLink>
        </div>
        <ul className="flex space-x-6 mt-4 sm:mt-0">
          <li>
            <NavLink
              to="/Portfolio/Syncee"
              activeClassName="text-blue-300"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Syncee Teszt
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Portfolio/Animal"
              activeClassName="text-blue-300"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Animal Shelter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Portfolio/ImageUpload"
              activeClassName="text-blue-300"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Image Upload
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Portfolio/FoodOrder"
              activeClassName="text-blue-300"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Restaurant
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
