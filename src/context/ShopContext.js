import { useState, useReducer, createContext } from 'react';
import { data } from '../data';
import { CartReducer, cartTotal } from './CartReducer';

// Create Context Object
export const ShopContext = createContext();

const initialState = { cartItems: [], ...cartTotal([]) };

// Create a provider for components to consume and subscribe to changes
export const ShopContextProvider = (props) => {
  /* 'data' redundant assignment for "context API" testing,
     instead of local data, "fetch" should be used.  */
  const [items, setItems] = useState(data);
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const increase = (payload) => {
    dispatch({ type: 'INCREASE', payload });
  };

  const decrease = (payload) => {
    dispatch({ type: 'DECREASE', payload });
  };

  const addProduct = (payload) => {
    dispatch({ type: 'ADD_ITEM', payload });
  };

  const removeProduct = (payload) => {
    dispatch({ type: 'REMOVE_ITEM', payload });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR' });
  };

  // Make the context object:
  const contextObject = {
    items,
    setItems,
    addProduct,
    increase,
    decrease,
    removeProduct,
    clearCart,
    state,
  };
  // 'state' refers to the values declare in 'initialState'

  return (
    <ShopContext.Provider value={contextObject}>
      {props.children}
    </ShopContext.Provider>
  );
};
