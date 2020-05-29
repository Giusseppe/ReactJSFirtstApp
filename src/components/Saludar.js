import React from "react";

export default function Saludar(props) {
  console.log(props);

  return (
    <div>
      <p>
        Hola {props.userInfo.name}, tiene {props.userInfo.edad} años, le gusta
        el color {props.userInfo.color}
      </p>
      <button onClick={() => props.saludarFn(props.userInfo.name)}>
        Saludar
      </button>
    </div>
  );
}
