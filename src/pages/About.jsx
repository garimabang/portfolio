import React from "react";
import Red from "../assets/redrec.svg";
import Purplerec from "../assets/purplerec.svg";

const About = () => {
  return (
    <div className="max-w-7xl lg:mx-40 md:mx-20 mx-10 px-4 sm:px-6 lg:px-8 py-12 mt-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
        <div className="lg:w-[60%] mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-roboto-mono text-[#1e1e1e] font-bold mb-4 leading-snug">
            Hi,My name is Garima.
          </h1>
          <p className="text-sm md:text-lg lg:text-lg font-medium font-roboto-mono text-[#1e1e1e] my-4">
            Hi, I'm Garima Bang, a passionate UI/UX Designer and Front-end
            developer with expertise in Figma and ReactJs. I love creating
            beautiful and functional websites and applications. Being both
            designer and developer allows me to make sure no detail is lost in
            translation.
          </p>
          <p className="text-sm md:text-lg lg:text-lg font-medium font-roboto-mono text-[#1e1e1e] mb-8">
            I believe in continuous learning and staying updated with the latest
            trends in technology. When I'm not coding, you can find me exploring
            new cafes, reading books, or experimenting with new recipes in the
            kitchen.
          </p>
          <p className="text-sm md:text-lg lg:text-lg font-medium font-roboto-mono text-[#1e1e1e] mb-8">
            Thanks for stopping by my portfolio!
          </p>
        </div>
        <div className="lg:w-2/5 w-full">
          <div className="p-2">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <img src={Red} alt="Redrec" className="h-2 w-2 mx-2" />
                <h1 className="font-roboto-mono font-semibold text-xl md:text-2xl lg:text-3xl">
                  Skills
                </h1>
              </div>
              <div>
                <h1 className="font-roboto-mono text-lg md:text-lg lg:text-xl font-medium md:font-semibol lg:font-bold ml-6 my-4">
                  Frontend Development
                </h1>
                <ul className="mx-6 text-sm md:text-sm lg:text-lg font-medium list-disc list-inside space-y-2 text-[#1e1e1e]">
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>HTML & CSS</li>
                  <li>Tailwind CSS</li>
                </ul>
                <h1 className="font-roboto-mono text-lg md:text-lg lg:text-xl font-medium md:font-semibol lg:font-bold ml-6 my-4">
                  UI/UX Design
                </h1>
                <ul className="mx-6 text-sm md:text-sm lg:text-lg font-medium list-disc list-inside space-y-2 text-[#1e1e1e]">
                  <li>Figma</li>
                  <li>Wireframing</li>
                  <li>Prototyping</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <img src={Purplerec} alt="Redrec" className="h-2 w-2 mx-2" />
                <h1 className="font-roboto-mono font-semibold text-xl md:text-2xl lg:text-3xl">
                  Experience
                </h1>
              </div>
              <ul className="space-y-2 text-[#1e1e1e] font-roboto-mono ml-6 my-4">
                <li className="text-lg font-semibold">
                  <strong className="text-lg md:text-lg lg:text-xl">
                    Design Intern
                  </strong>{" "}
                  - Luru
                  <p className="text-[12px]">August 2023 - December 2023</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
