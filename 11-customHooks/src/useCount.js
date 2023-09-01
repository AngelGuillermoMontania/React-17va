import { useState } from "react";

function useCount() {
  const [count, setCount] = useState(0);

  function sumar() {
    setCount((count) => count + 1);
  }

  function restar() {
    setCount((count) => count - 1);
  }

  return { count, sumar, restar };
}

export default useCount;
