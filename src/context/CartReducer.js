export const cartTotal = (cartItems) => {
  let itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = cartItems.reduce(
    (total, product) => total + parseInt(product.price) * product.quantity,
    0
  );
  return { itemCount, total };
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      console.log(state);
      const newItem = { ...action.payload, quantity: 1 };

      return {
        ...state,
        ...cartTotal([...state.cartItems, newItem]),
        cartItems: [...state.cartItems, newItem],
      };

    case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload.id),
        ],
      };

    case 'INCREASE':
      const increaseQuantity = action.payload.quantity + 1;
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: increaseQuantity }
            : item
        ),
      };

    case 'DECREASE':
      const decreaseQuantity = action.payload.quantity - 1;
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: decreaseQuantity }
            : item
        ),
      };

    case 'CHECKOUT':
      return {
        ...state,
        cartItems: [],
        checkout: true,
      };
    case 'CLEAR':
      return {
        cartItems: [],
      };
    default:
      return state;
  }
};
