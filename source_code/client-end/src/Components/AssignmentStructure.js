import logo from "../sb-logo.jpg";
import satwik from "../satwik.jpeg";
import "../App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

import { useState, useEffect, Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Image from "react-bootstrap/Image";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
import InventoryManagement from "./InventoryManagement";
import UpdatedInventoryManagement from "./UpdatedInventoryManagement";
import UserModule from "./UserModule";

function AssignmentStructure() {
  const [first, firstInput] = useState(null); //first number to be added
  const [second, secondInput] = useState(null); //second number to be added
  const [clientendResult, setClientendResult] = useState(null); //sum calculated on client end(REACT)
  const [backendResult, setBackendResult] = useState(null); //sum calculated on back end(EXPRESS)

  function backEndAddition(e) {
    axios
      .get(`http://ec2-3-144-142-14.us-east-2.compute.amazonaws.com:3001/add/${first}/and/${second}/`)
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

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Image
          src={logo}
          width={50}
          height={50}
          rounded
          fluid
          className="m-1"
          alt=""
        />
        <Navbar.Brand>
          <text>Satwik Bhasin - 518 Lab - Assignments </text>
        </Navbar.Brand>
      </Navbar>

      <Tabs defaultActiveKey="assignment1" className="m-3" fill>
        <Tab eventKey="assignment1" title="Assignment 1">
          <Row className="mb-5">
            <Col className="col-3 ms-5 mt-5">
              <Image
                class=""
                src={satwik}
                width={300}
                height={300}
                rounded
                alt=""
              />
            </Col>

            <Col className="col-8 mt-5">
              <h3 className="fw-bold">Satwik Bhasin</h3>
              <p className="fst-italic">
                {" "}
                Hello World! This is my submission for ICSI 518's 1st Lab
                Assignment. Following is dummy text: entum, sem orci lacinia
                ligula, in faucibus lacus dui a risus. Aliquam posuere aliquam
                congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin pulvinar est sit amet dui scelerisque, et dignissim turpis
                dictum. Donec ultrices ante sit amet massa accumsan blandit.
                Mauris scelerisque aliquam urna at posuere. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Proin ac vehicula justo. Nulla tempor urna non fringilla
                varius. In erat mi, tempus mattis pellentesque non, vulputate
                quis libero. Donec pretium hendrerit nulla at elementum. Aliquam
                sodales porta diam sit amet tempus. Donec dictum finibus tempor.{" "}
              </p>
            </Col>
          </Row>

          <Form>
            <Row className="mx-5 col-xs-4 col-xs-offset-5">
              <h4 className="rounded bg-dark bg-gradient text-light text-center">
                {" "}
                Add 2 numbers:
              </h4>
            </Row>
            <Row className="mt-3">
              <Col>
                <h5 className="me-5 ms-5 rounded bg-dark bg-gradient text-light text-center">
                  Enter Numbers:
                </h5>
              </Col>
              <Col>
                <h5 className="me-5 rounded bg-success bg-gradient text-light text-center">
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
                  <p1 className="fw-bold">
                    Output from back-end: {backendResult}
                  </p1>
                </Row>
              </Col>
            </Row>
          </Form>
        </Tab>
        <Tab eventKey="assignment2" title="Assignment 2">
          <Tabs defaultActiveKey="assignment2-api" className="m-3" fill>
            <Tab eventKey="assignment2-api" title="Assignment 2 - API">
              <div className="m-3">
                <Table>
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>
                          <Image src={product.image} width={100} height={100} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Tab>
            <Tab
              eventKey="assignment2-inventory-management"
              title="Assignment 2 - Inventory Management"
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Row>
                  <InventoryManagement />
                </Row>
              </div>
            </Tab>
          </Tabs>
        </Tab>
        <Tab eventKey="assignment3" title="Assignment 3">
          <Tabs
            defaultActiveKey="assignment3-updated-inventory-management"
            className="m-3"
            fill
          >
            <Tab
              eventKey="assignment3-updated-inventory-management"
              title="Assignment 3 - Updated Inventory Management"
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Row>
                  <UpdatedInventoryManagement />
                </Row>
              </div>
            </Tab>
            <Tab
              eventKey="assignment3-user-module"
              title="Assignment 3 - User Module"
            >
              <UserModule />
            </Tab>
          </Tabs>
        </Tab>
      </Tabs>
    </div>
  );
}

export default AssignmentStructure;
