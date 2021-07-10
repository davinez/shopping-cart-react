import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

export const Cart = () => {
  const { state, removeProduct, increase, decrease, updateTotal, clearCart } =
    useContext(ShopContext);

  const handleButtons = (item, action) => {
    if (action === 'delete') {
      removeProduct(item);
      updateTotal();
    }
    if (action === 'increase') {
      increase(item);
      updateTotal();
    }
    if (action === 'decrease' && item.quantity > 1) {
      decrease(item);
      updateTotal();
    }
    if (action === 'clear') {
      clear();
      updateTotal();
    }
  };

  const clear = () => {
    clearCart();
    updateTotal();
  };

  const cartCards = state.cartItems.map((item) => {
    return (
      <div className="cart-card" key={item.id}>
        <div className="cart-card-name">
          <p>{item.name}</p>
          <p>
            <strong>Price:</strong>{' '}
            {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </p>
        </div>
        <p className="cart-card-quantity">
          <strong>Quantity:</strong> {item.quantity}
        </p>
        <div className="cart-card-btns-container">
          <button
            className="increase"
            onClick={() => handleButtons(item, 'increase')}
          >
            +
          </button>
          <button
            className="decrease"
            onClick={() => handleButtons(item, 'decrease')}
          >
            -
          </button>
          <button onClick={() => handleButtons(item, 'delete')}>
            <img
              src={process.env.PUBLIC_URL + '/images/trash.svg'}
              alt="A trash can icon"
            />
          </button>
        </div>
      </div>
    );
  });

  return (
    <main className="cart-container">
      {state.itemCount > 0 ? (
        <>
          <div className="cart-cards-container">{cartCards}</div>
          <section className="cart-total">
            <p>Total items</p>
            <p className="cart-total-values">{state.itemCount}</p>
            <p>Total Payment</p>
            <p className="cart-total-values">
              ${state.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </p>
            <div className="cart-total-btns-container">
              <button onClick={() => clear()}>
                <Link to="/Checkout">Checkout</Link>
              </button>
              <button onClick={() => clear()}>Clear</button>
            </div>
          </section>
        </>
      ) : (
        <p className="empty-cart">Empty Cart</p>
      )}
    </main>
  );
};
