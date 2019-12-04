// src/components/Products.js

import React, { useState } from "react";
import StripeCheckoutButton from './StripeCheckoutButton'
import { cakeList } from "../utilities/lists";


export default function Products() {
  const [products] = useState(cakeList);
  const [product, setProduct] = useState(null);

  const handleSetProduct = id => {
    //console.log(">>>-Products-handleSetProduct-id->", id.toString());
    setProduct(
      cakeList.filter(item => {
        return item.id.toString() === id.toString()
      })[0]
    );
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
                <td>${item.price.toFixed(2)}</td>
                <td>{item.garnishes}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {product 
          ? (
          <div>
          <br/>
          <hr/>
          <h4>Your selection</h4>
          <br/>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Cake</th>
                <th>Price</th>
                <th>Garnish</th>
              </tr>
            </thead>
            <tbody>         
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.garnishes}</td>
              </tr>
            </tbody>
          </table>
          <br/>
          <hr/>
          <h4>Buy it now!</h4>
          <br/>
          <StripeCheckoutButton product={product}/>

          </div>
          )
          : null
        }

      </div>
    </div>
  );
}
