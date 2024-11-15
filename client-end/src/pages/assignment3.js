import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import InventoryManagement from "../components/inventoryManagement_assignment3";
import LoginSystem from "../components/loginSystem";
import Layout from "../components/layout";

const Assignment3 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const assignmentTab = new URLSearchParams(location.search).get("assignmentTab");

  return (
    <Layout>
      <Row className="justify-content-center mb-5">
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