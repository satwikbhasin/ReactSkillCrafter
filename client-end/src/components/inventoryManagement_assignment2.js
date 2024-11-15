import React, { useState, useEffect } from "react";
import { Tabs, Tab, Form, Button, Modal, Table } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import {
  retrieveProducts,
  addProduct,
  updateProduct,
} from "../services/inventoryManagementAPI's";

const InventoryManagement = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const defaultTab = searchParams.get("inventoryTab") || "allProducts";

  const [productList, setProductLists] = useState([]);
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [show, setShow] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedQuantity, setUpdatedQuantity] = useState("");
  const [updatedId, setUpdatedId] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    retrieveProducts().then((response) => {
      setProductLists(response);
    });
  }, []);

  const handleAddInventoryProduct = () => {
    addProduct(productName, productQuantity).then(() => {
      refreshPage();
    });
  };

  const handleUpdateInventoryProduct = () => {
    updateProduct(updatedId, updatedName, updatedQuantity).then(() => {
      refreshPage();
    });
  };

  const handleSelect = (key) => {
    searchParams.set("inventoryTab", key);
    navigate({ search: searchParams.toString() });
  };

  return (
    <>
      <Tabs activeKey={defaultTab} onSelect={handleSelect} fill>
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
                {productList &&
                  productList.map((product) => (
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
            <Form>
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
                <Button variant="dark" onClick={handleAddInventoryProduct} disabled={
                  !productName || !productQuantity
                }>
                  Add Product
                </Button>
              </div>
            </Form>
          </div>
        </Tab>
        <Tab eventKey="updateProduct" title="Update a Product">
          <div className="text-center">
            <h3 className="p-2 m-3 fw-bold text-success">UPDATE A PRODUCT IN INVENTORY</h3>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {productList &&
                  productList.map((product) => (
                    <tr key={product.id}>
                      <td>{product.productName}</td>
                      <td>{product.productQuantity}</td>
                      <td>
                        <Button
                          size="sm"
                          variant="success"
                          onClick={() => {
                            handleShow();
                            setUpdatedId(product._id);
                          }}
                        >
                          Update
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </Tab>
      </Tabs>
      <Modal show={show} onHide={handleClose}>
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
          <Button variant="" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              handleUpdateInventoryProduct();
            }}
            disabled={!updatedName || !updatedQuantity}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InventoryManagement;