import React from "react";
import Arrow from "../assets/arrow.svg";
import Blob1 from "../assets/blob1.svg";
import Blob2 from "../assets/blob2.svg";
import Blob3 from "../assets/blob3.svg";
import Blob4 from "../assets/blob4.svg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#F6F0DE] h-screen flex items-center justify-center">
      <img
        src={Blob1}
        alt="Blob1"
        className="absolute top-[-30%] left-0 opacity-90 w-[300px] md:w-[300px] lg:w-[400px] h-auto"
      />
      <img
        src={Blob2}
        alt="Blob2"
        className="absolute top-[-10%] right-0 opacity-90 w-[200px] md:w-[250px] lg:w-[300px] md:top-[-20%] h-auto"
      />
      <img
        src={Blob3}
        alt="Blob3"
        className="absolute bottom-[-14%] left-0 opacity-90 w-[200px] md:w-[275px] lg:w-[350px] h-auto"
      />
      <img
        src={Blob4}
        alt="Blob4"
        className="absolute bottom-[-14%] right-0 opacity-90 w-[250px] md:w-[250px] lg:w-[300px] h-auto"
      />

      <div className="relative max-w-3xl px-4 lg:px-0 mx-10 lg:mx-auto text-left leading-6 font-roboto-mono text-[#1e1e1e] space-y-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">
          Hello!!
        </h1>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold lg:leading-normal">
          I am Garima Bang.
          <br />I am a{" "}
          <span className="text-[#EC493E]">Frontend Developer</span>
          <br /> and a <span className="text-[#7B61FF]">UI/UX Designer</span>.
        </h1>
        <div className="flex items-center gap-2">
          <Link to="/about">
            <p className="text-lg font-medium hover:underline">More about me</p>
          </Link>
          <img src={Arrow} alt="Arrow" className="h-3 w-2" />
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          <a href="mailto:garimabang746@gmail.com">
            <button className="bg-[#1e1e1e] text-white border-2 border-[#1e1e1e] text-xl font-medium py-2 px-4 md:px-8 rounded hover:scale-105 transition-transform">
              HIRE ME
            </button>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-[#1e1e1e] border-2 border-[#1e1e1e] text-xl font-medium py-2 px-4 md:px-8 rounded hover:scale-105 transition-transform">
              RESUME
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
