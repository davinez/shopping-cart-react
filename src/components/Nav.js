import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Nav = () => {
  const { cart } = useContext(ShopContext);
  const [shoppingCart] = cart;

  return (
    <nav className="top-navbar">
      <Link to="/components/Home">
        <h1 className="logo">DavoWorld</h1>
      </Link>
      <ul className="nav-links">
        <Link to="/components/Home">
          <li>Home</li>
        </Link>
        <Link to="/components/Shop">
          <li>Shop</li>
        </Link>
        <Link to="/components/About">
          <li>About</li>
        </Link>
      </ul>
      <div>{shoppingCart.length}</div>
    </nav>
  );
};

export default Nav;
