import React from "react";
import Designer from "../components/Designer";
import Frontend from "../components/Frontend";

function Work() {
  return (
    <div>
      <Frontend hideButton={true} numCards={3} marginTop="mt-20" />
      <Designer hideButton={true} numCards={6} />
    </div>
  );
}

export default Work;
