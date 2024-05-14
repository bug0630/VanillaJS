import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalPrice: 0,
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  resetCart: () => {},
});

export default CartContext;