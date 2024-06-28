import React from "react";
import Red from "../assets/redrec.svg";
import FeCardList from "./FeCardList";
import { Link } from "react-router-dom";

const Frontend = ({ hideButton, numCards, marginTop }) => {
  return (
    <>
      <div
        className={`flex justify-between mx-10 md:mx-20 lg:mx-40 ${
          marginTop ? marginTop : "mt-20"
        } items-center`}
      >
        <div className="flex items-center mt-10">
          <img src={Red} alt="Redrec" className="h-2 w-2 mx-2" />
          <h1 className="font-roboto-mono font-medium text-lg lg:text-xl">
            Frontend Development
          </h1>
        </div>
        {!hideButton && (
          <div className="mt-10">
            <Link
              to="/work"
              class="px-4 py-2 text-[#1e1e1e] font-roboto font-medium text-sm hover:underline"
            >
              See All
            </Link>
          </div>
        )}
      </div>
      <div className="flex mx-20 lg:mx-40 md:mx-20 items-center justify-between mt-10 gap-20">
        <FeCardList numCards={numCards} />
      </div>
    </>
  );
};

export default Frontend;
