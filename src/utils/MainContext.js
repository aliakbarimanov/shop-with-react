import { createContext, useState } from "react";

export const Context = createContext();

export const MainContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const globalStates = {
    cart,
    setCart,
  };

  return <Context.Provider value={globalStates}>{children}</Context.Provider>;
};
