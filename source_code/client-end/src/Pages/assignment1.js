import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import NavBar from "../components/navbar";
import satwik from "../assets/satwik.jpeg";

const Assignment1 = () => {
  const [first, firstInput] = useState(null); //first number to be added
  const [second, secondInput] = useState(null); //second number to be added
  const [clientendResult, setClientendResult] = useState(null); //sum calculated on client end(REACT)
  const [backendResult, setBackendResult] = useState(null); //sum calculated on back end(EXPRESS)

  function backEndAddition(e) {
    axios
      .get(`http://localhost:3001/add/${first}/and/${second}/`)
      .then((response) => {
        setBackendResult(Number(response.data.sum));
        console.log(response.sum);
      });
  }

  function frontEndAddition(e) {
    setClientendResult(Number(first) + Number(second));
  }

  function addButtonHandler(e) {
    e.preventDefault();
    backEndAddition();
    frontEndAddition();
  }
  return (
    <>
      <NavBar />
      <Row>
        <h1 className="text-center mt-4">Assignment-1</h1>
      </Row>
      <Row className="mb-5">
        <Col className="col-3 ms-5 mt-2">
          <img class="" src={satwik} width={300} height={300} rounded alt="" />
        </Col>

        <Col className="col-8 mt-5">
          <h3 className="fw-bold">Satwik Bhasin</h3>
          <p className="fst-italic">
            Hello World! This is my submission for ICSI 518's 1st Lab
            Assignment. Following is dummy text: entum, sem orci lacinia ligula,
            in faucibus lacus dui a risus. Aliquam posuere aliquam congue. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar
            est sit amet dui scelerisque, et dignissim turpis dictum. Donec
            ultrices ante sit amet massa accumsan blandit. Mauris scelerisque
            aliquam urna at posuere. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Proin ac vehicula
            justo. Nulla tempor urna non fringilla varius. In erat mi, tempus
            mattis pellentesque non, vulputate quis libero. Donec pretium
            hendrerit nulla at elementum. Aliquam sodales porta diam sit amet
            tempus. Donec dictum finibus tempor.{" "}
          </p>
        </Col>
      </Row>

      <Form>
        <Row className="mx-5 col-xs-4 col-xs-offset-5">
          <h4 className="rounded bg-dark bg-gradient text-light text-center p-2">
            Add 2 numbers:
          </h4>
        </Row>
        <Row className="mt-3">
          <Col>
            <h5 className="me-5 ms-5 rounded bg-dark bg-gradient text-light text-center p-1">
              Enter Numbers:
            </h5>
          </Col>
          <Col>
            <h5 className="me-5 rounded bg-success bg-gradient text-light text-center p-1">
              Output:
            </h5>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col>
            <Row>
              <Col>
                <Form.Group className="mx-5 mb-3">
                  <Form.Label>
                    <p1 className="fw-bold">1st Number:</p1>
                  </Form.Label>
                  <Form.Control
                    class="form-control form-control-sm"
                    onChange={(event) => {
                      firstInput(event.target.value);
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mx-5 mb-1">
                  <Form.Label>
                    <p1 className="fw-bold">2nd Number:</p1>
                  </Form.Label>
                  <Form.Control
                    class="form-control form-control-sm"
                    onChange={(event) => {
                      secondInput(event.target.value);
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mx-5 mt-2">
                  <Button
                    variant="dark"
                    type="submit"
                    onClick={addButtonHandler}
                    className="mb-3"
                  >
                    Add
                  </Button>
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <p1 className="fw-bold">
                Output from client-end: {clientendResult}
              </p1>
              <p1 className="fw-bold">Output from back-end: {backendResult}</p1>
            </Row>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Assignment1;
