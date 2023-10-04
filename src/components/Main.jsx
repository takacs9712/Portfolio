import React from "react";
import background from "../assets/background.jpeg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import me from "../assets/viktor-image.png";
import DownloadButton from "./buttons/DownloadButton.jsx";
import TakacsViktorCVeng from "../components/files/TakacsViktorCVeng.pdf";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src={background}
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-black/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <img
            src={me}
            alt="me"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              marginBottom: "20px",
            }}
          />
          <h1 className="sm:text-5xl text-4xl font-bold text-white">
            I'm Viktor Takács
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-white">
            I'm
            <TypeAnimation
              sequence={[
                "an ambitious Frontend Developer",
                1000,
                "also an Economist",
                1000,
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full ">
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
          <DownloadButton
            fileName="TakacsViktorCVeng.pdf"
            downloadUrl={TakacsViktorCVeng}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
