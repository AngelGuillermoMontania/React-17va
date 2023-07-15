import React from "react";

export default function Card({ max, min, name, img, onClose, id }) {
  console.log(max);
  console.log(min);
  // acá va tu código
  return (
    <div>
      <div>
        <button onClick={() => onClose(id)}>X</button>
      </div>
      <div>
        <h2>{name}</h2>
      </div>
      <div>
        <div>
          <h5>Min</h5>
          <h5>{min}</h5>
        </div>
        <div>
          <h5>Max</h5>
          <h5>{max}</h5>
        </div>
        <div>
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
        </div>
      </div>
    </div>
  );
}
