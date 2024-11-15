import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import ThirdPartyAPI from "../components/thirdPartyAPI";
import InventoryManagement from "../components/inventoryManagement_assignment2";
import Layout from "../components/layout";

const Assignment2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const assignmentTab = new URLSearchParams(location.search).get("assignmentTab");

  return (
    <Layout>
      <Row className="justify-content-center mb-5">
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