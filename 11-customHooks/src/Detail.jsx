import React from "react";

export default function Detail() {
  // const data = useCount();     UN CUSTOM HOOK NO COMPARTE ESTADO
  ///   data.count = 0
  //     0

  return (
    <div>
      <button onClick={data.sumar}>SUMAR EN DETAIL</button>
      <h1>{`Detail ${data.count}`}</h1>
    </div>
  );
}
