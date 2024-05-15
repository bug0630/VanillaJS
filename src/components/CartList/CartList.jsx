import React from 'react';
import { useLocation } from 'react-router-dom';

const CartList = () => {
  const location = useLocation();
  const { state } = location;
  const product = state && state.product;

  if (!product) {
    return (
      <div className="cart_list">
        <h2>구매하기</h2>
        <p>No items in the cart.</p>
      </div>
    );
  }

  return (
    <div className="cart_list">
      <h2>Cart List</h2>
      <div className="cart_item">
        <img src={product.art_img[0]} alt={product.title} />
        <div className="info">
          <h3>{product.title}</h3>
          <p>Price: {product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartList;
