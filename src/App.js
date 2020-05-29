import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Saludar from "./components/Saludar";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar name="Giusseppe" edad="28" />
        <Saludar name="Batman" edad="39" />
      </header>
    </div>
  );
}

export default App;
