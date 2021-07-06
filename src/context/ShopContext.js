import { useState, createContext } from 'react';
import { data } from '../data';

// Create Context Object
export const ShopContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const ShopContextProvider = (props) => {
  const [shoppingCart, setShoppingCart] = useState([]);
  /* 'data' redundant assignment for "context API" testing,
     instead of local data, "fetch" should be used.  */
  const [items, setItems] = useState(data);

  // Make the context object:
  const contextObject = {
    items: [items, setItems],
    cart: [shoppingCart, setShoppingCart],
  };

  return (
    <ShopContext.Provider value={contextObject}>
      {props.children}
    </ShopContext.Provider>
  );
};
