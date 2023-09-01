import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ImagesCat() {
  const [img, setImg] = useState([]);

  const { catId } = useParams();

  useEffect(() => {
    const getImg = async () => {
      try {
        const { data } = await axios.get(
          `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${catId}&api_key=${
            import.meta.env.VITE_API_KEY
          }`
        );
        setImg(data);
      } catch (error) {
        console.log(error);
      }
    };
    getImg();
  }, [catId]);

  return (
    <div>
      <Link to="/">Volver</Link>
      <div>
        {img.map((cat) => {
          return (
            <img
              src={cat.url}
              alt={cat.id}
              key={cat.id}
              height={500}
              width={500}
            />
          );
        })}
      </div>
    </div>
  );
}
