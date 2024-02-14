import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center flex justify-center">
        <p>© {new Date().getFullYear()} Takács Viktor. All rights reserved.</p>
      </div>
      <div className="flex justify-center gap-10 mt-6">
        <a
          href="https://github.com/takacs9712"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            className="cursor-pointer hover:scale-110 ease-in duration-140"
            size={20}
            style={{ color: "white" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/takacs-viktor-650937230/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn
            className="cursor-pointer hover:scale-110 ease-in duration-140"
            size={20}
            style={{ color: "white" }}
          />
        </a>
        <a
          href="mailto:takacsv90@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdEmail
            className="cursor-pointer hover:scale-110 ease-in duration-140"
            size={20}
            style={{ color: "white" }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
