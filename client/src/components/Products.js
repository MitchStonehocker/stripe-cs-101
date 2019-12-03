// src/components/Products.js

import React, { useState } from "react";

import { cakeList } from "../utilities/lists";

export default function Products() {
  const [products] = useState(cakeList);
  const [product, setProduct] = useState(null);

  const handleSetProduct = id => {
    console.log(">>>-Products-handleSetProduct-id->", id);

    setProduct(
      cakeList.filter(prod => {
        return prod.id === id;
      })
    );
    console.log(">>>-Products-product->", product);
  };

  return (
    <div className="container">
      <div className="product">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Select</th>
              <th>Cake</th>
              <th>Price</th>
              <th>Garnish</th>
            </tr>
          </thead>
          <tbody>
            {products.map(item => (
              <tr key={item.id}>
                <td>
                  <input
                    type="radio"
                    name="item"
                    value={item.id}
                    onClick={e => handleSetProduct(e.target.value)}
                  ></input>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.garnishes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
