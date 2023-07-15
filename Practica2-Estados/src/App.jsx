import React, { useState } from "react";
import ContainCard from "./components/ContainCard.jsx";
import Nav from "./components/Nav.jsx";
import data from "./data.js";

export default function App() {
  const [cities, setCities] = useState([]);

  const apiKey = "4f3c88ba651a35b3eda9f05221decec6";

  function onClose(id) {
    setCities(cities.filter((c) => c.id != id));
  }

  function onSearch(ciudad) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=standard`
    )
      .then((r) => r.json())
      .then((recurso) => {
        console.log(recurso);
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities([...cities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <ContainCard cities={cities} onClose={onClose} />
    </div>
  );
}
