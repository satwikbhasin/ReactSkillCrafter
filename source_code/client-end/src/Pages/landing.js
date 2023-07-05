import React from "react";
import { Row } from "react-bootstrap";
import NavBar from "../components/navbar";

const Landing = () => {
  return (
    <>
      <NavBar />
      <Row>
        <h1 className="text-center m-5 text-success">
          Please Select an assignment from the drop down!
        </h1>
      </Row>
    </>
  );
};

export default Landing;
