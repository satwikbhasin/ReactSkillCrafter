import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import InventoryManagement from "../components/inventoryManagement_assignment3";
import LoginSystem from "../components/loginSystem";
import Layout from "../components/layout";

const Assignment3 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tab = new URLSearchParams(location.search).get("tab");

  return (
    <Layout>
      <Row className="justify-content-center mb-5">
        <Col xs="auto mb-2">
          <Button
            variant={tab === "inventory-management" || !tab ? "dark" : "outline-dark"}
            onClick={() => navigate("?tab=inventory-management")}
          >
            Inventory Management
          </Button>
        </Col>
        <Col xs="auto">
          <Button
            variant={tab === "user-module" ? "dark" : "outline-dark"}
            onClick={() => navigate("?tab=user-module")}
          >
            Login System
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          {tab === "user-module" ? (
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