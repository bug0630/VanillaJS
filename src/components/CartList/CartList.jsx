import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/Cart.css';

import AddressInput from '../AddressInput/AddressInput';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../../styles/Cartlist.css';
import PaymentModal from '../modal/PaymentModal';
const CartList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { state } = location;
  const product = state && state.product;
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  if (!product) {
    return (
      <div className="cart_list">
        <h2>구매하기</h2>
        <p>No items in the cart.</p>
      </div>
    );
  }

  const handlePaymentButtonClick = () => {
    setIsPaymentModalOpen(true);
  };

  const handleClosePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  return (
    <>
      <Header />
      <div className="cart_list">
        <h2 className="CartTitle">구매하기</h2>
        <div className="cart_item">
          <img src={product.art_img[0]} alt={product.title} />
          <div className="Cartinfo">
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
            <AddressInput />
            <PaymentModal
              isOpen={isPaymentModalOpen}
              onClose={handleClosePaymentModal}
            />
            <button
              className="payment-button"
              onClick={handlePaymentButtonClick}
            >
              결제 하기
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartList;
