import React, { useState, useEffect } from "react";
import Axios from "axios";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/esm/Table";

const UpdatedInventoryManagement = () => {
  const [productList, setProductLists] = useState([]);
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productImage, setProductImage] = useState("");

  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = () => setShowUpdate(true);

  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => {
    setShowDelete(true);
  };

  const [updatedName, setUpdatedName] = useState("");
  const [updatedQuantity, setUpdatedQuantity] = useState("");
  const [updatedId, setUpdatedId] = useState("");
  const [deletedId, setDeletedId] = useState("");

  useEffect(() => {
    Axios.get("http://ec2-3-144-142-14.us-east-2.compute.amazonaws.com:3001/retrieve/").then((response) => {
      setProductLists(response.data);
    });
  }, []);

  function refreshPage() {
    window.location.reload(false);
  }

  // Function to handle form submission for creating new inventory product
  const handleAddInventoryproduct = () => {
    Axios.post("http://ec2-3-144-142-14.us-east-2.compute.amazonaws.com:3001/insert/", {
      productName: productName,
      productQuantity: productQuantity,
      productImage: productImage,
    });
    alert("Item Updated! See on 'See Products' Tab.");
    refreshPage();
  };

  // Function to handle form submission for updating an existing inventory product
  const handleUpdateInventoryProduct = () => {
    Axios.put("http://ec2-3-144-142-14.us-east-2.compute.amazonaws.com:3001/update/", {
      id: updatedId,
      updatedName: updatedName,
      updatedQuantity: updatedQuantity,
    });
    alert("Item Added! See on 'See Products' Tab.");
    refreshPage();
  };

  const handleDeleteInventoryProduct = () => {
    Axios.delete("http://ec2-3-144-142-14.us-east-2.compute.amazonaws.com:3001/delete/" + deletedId);
    alert("Item Deleted!");
    refreshPage();
  };

  return (
    <>
      <h1
        style={{ display: "flex", justifyContent: "center" }}
        className="m-1 p-1 text-primary"
      >
        Updated Inventory Management
      </h1>

      <Tabs defaultActiveKey="seeProducts" className="" fill>
        <Tab eventKey="seeProducts" title="See Products">
          <div className="text-center">
            <h3 className="p-2 m-3 fw-bold text-success">
              ALL PRODUCTS IN INVENTORY
            </h3>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {productList.map((product) => (
                  <tr key={product.id}>
                    <td>{product.productName}</td>
                    <td>{product.productQuantity}</td>
                    <td>{product.productImage}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Tab>
        <Tab eventKey="addProduct" title="Add a Product">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h3 className="p-2 m-3 fw-bold text-success">ADD A PRODUCT</h3>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Form cen>
              <Form.Group>
                <Form.Label>Product Name:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(event) => setProductName(event.target.value)}
                  className="mb-2"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Product Quantity:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(event) => setProductQuantity(event.target.value)}
                  className="mb-2"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Product Image:</Form.Label>
                <Form.Control
                  type="file"
                  className="mb-4"
                  onChange={(event) => setProductImage(event.target.value)}
                />
              </Form.Group>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button variant="dark" onClick={handleAddInventoryproduct}>
                  Add Product
                </Button>
              </div>
            </Form>
          </div>
        </Tab>
        <Tab eventKey="updateProduct" title="Update a Product">
          <div className="text-center">
            <h3 className="p-2 m-3 fw-bold text-success">UPDATE PRODUCTS</h3>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Image</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {productList.map((product) => (
                  <tr key={product.id}>
                    <td>{product.productName}</td>
                    <td>{product.productQuantity}</td>
                    <td>{product.productImage}</td>
                    <td>
                      <Button
                        size="sm"
                        variant="success"
                        onClick={() => {
                          handleShowUpdate();
                          setUpdatedId(product._id);
                        }}
                      >
                        Update
                      </Button>
                    </td>
                    <td>
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => {
                          setDeletedId(product._id);
                          handleShowDelete();
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Tab>
      </Tabs>
      <Modal show={showUpdate} onHide={handleCloseUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>
                <p className="fw-bold">New Name:</p>
              </Form.Label>
              <Form.Control
                className="mb-3"
                onChange={(event) => setUpdatedName(event.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <p className="fw-bold">New Quantity:</p>
              </Form.Label>
              <Form.Control
                onChange={(event) => setUpdatedQuantity(event.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseUpdate}>
            Close
          </Button>
          <Button
            variant="success"
            onClick={() => {
              handleCloseUpdate();
              handleUpdateInventoryProduct();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseDelete}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleCloseDelete();
              handleDeleteInventoryProduct();
            }}
          >
            Yes, Delete!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdatedInventoryManagement;
