import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { MdEmail } from "react-icons/md";

export const GitHubButton = () => {
  return (
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
  );
};
export const LinkedInButton = () => {
  return (
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
  );
};
export const EmailButton = () => {
  return (
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
  );
};
