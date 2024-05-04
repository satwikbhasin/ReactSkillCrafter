import React from "react";
import NavBar from "../components/navbar";

const Landing = () => {
  return (
    <>
      <NavBar />
      <div>
        <h1 className="text-center mt-5 text-success">
          Please Select an assignment from the navbar drop down!
        </h1>
      </div>
    </>
  );
};

export default Landing;
