import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "@fontsource-variable/source-code-pro";
import Lottie from "lottie-react";
import animationData from "../assets/Animation1.json";

const Main = () => {
  return (
    <div id="main" className="relative">
      <div className="w-full h-screen object-cover bg-bckg" />
      <div className="max-w-[400px] md:max-w-[800px] xl:max-w-[1100px] max-h-[600px] m-auto h-full w-full bg-primary flex flex-col justify-center items-center absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 rounded-xl shadow-xl">
        <h1 className="text-2xl md:text-4xl xl:text-5xl text-white text-center">
          Hello, I'm
        </h1>
        <h2 className="flex text-lg md:text-xl xl:text-3xl text-white">
          <TypeAnimation
            sequence={[
              "Beka Tevdorashvili",
              1000,
              "React Front-end Developer.",
              1000,
            ]}
            wrapper="div"
            speed={50}
            style={{ fontSize: "1em", paddingLeft: "5px" }}
            repeat={Infinity}
          />
        </h2>
        <Lottie animationData={animationData} className="w-96" />
        <div className="flex flex-row justify-between pt-6 max-w-[500px] w-full">
          <p>
            <b>Mobile:</b> +995 591242873
          </p>
          <p>
            <b>Email:</b> bekatevd@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
