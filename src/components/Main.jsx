import React from "react";
import background from "../assets/background.webp";
import { TypeAnimation } from "react-type-animation";
import me from "../assets/viktor-image.webp";
import DownloadButton from "./buttons/DownloadButton.jsx";
import TakacsViktorCVeng from "../components/files/TakacsViktorCVeng.pdf";
import {
  GitHubButton,
  LinkedInButton,
  EmailButton,
} from "./buttons/SocialButtons.jsx";

const Main = () => {
  return (
    <>
      <div id="main">
        <img
          className="w-full h-screen object-cover object-right"
          src={background}
          alt="Background image"
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
            <div className="flex flex-col items-center justify-center sm:pt-4">
              <h2 className="text-2xl sm:text-3xl text-white text-center">
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
            </div>

            <div className="flex justify-between pt-6 max-w-[200px] w-full ">
              <GitHubButton />
              <LinkedInButton />
              <EmailButton />
            </div>
            <DownloadButton
              fileName="TakacsViktorCVeng.pdf"
              downloadUrl={TakacsViktorCVeng}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
