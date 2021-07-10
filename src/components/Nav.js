import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Nav = () => {
  const { state } = useContext(ShopContext);
  return (
    <nav className="top-navbar">
      <Link to="/">
        <p className="logo">DavoWorld</p>
      </Link>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Shop">
          <li>Shop</li>
        </Link>
        <Link to="/About">
          <li>About</li>
        </Link>
      </ul>
      <Link to="/Cart" className="cart-navbar-container">
        <div className="cart-navbar">
          <span>{state.itemCount}</span>
          <img
            src={process.env.PUBLIC_URL + '/images/cart4.svg'}
            alt="A shopping cart icon"
          />
        </div>
      </Link>
    </nav>
  );
};

export default Nav;
