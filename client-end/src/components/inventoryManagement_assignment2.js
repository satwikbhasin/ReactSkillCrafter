import React, { useState, useEffect } from "react";
import { Form, Button, Modal, Table, Container, Row, Col } from "react-bootstrap";
import { PencilSquare, Plus, Trash } from 'react-bootstrap-icons';
import {
  retrieveProducts,
  addProduct,
  updateProduct
} from "../services/inventoryManagementAPI's";

const InventoryManagement = () => {
  const [productList, setProductLists] = useState([]);
  const [product, setProduct] = useState({ name: "", quantity: "" });
  const [updatingProduct, setUpdatingProduct] = useState({ name: "", quantity: "" });
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCloseAdd = () => setShowAddModal(false);
  const handleShowAdd = () => {
    setProduct({ name: "", quantity: "" });
    setShowAddModal(true);
  };

  const handleCloseUpdate = () => setShowUpdateModal(false);
  const handleShowUpdate = (product) => {
    setProduct(product);
    setUpdatingProduct(product);
    setShowUpdateModal(true);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const response = await retrieveProducts();
    setProductLists(response);
    setLoading(false);
  };

  const handleAddInventoryProduct = async () => {
    setLoading(true);
    await addProduct(product.name, product.quantity);
    await fetchProducts();
    setShowAddModal(false);
    setLoading(false);
  };

  const handleUpdateInventoryProduct = async () => {
    setLoading(true);
    await updateProduct(product._id, product.name, product.quantity);
    await fetchProducts();
    setShowUpdateModal(false);
    setLoading(false);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <div className="text-center">
            <div className="d-flex align-items-center justify-content-between mb-5">
              <h1 className="fw-bold">Inventory</h1>
              <Button variant="success" onClick={handleShowAdd}>
                <Plus size={20} className="me-1" />
                <span className="fw-bold">Product</span>
              </Button>
            </div>
            {loading ? (
              <div className="loader"></div>
            ) : (
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
                        <td style={{ width: "100px" }}>{product.productName}</td>
                        <td style={{ width: "100px" }}>
                          {product.productQuantity}
                        </td>
                        <td style={{ width: "100px" }}>
                          <Button
                            size="sm"
                            variant="warning"
                            onClick={() => handleShowUpdate(product)}
                          >
                            <PencilSquare />
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            )}
          </div>
        </Col>
      </Row>

      {/* Add Product Modal */}
      <Modal centered show={showAddModal} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                value={product.name}
                onChange={(event) => setProduct({ ...product, name: event.target.value })}
                className="mb-2"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Product Quantity</Form.Label>
              <Form.Control
                type="number"
                value={product.quantity}
                onChange={(event) => setProduct({ ...product, quantity: event.target.value })}
                className="mb-2"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="" onClick={handleCloseAdd} className="fw-bold">
            Close
          </Button>
          <Button
            variant="success"
            onClick={handleAddInventoryProduct}
            disabled={!product.name || !product.quantity || loading}
            className="fw-bold"
          >
            {loading ? <span className="loader"></span> : "Add"}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Update Product Modal */}
      <Modal centered show={showUpdateModal} onHide={handleCloseUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>New Name</Form.Label>
              <Form.Control
                type="text"
                value={product.name}
                onChange={(event) => setProduct({ ...product, name: event.target.value })}
                className="mb-3"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>New Quantity</Form.Label>
              <Form.Control
                type="number"
                value={product.quantity}
                onChange={(event) => setProduct({ ...product, quantity: event.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="" onClick={handleCloseUpdate} className="fw-bold">
            Close
          </Button>
          <Button
            variant="warning"
            onClick={handleUpdateInventoryProduct}
            className="fw-bold"
            disabled={
              loading ||
              (product.name === updatingProduct.name &&
                product.quantity === updatingProduct.quantity || (!product.name && !product.quantity))
            }
          >
            {loading ? <span className="loader"></span> : "Update"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default InventoryManagement;