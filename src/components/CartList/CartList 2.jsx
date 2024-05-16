import React from 'react';
import { useLocation } from 'react-router-dom';
import AddressInput from '../AddressInput/AddressInput';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../../styles/Cart.css'

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
    <>
      <Header />
      <div className="cart_list">
      <div className="cart_list">
      <h2>주문상품</h2>
      <div className="cart_item">
        <img src={product.art_img[0]} alt={product.title} className='cartItem_img' />
        <div className="cartItem_title">
          <h3 className='cartItem_title'>{product.title}</h3>
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
          
        </div>
      </div>
    </div>
        <AddressInput />
      </div>
      <Footer />
    </>
  );
};

export default CartList;
