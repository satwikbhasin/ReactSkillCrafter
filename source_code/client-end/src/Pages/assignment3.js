import React from "react";
import { Tabs, Tab, Row } from "react-bootstrap";
import InventoryManagement from "../Components/inventoryManagement_assignment3";
import LoginSystem from "../Components/loginSystem";
import NavBar from "../Components/navbar";

function Assignment3() {
  return (
    <>
      <NavBar />
      <Row>
        <h1 className="text-center mt-4">Assignment-3</h1>
      </Row>
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
              <InventoryManagement />
            </Row>
          </div>
        </Tab>
        <Tab
          eventKey="assignment3-user-module"
          title="Assignment 3 - User Module"
        >
          <LoginSystem />
        </Tab>
      </Tabs>
    </>
  );
}

export default Assignment3;
