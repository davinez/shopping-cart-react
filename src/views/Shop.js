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
        <Link to={`${url}/${item.id}`}>
          <p className="item-name">{item.name}</p>
        </Link>
        {/* router hook 'useRouteMatch' */}
        <Link to={`${url}/${item.id}`} className="images-link-container">
          <img
            className="items-images"
            src={process.env.PUBLIC_URL + item.url}
            alt="A Spaceship"
          />
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
      <main className="shop-container">{itemsCards}</main>
    </>
  );
};

export default Shop;
