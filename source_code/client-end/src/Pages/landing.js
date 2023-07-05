import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import NavBar from "../Components/navbar";
import satwik from "../assets/satwik.jpeg";

const Landing = () => {
  return (
    <>
      <NavBar />
      <Row>
        <h1 className="text-center m-5 text-success2">
          Please Select an assignment from the drop down!
        </h1>
      </Row>
    </>
  );
};

export default Landing;
