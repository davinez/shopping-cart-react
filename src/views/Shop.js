import React, { useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Shop = () => {
  const { items } = useContext(ShopContext);

  //Destructuring useRouteMatch() return object
  const { url } = useRouteMatch();

  const itemsCards = items.map((item) => {
    return (
      <div className="item-card" key={item.id}>
        <h3>{item.name}</h3>

        {/* router hook 'useRouteMatch' */}
        <Link to={`${url}/${item.id}`}>
          <img className="items-images" src={item.url} alt="A Spaceship" />
        </Link>

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
