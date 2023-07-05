import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const ThirdPartyAPI = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
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
                <img src={product.image} width={100} height={100} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ThirdPartyAPI;
