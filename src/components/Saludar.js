import React from "react";

export default function Saludar(props) {
  const { userInfo, saludarFn } = props;
  const {
    name = "Anonimo",
    edad = "?",
    color = " que nadie conoce",
  } = userInfo;

  console.log(props);
  console.log(userInfo);

  return (
    <div>
      <p>
        Hola {name}, tiene {edad} años, le gusta el color {color}
      </p>
      <button onClick={() => saludarFn(name, edad)}>Saludar</button>
    </div>
  );
}
