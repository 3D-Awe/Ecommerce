import { createContext, useState } from "react";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const AddToBasket = (veggie) => {
    if (!basket.some((item) => item.id === veggie.id)) {
      setBasket([...basket, veggie]);
    }
  };
  return (
    <BasketContext.Provider value={{ basket, AddToBasket, setBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
