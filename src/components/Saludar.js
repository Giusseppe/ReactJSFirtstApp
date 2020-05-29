import React from "react";

export default function Saludar(props) {
  const { userInfo, saludarFn } = props;
  const { name = "Anonimo" } = userInfo;

  console.log(props);
  console.log(userInfo);

  return (
    <div>
      <p>
        Hola {props.userInfo.name}, tiene {props.userInfo.edad} años, le gusta
        el color {props.userInfo.color}
      </p>
      <button onClick={() => saludarFn(name)}>Saludar</button>
    </div>
  );
}
