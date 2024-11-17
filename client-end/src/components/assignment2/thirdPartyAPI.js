import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { getProducts } from "../../services/thirdPartyAPI";
import "../../index.css";

const ThirdPartyAPI = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="overflow-scroll d-flex justify-content-center">
      {loading ? (
        <div className="loader"></div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <img src={product.image} width={100} height={100} alt={product.title} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default ThirdPartyAPI;