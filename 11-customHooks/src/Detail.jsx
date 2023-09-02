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

/* 

function sumar (initialValue) {

  const [num, setNum] = useState(initialValue)

  fetch()
    .then(res => setNum(res)

  return num
}

const num1 = sumar(5)    // 5

const numX = sumar(60)   // 60


console.log(num1, numX)     //  5, 60

 */
