import React from "react";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Products from "./components/Products";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>header</p>
      </header>
      <main className="App-main">
      <div>
        <p>1) Pick a cake. </p>
        <p>2) Click the 'Pay With Card' button. Note the test mode.</p>
        <p>3) Enter user and address details. </p>
        <p>4-a) Use card number 4242 4242 4242 4242. </p>
        <p>4-b) Use any MM/YY greater than today. </p>
        <p>4-b) Use any 3 digits for cvc. </p>
      </div>
        <Products />
      </main>
      <footer className="App-footer">
        <p>footer</p>
      </footer>
    </div>
  );
}
