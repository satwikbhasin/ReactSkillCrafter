import React, { useState, useEffect } from "react";
import { Tabs, Tab, Row, Table } from "react-bootstrap";
import ThirdPartyAPI from "../Components/thirdPartyAPI";
import InventoryManagement from "../Components/inventoryManagement_assignment2";
import NavBar from "../Components/navbar";

const Assignment2 = () => {
  return (
    <>
      <NavBar />
      <Row>
        <h1 className="text-center mt-4">Assignment-2</h1>
      </Row>
      <Tabs defaultActiveKey="assignment2-api" className="m-3" fill>
        <Tab eventKey="assignment2-api" title="Assignment 2 - API">
          <ThirdPartyAPI />
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
    </>
  );
};

export default Assignment2;
