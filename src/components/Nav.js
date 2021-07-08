import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Nav = () => {
  const { state } = useContext(ShopContext);

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
      <Link to="/components/Cart">
        <div className="cart-navbar">
          <span>{state.cartItems.length}</span>
          <img src="/images/cart4.svg" alt="A shopping cart icon" />
        </div>
      </Link>
    </nav>
  );
};

export default Nav;
