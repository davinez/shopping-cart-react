import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

export const Cart = () => {
  const { state, removeProduct, increase, decrease } = useContext(ShopContext);

  const cartCards = state.cartItems.map((item) => {
    return (
      <div className="cart-card" key={item.id}>
        <p>{item.name}</p>
        <p>
          <strong>Price:</strong>{' '}
          {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
        <p>
          <strong>Quantity:</strong> {item.quantity}
        </p>
        <div>
          <button onClick={() => increase(item)}>+</button>
          <button onClick={() => decrease(item)}>-</button>
          <button onClick={() => removeProduct(item)}>Delete</button>
        </div>
      </div>
    );
  });

  return <div className="cart-container">{cartCards}</div>;
};
