import NavBar from "./navbar";
import Assignment1 from "../Pages/assignment1";
import Row from "react-bootstrap/Row";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import UpdatedInventoryManagement from "./inventoryManagement_assignment3";
import UserModule from "./loginSystem";

function AssignmentStructure() {
  return (
    <div>
      <NavBar />
      <Tabs defaultActiveKey="assignment1" className="m-3" fill>
      </Tabs>
    </div>
  );
}

export default AssignmentStructure;
