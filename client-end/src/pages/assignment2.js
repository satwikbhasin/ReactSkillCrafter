import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import ThirdPartyAPI from "../components/thirdPartyAPI";
import InventoryManagement from "../components/inventoryManagement_assignment2";
import Layout from "../components/layout";

const Assignment2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tab = new URLSearchParams(location.search).get("tab");

  return (
    <Layout>
      <Row className="justify-content-center mb-5">
        <Col xs="auto mb-2">
          <Button
            variant={tab === "3rd-party-api" || !tab ? "dark" : "outline-dark"}
            onClick={() => navigate("?tab=3rd-party-api")}
          >
            3rd Party API
          </Button>
        </Col>
        <Col xs="auto">
          <Button
            variant={tab === "inventory-management" ? "dark" : "outline-dark"}
            onClick={() => navigate("?tab=inventory-management")}
          >
            Inventory Management
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          {tab === "inventory-management" ? (
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