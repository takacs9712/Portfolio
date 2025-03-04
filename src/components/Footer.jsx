import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 p-8">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">
          © {new Date().getFullYear()} Designed by Viktor Takács
        </p>
      </div>
      <div className="flex justify-center gap-6 mt-6">
        <a
          href="https://github.com/takacs9712"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 transition transform hover:text-blue-400 hover:scale-125"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/takacs-viktor-650937230/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 transition transform hover:text-blue-400 hover:scale-125"
        >
          <FaLinkedinIn size={30} />
        </a>
        <a
          href="mailto:takacsv90@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 transition transform hover:text-blue-400 hover:scale-125"
        >
          <MdEmail size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
