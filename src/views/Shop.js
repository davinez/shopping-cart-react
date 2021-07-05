import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const Shop = () => {
  const { items, cart } = useContext(ShopContext);
  const [itemData] = items;
  const [shoppingCart, setShoppingCart] = cart;

  const addToCart = (item) => {
    setShoppingCart([...shoppingCart, item]);
  };

  const itemsCards = itemData.map((item) => {
    return (
      <div className="item-card" key={item.id}>
        <h3>{item.name}</h3>
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
          <strong>Price:</strong> {item.price}
        </p>
        <button onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    );
  });

  return (
    <>
      <div className="shop-container">{itemsCards}</div>
    </>
  );
};

export default Shop;
