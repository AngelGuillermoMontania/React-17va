import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCats from "./useCats";

export default function Home() {
  const allCats = useCats([]);
  const img = useCats([]);
  const [selectedCat, setSelectedCat] = useState({});

  useEffect(() => {
    allCats.getData("https://api.thecatapi.com/v1/breeds");
  }, []);

  return (
    <div>
      <select
        onChange={(e) => {
          setSelectedCat(allCats.data.find((cat) => cat.id == e.target.value));
          img.getData(
            `https://api.thecatapi.com/v1/images/search?breed_id=${e.target.value}`
          );
        }}
      >
        <option>Select a cat</option>
        {allCats.data.map((cat) => (
          <option value={cat.id} key={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      {selectedCat?.id && (
        <div>
          <h1>{selectedCat.name}</h1>
          <img
            src={img.data[0]?.url}
            alt={img.data[0]?.id}
            height={500}
            width={500}
          />
          <p>{selectedCat.description}</p>
          <Link to={`/ImagesCat/${selectedCat.id}`}>Ver mas fotos</Link>
        </div>
      )}
    </div>
  );
}
