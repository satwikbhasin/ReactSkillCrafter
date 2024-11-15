import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Layout from "../components/layout";
import satwik from "../assets/satwik.jpeg";
import backendAddition from "../services/assignment1API";
import "../styling/assignment1.css";
import "../styling/assignment1.css";

const Assignment1 = () => {
  const [first, setFirst] = useState(null); // first number to be added
  const [second, setSecond] = useState(null); // second number to be added
  const [clientendResult, setClientendResult] = useState(null); // sum calculated on client end (REACT)
  const [backendResult, setBackendResult] = useState(null); // sum calculated on backend (EXPRESS)
  const [backendResponseLoading, setBackendResponseLoading] = useState(false); // loading state for backend response

  const backEndAddition = async () => {
    setBackendResponseLoading(true);
    await backendAddition(first, second)
      .then((response) => {
        setBackendResult(Number(response.data.sum));
        setBackendResponseLoading(false);
      })
      .catch((error) => {
        setBackendResult("Error connecting to backend");
        setBackendResponseLoading(false);
      });
  };

  function frontEndAddition() {
    setClientendResult(Number(first) + Number(second));
  }

  function addButtonHandler(e) {
    e.preventDefault();
    backEndAddition();
    frontEndAddition();
  }

  return (
    <Layout>
      <Row className="mb-5 justify-content-center">
        <Col sm={12} md={4} className="text-center">
          <img src={satwik} width="100%" style={{ maxWidth: "300px", marginBottom: "4vh" }} alt="Satwik Bhasin" />
        </Col>
        <Col sm={12} md={8}>
          <h3 className="fw-bold">Satwik Bhasin</h3>
          <p className="fst-italic">
            Hello World! This is my submission for ICSI 518's 1st Lab
            Assignment. Following is dummy text entum, sem orci lacinia ligula,
            in faucibus lacus dui a risus. Aliquam posuere aliquam congue. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar
            est sit amet dui scelerisque, et dignissim turpis dictum. Donec
            ultrices ante sit amet massa accumsan blandit. Mauris scelerisque
            aliquam urna at posuere. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Proin ac vehicula
            justo. Nulla tempor urna non fringilla varius. In erat mi, tempus
            mattis pellentesque non, vulputate quis libero. Donec pretium
            hendrerit nulla at elementum. Aliquam sodales porta diam sit amet
            tempus. Donec dictum finibus tempor.
          </p>
        </Col>
      </Row>
      <hr />
      <Row className="justify-content-center">
        <h4 className="text-center mb-3 mt-5 fw-bold">
          Add 2 numbers using both front-end (React) and back-end (Express)
        </h4>
      </Row>
      <Row className="justify-content-center">
        <Col xs={8} md={4} className="border pt-3 pb-3">
          <Form onSubmit={addButtonHandler}>
            <h5 className="fw-bold mb-4">Enter Numbers</h5>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">1st Number:</Form.Label>
              <Form.Control
                type="number"
                onChange={(event) => setFirst(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">2nd Number:</Form.Label>
              <Form.Control
                type="number"
                onChange={(event) => setSecond(event.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Button variant="dark" type="submit" disabled={!first || !second}>
                Add
              </Button>
            </Form.Group>
          </Form>
        </Col>
        <Col xs={8} md={4} className="border pt-3 pb-3">
          <h5 className="fw-bold mb-4">Output</h5>
          <p>
            <strong>Front-End Result:</strong> {clientendResult}
          </p>
          <p>
            <strong>Back-End Result:</strong> {backendResponseLoading ? <span className="loader ms-1"></span> : backendResult}
          </p>
        </Col>
      </Row>
    </Layout>
  );
};

export default Assignment1;
