// src/components.Storeglobal.fetch = require('node-fetch');

import React, { useState } from "react";

import StripeCheckout from "react-stripe-checkout";

import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../styles.css";

import Products from "./Products";

toast.configure();

const STRIPE_PIBLIC_TEST_KEY = "pk_test_zSYvufXGddHIsuW5E4v3r9v0";
const STRIPE_URL_TEST = "http://localhost:7500/checkout";

export default function Store() {
  const [user, setUser] = useState(null);
  const [billingAddresses, setBillingAddresses] = useState(null);
  const [shippingAddresses, setShippingAddresses] = useState(null);

  async function handleToken(token, addresses) {
    console.log(">>>-Store-handleToken-token->", token);
    setUser({
      name: token.card.name,
      email: token.email,
    });
    console.log(">>>-Store-handleToken-addresses->", addresses);
    setBillingAddresses({
      title: addresses.billing_name,
      street: addresses.billing_address_line1,
      city: addresses.billing_address_city,
      state: addresses.billing_address_state,
      zip: addresses.billing_address_zip,
      country: addresses.billing_address_country,
      countryCode: addresses.billing_address_country_code,
    });
    setShippingAddresses({
      title: addresses.shipping_name,
      street: addresses.shipping_address_line1,
      city: addresses.shipping_address_city,
      state: addresses.shipping_address_state,
      zip: addresses.shipping_address_zip,
      country: addresses.shipping_address_country,
    });

    const response = await axios.post(STRIPE_URL_TEST, {
      token,
      product,
    });
    console.log(">>>-Response->", response);
    const { status } = response.data;
    console.log(">>>-Response.data->", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    
      <div className="product">
        <h1>{product.name}</h1>
        <h3>On Sale · ${product.price}</h3>
      </div>
      <StripeCheckout
        stripeKey={STRIPE_PIBLIC_TEST_KEY}
        token={handleToken}
        amount={product.price * 100}
        name={product.name}
        billingAddress
        shippingAddress
      />
      <div>
        {user ? (
          <ul>
            <li>{user.name}</li>
            <li>{user.email}</li>
          </ul>
        ) : null}
      </div>
      <div>
        {billingAddresses ? (
          <ul>
            <li>{billingAddresses.title}</li>
            <li>{billingAddresses.street}</li>
            <li>{billingAddresses.city}</li>
            <li>{billingAddresses.state}</li>
            <li>{billingAddresses.zip}</li>
            <li>{billingAddresses.country}</li>
            <li>{billingAddresses.countryCode}</li>
          </ul>
        ) : null}
      </div>
      <div>
        {shippingAddresses ? (
          <ul>
            <li>{shippingAddresses.title}</li>
            <li>{shippingAddresses.street}</li>
            <li>{shippingAddresses.city}</li>
            <li>{shippingAddresses.state}</li>
            <li>{shippingAddresses.zip}</li>
            <li>{shippingAddresses.country}</li>
            <li>{shippingAddresses.countryCode}</li>
          </ul>
        ) : null}
      </div>
    
  );
}
