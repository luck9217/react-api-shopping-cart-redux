import { createContext, useEffect, useState } from "react";

export const EcommerceContext = createContext();

export const EcommerceProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  async function fetchData(searchquery) {
    const data = await fetch(
       `https://api.mercadolibre.com/sites/MLA/search?q=${searchquery}`
    );
    const response = await data.json();
    setProducts(response.results);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <EcommerceContext.Provider value={{ products, cart, setProducts, setCart ,fetchData}}>
      {children}
    </EcommerceContext.Provider>
  );
};
