// PaymentModal.js
import React, { useState } from 'react';
import '../../styles/PaymentModal.css';

const PaymentModal = ({ isOpen, onClose }) => {
  const [cartInfo, setCartInfo] = useState('');
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
        <div className="modal-field">
          <label>카트 정보:</label>
          <input type="text" value={cartInfo} onChange={handleCartInfoChange} />
        </div>
        <div className="modal-field1">
          <label>카드 번호:</label>
          <input
            type="num"
            className="cardnumber"
            maxLength={4}
            onChange={handleCardNumberChange}
          />
          <input
            type="num"
            className="cardnumber"
            maxLength={4}
            onChange={handleCardNumberChange}
          />
          <input
            type="num"
            className="cardnumber"
            maxLength={4}
            onChange={handleCardNumberChange}
          />
          <input
            type="num"
            className="cardnumber"
            maxLength={4}
            onChange={handleCardNumberChange}
          />
        </div>
        <div className="modal-field">
          <label>CVV:</label>
          <input
            type="num"
            maxLength={3}
            value={cvv}
            onChange={handleCvvChange}
          />
        </div>
        <div className="modal-field">
          <label>유효기간:</label>
          <input
            type="month"
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
