import { createContext, useEffect, useState } from "react";
import { products } from "../../data/db";

export const PanContext = createContext();

export function PanProvider({ children }) {

  const initalState = () => JSON.parse(localStorage.getItem('cart')) ?? [];

  const [productos] = useState(products);
  const [cart, setCart] = useState(initalState);

  const addToCart = (pan) => {
    setCart([...cart, pan]);
  }

  const removeCart = (id) => {
    setCart(prevState => prevState.filter(pan => pan.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

  return (
    <PanContext.Provider value={{
      productos,
      cart,
      setCart,
      addToCart,
      removeCart
    }}>
      {children}
    </PanContext.Provider>
  );
};