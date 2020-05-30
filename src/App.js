import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Saludar from "./components/Saludar";
// import { Button, Accordion, Card, Alert } from "react-bootstrap";

// import { ReactComponent as ReactIcon } from "./assets/original.svg";

function App() {
  // const userInfo = { name: "Giusseppe", edad: 28, color: "Azul" };
  // const userInfo2 = { name: "Batman", edad: 35, color: "Negro" };

  // const saludarFn = (name, edad) => {
  //   console.log(`hola ${name} tiene ${edad} años`);
  // };

  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0);

  useEffect(() => {
    console.log("Total: " + contar);
  }, [contar]);

  const encenderApagar = () => {
    // setStateCar(!stateCar);
    setStateCar((prevValue) => !prevValue);
    setContar(contar + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3> El vehiculo esta encendido: {stateCar ? "ON" : "OFF"}</h3>
        <h4> Clicks: {contar}</h4>
        <button onClick={encenderApagar}>ON / OFF</button>
      </header>
    </div>
    // <div className="App">
    //   <h1>React Bootstrap</h1>
    //   <Button variant="primary" onClick={() => console.log("Hola")}>
    //     Click
    //   </Button>{" "}
    //   <Button variant="primary" size="lg" block>
    //     Block level button
    //   </Button>
    //   <Accordion defaultActiveKey="0">
    //     <Card>
    //       <Card.Header>
    //         <Accordion.Toggle as={Button} variant="link" eventKey="0">
    //           Abrir!
    //         </Accordion.Toggle>
    //       </Card.Header>
    //       <Accordion.Collapse eventKey="0">
    //         <Card.Body>Hello! Amigo I'm the body</Card.Body>
    //       </Accordion.Collapse>
    //     </Card>
    //     <Card>
    //       <Card.Header>
    //         <Accordion.Toggle as={Button} variant="link" eventKey="1">
    //           Abrir!
    //         </Accordion.Toggle>
    //       </Card.Header>
    //       <Accordion.Collapse eventKey="1">
    //         <Card.Body>Hello! Chorizo I'm another body</Card.Body>
    //       </Accordion.Collapse>
    //     </Card>
    //   </Accordion>
    //   <Alert variant="danger">Peligro!</Alert>
    //   <ReactIcon />
    // </div>
  );
}

export default App;
