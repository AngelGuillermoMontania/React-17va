import { useState } from "react";

export default function useCount() {
  const [count, setCount] = useState(1);

  function sumarCount() {
    setCount(count + 1);
  }

  function restarCount() {
    if (count - 1 >= 1) {
      setCount(count - 1);
    }
  }

  function resetCount() {
    setCount(1);
  }

  return {
    count,
    sumarCount,
    restarCount,
    resetCount,
  };
}
