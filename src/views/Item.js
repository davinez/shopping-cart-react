import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

export const Item = () => {
  const { items, addProduct, increase, updateTotal, state } =
    useContext(ShopContext);
  const { id } = useParams();

  //Assign Object of array to show in current "item page"
  const item = items.find((x) => x.id === id);

  const checkCart = (item) => {
    state.cartItems.some((x) => x.id === item.id)
      ? increase(state.cartItems.find((x) => x.id === item.id))
      : addProduct(item);
    updateTotal();
  };

  return (
    <main className="item-page-card">
      <p className="item-name">{item.name}</p>
      <img className="items-images" src={item.url} alt="A Spaceship" />
      <p>
        <strong>Class:</strong> {item.class}
      </p>
      <p>
        <strong>Length:</strong> {item.length}
      </p>
      <p>
        <strong>Width:</strong> {item.width}
      </p>
      <p>
        <strong>Height:</strong> {item.height}
      </p>
      <p>
        <strong>Price:</strong>{' '}
        {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </p>
      <button className="item-page-btn" onClick={() => checkCart(item)}>
        Add to Cart
      </button>
    </main>
  );
};
