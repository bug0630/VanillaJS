import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/Cart.css'

import AddressInput from '../AddressInput/AddressInput';
import Header from '../header/Header';
import Footer from '../footer/Footer';

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
      <h2>주문상품</h2>
      <div className="cart_item">
        <img src={product.art_img[0]} alt={product.title} className='cartItem_img' />
        <div className="cartItem_title">
          <h3>{product.title}</h3>
           <table border={1} className='cartItem_Info'> 
            <colgroup>
            <col style={{ width: '190px'}}/>
            <col style={{ width: 'auto'}}/>
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'>작품 코드</th>
                <th>{product.code}</th>
              </tr>
              <tr>
                <th scope='rope'>호수</th>
                <th>{product.size}</th>
              </tr>
              <tr>
                <th>결제금액</th>
                <th>{product.price}</th>
              </tr>
            </tbody>
            
          </table> 
          

    <>
      <Header />
      <div className="cart_list">
        <h2>Cart List</h2>
        <div className="cart_item">
          <img src={product.art_img[0]} alt={product.title} />
          <div className="info">
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
          </div>

        </div>
        <AddressInput />
      </div>
      <Footer />
    </>
  );
};

export default CartList;
