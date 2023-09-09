import { createContext, useState } from "react";

export const CountContext = createContext();

const CountContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  function sumar() {
    setCount(count + 1);
  }

  function restar() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  const data = {
    count,
    sumar,
    restar,
    reset,
  };

  return <CountContext.Provider value={data}>{children}</CountContext.Provider>;
};

export default CountContextProvider;

/* Si hay datos o funciones que se usan en mas de dos
componentes, lo ideal es crear un context para ellos. 
Si no con pasar props o un customHook es suficiente */

/* el custoHook crea instancias para reutilizar codigo... 
el contxt es codigo y estado global para todos los componentes */
