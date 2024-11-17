import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import InventoryManagement from "../components/assignment3/inventoryManagement_assignment3";
import LoginSystem from "../components/assignment3/loginSystem";
import Layout from "../components/layout";

const Assignment3 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const assignmentTab = new URLSearchParams(location.search).get("assignmentTab");

  return (
    <Layout>
<div className="text-left border p-5">
  <h1 className="display-4">Assignment 3</h1>
  <p className="lead">
    <strong>The first part</strong> is to add DELETE operation to the inventory system.
    <br />
    <strong>The second part</strong> is to implement user authentication. This includes creating user login and signup pages, a profile page for logged-in users, and maintaining user sessions.
  </p>
</div>
      <Row className="justify-content-center mt-5 mb-5">
        <Col xs="auto mb-2">
          <Button
            variant={assignmentTab === "inventory" || !assignmentTab ? "dark" : "outline-dark"}
            onClick={() => navigate("?assignmentTab=inventory")}
          >
            Inventory Management
          </Button>
        </Col>
        <Col xs="auto">
          <Button
            variant={assignmentTab === "user-module" ? "dark" : "outline-dark"}
            onClick={() => navigate("?assignmentTab=user-module")}
          >
            Login System
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          {assignmentTab === "user-module" ? (
            <LoginSystem />
          ) : (
            <InventoryManagement />
          )}
        </Col>
      </Row>
    </Layout>
  );
};

export default Assignment3;