import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Nav = () => {
  const { state } = useContext(ShopContext);
  return (
    <nav className="top-navbar">
      <Link to="/components/Home">
        <p className="logo">DavoWorld</p>
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
      <Link to="/components/Cart" className="cart-navbar-container">
        <div className="cart-navbar">
          <span>{state.itemCount}</span>
          <img src="/images/cart4.svg" alt="A shopping cart icon" />
        </div>
      </Link>
    </nav>
  );
};

export default Nav;
