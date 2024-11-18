import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import ThirdPartyAPI from "../components/assignment2/thirdPartyAPI";
import InventoryManagement from "../components/assignment2/inventoryManagement_assignment2";
import Layout from "../components/layout";

const Assignment2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const assignmentTab = new URLSearchParams(location.search).get("assignmentTab");

  return (
    <Layout>
      <div className="text-left border p-5">
        <h1 className="display-4">Assignment 2</h1>
        <p className="lead">
          <strong>The first part</strong> is to integrate a third-party API into your application and display the data in a user-friendly manner.
          <br />
          <strong>The second part</strong> is to create an inventory management system and implement CREATE, READ & UPDATE operations for the inventory. This assignment will help you handle asynchronous operations and manage state effectively.
        </p>
      </div>
      <Row className="justify-content-center mt-5 mb-5">
        <Col xs="auto mb-2">
          <Button
            variant={assignmentTab === "3rd-party-api" || !assignmentTab ? "dark" : "outline-dark"}
            onClick={() => navigate("?assignmentTab=3rd-party-api")}
          >
            3rd Party API
          </Button>
        </Col>
        <Col xs="auto">
          <Button
            variant={assignmentTab === "inventory" ? "dark" : "outline-dark"}
            onClick={() => navigate("?assignmentTab=inventory")}
          >
            Inventory Management
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          {assignmentTab === "inventory" ? (
            <InventoryManagement />
          ) : (
            <ThirdPartyAPI />
          )}
        </Col>
      </Row>
    </Layout>
  );
};

export default Assignment2;