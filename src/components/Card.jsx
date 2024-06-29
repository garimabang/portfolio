import React from "react";

const Card = ({ title, description, image, url }) => {
  return (
    <div>
      <div className="flex flex-col justify-between max-w-xs mx-auto relative overflow-hidden rounded border border-2 border-[#1e1e1e] shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
        <img className="w-full h-56 object-cover" src={image} alt={title} />
        <div className="flex-grow flex flex-col p-4 bg-white">
          <h3 className="text-xl font-medium text-gray-800 mb-2 font-roboto-mono">
            {title}
          </h3>

          <p className="text-gray-700 mb-4 font-roboto">{description}</p>
        </div>

        <div className="absolute inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-lg font-bold text-center">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#1e1e1e] hover:bg-blue-500 text-white py-2 px-4 mt-4 rounded"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
