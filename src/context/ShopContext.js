import { useState, useEffect, createContext } from 'react';

// Create Context Object
export const ShopContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const ShopContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      const response = await fetch('../data.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const fetchedData = await response.json();
      setItems(fetchedData);
    }
    fetchItems();
  }, []);

  return (
    <ShopContext.Provider
      value={{
        items: [items, setItems],
        cart: [shoppingCart, setShoppingCart],
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};
