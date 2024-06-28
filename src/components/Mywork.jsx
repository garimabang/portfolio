import React from "react";
import Frontend from "./Frontend";
import Designer from "./Designer";

function Mywork() {
  return (
    <>
      <div className="mt-20 inline-block bg-[#F1CF30] border border-[#1e1e1e] border-2 mx-10 md:mx-20 lg:mx-40 p-1 font-roboto-mono font-medium text-2xl">
        My Work
      </div>
      <div>
        <Frontend numCards={3} marginTop="mt-0" />
        <Designer numCards={3} />
      </div>
    </>
  );
}

export default Mywork;
