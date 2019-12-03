import React from "react";

import "./App.css";

import Products from "./components/Products";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>header</p>
      </header>
      <main className="App-main">
        <Products />
      </main>
      <footer className="App-footer">
        <p>footer</p>
      </footer>
    </div>
  );
}
