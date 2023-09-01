import axios from "axios";
import { useState } from "react";

function useCats(initialValue) {
  const [data, setData] = useState(initialValue);

  const getData = async (url) => {
    try {
      const { data } = await axios.get(url);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { data, getData };
}

export default useCats;
