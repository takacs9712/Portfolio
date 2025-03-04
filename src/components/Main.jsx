import React from "react";
import background from "../assets/background.webp";
import { TypeAnimation } from "react-type-animation";
import me from "../assets/viktor-image.webp";
import {
  GitHubButton,
  LinkedInButton,
  EmailButton,
} from "./buttons/SocialButtons.jsx";

const Main = () => {
  return (
    <div id="main" className="relative w-full h-screen">
      <img
        className="w-full h-screen object-cover object-center"
        src={background}
        alt="Background image"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center">
        <div className="max-w-[700px] w-full px-4 text-center lg:text-left">
          <img
            src={me}
            alt="me"
            className="mx-auto lg:mx-0 w-48 h-48 rounded-full mb-6 shadow-lg"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            I'm Viktor Takács
          </h1>
          <h2 className="text-2xl sm:text-3xl text-white mt-4">
            <TypeAnimation
              sequence={["I am a Software Developer", 2000]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              className="inline-block"
            />
          </h2>
          <div className="flex gap-4 justify-center lg:justify-start mt-8">
            <GitHubButton />
            <LinkedInButton />
            <EmailButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
