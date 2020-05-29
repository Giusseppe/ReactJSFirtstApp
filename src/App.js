import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Saludar from "./components/Saludar";
function App() {
  const userInfo = { name: "Giusseppe", edad: 28, color: "Azul" };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo={userInfo} />
      </header>
    </div>
  );
}

export default App;
