import React from "react";
import { Link } from "react-router-dom";
import Purplerec from "../assets/purplerec.svg";
import DesCardList from "./DesCardList";

const Designer = ({ hideButton, numCards }) => {
  return (
    <>
      <div className="flex justify-between mx-20 lg:mx-40 md:mx-20 mt-20 items-center">
        <div className="flex items-center">
          <img src={Purplerec} alt="Redrec" className="h-2 w-2 mx-2" />
          <h1 className="font-roboto-mono font-medium text-lg lg:text-xl">
            UI/UX Design
          </h1>
        </div>
        {!hideButton && (
          <div>
            <Link
              to="/work"
              className="px-4 py-2 text-[#1e1e1e] font-roboto font-medium text-sm hover:underline"
            >
              See All
            </Link>
          </div>
        )}
      </div>
      <div className="flex mx-20 lg:mx-40 md:mx-20 items-center justify-between mt-10 mb-20 gap-20">
        <DesCardList numCards={numCards} />
      </div>
    </>
  );
};

export default Designer;
