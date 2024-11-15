import React, { useState, useEffect } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/esm/Table";
import {
  retrieveProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../services/inventoryManagementAPI's";

const InventoryManagement = () => {
  const [productList, setProductLists] = useState([]);
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");

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
    retrieveProducts().then((response) => {
      setProductLists(response);
    });
  }, []);

  function refreshPage() {
    window.location.reload(false);
  }

  const handleAddInventoryproduct = () => {
    addProduct(productName, productQuantity).then(() => {
      refreshPage();
    });
  };

  const handleUpdateInventoryProduct = () => {
    updateProduct(updatedId, updatedName, updatedQuantity).then(() => {
      refreshPage();
    });
  };

  const handleDeleteInventoryProduct = () => {
    deleteProduct(deletedId).then(() => {
      refreshPage();
    });
  };

  return (
    <>
      <Tabs defaultActiveKey="allProducts" className="" fill>
        <Tab eventKey="allProducts" title="All Products">
          <div className="text-center">
            <h3 className="p-2 m-3 fw-bold text-success">
              ALL PRODUCTS IN INVENTORY
            </h3>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {productList && productList.map((product) => (
                  <tr key={product.id}>
                    <td style={{ width: "100px" }}>{product.productName}</td>
                    <td style={{ width: "100px" }}>
                      {product.productQuantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Tab>
        <Tab eventKey="addProduct" title="Add Product">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h3 className="p-2 m-3 fw-bold text-success">ADD A PRODUCT TO INVENTORY</h3>
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
                  type="number"
                  onChange={(event) => setProductQuantity(event.target.value)}
                  className="mb-2"
                />
              </Form.Group>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button variant="dark" onClick={handleAddInventoryproduct} disabled={
                  !productName || !productQuantity
                }>
                  Add Product
                </Button>
              </div>
            </Form>
          </div>
        </Tab>
        <Tab eventKey="updateProduct" title="Update Product">
          <div className="text-center">
            <h3 className="p-2 m-3 fw-bold text-success">UPDATE A PRODUCT IN INVENTORY</h3>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {productList && productList.map((product) => (
                  <tr key={product.id}>
                    <td>{product.productName}</td>
                    <td>{product.productQuantity}</td>
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
                type="number"
                onChange={(event) => setUpdatedQuantity(event.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="" onClick={handleCloseUpdate}>
            Close
          </Button>
          <Button
            variant="success"
            onClick={() => {
              handleCloseUpdate();
              handleUpdateInventoryProduct();
            }}
            disabled={!updatedName || !updatedQuantity}
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
          <Button variant="" onClick={handleCloseDelete}>
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

export default InventoryManagement;
