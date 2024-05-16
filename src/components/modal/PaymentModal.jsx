// PaymentModal.js
import React, { useState } from 'react';
import '../../styles/PaymentModal.css';

const PaymentModal = ({ isOpen, onClose }) => {
  const [cartInfo, setCartInfo] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleCartInfoChange = (event) => {
    setCartInfo(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handlePayment = () => {
    alert('결제가 완료되었습니다.');
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>결제 정보 입력</h2>
        <div className="modal-field">
          <label>카트 정보:</label>
          <input type="text" value={cartInfo} onChange={handleCartInfoChange} />
        </div>
        <div className="modal-field">
          <label>카드 번호:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
        </div>
        <div className="modal-field">
          <label>CVV:</label>
          <input type="text" value={cvv} onChange={handleCvvChange} />
        </div>
        <div className="modal-field">
          <label>유효기간:</label>
          <input
            type="text"
            value={expiryDate}
            onChange={handleExpiryDateChange}
          />
        </div>
        <button className="modal-button" onClick={handlePayment}>
          결제하기
        </button>
        <button className="modal-button close-button" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
