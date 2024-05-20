import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import '../../styles/AddressInput.css';

const AddressSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [zoneCode, setZoneCode] = useState('');
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');

  const handleComplete = (data) => {
    setZoneCode(data.zonecode);
    setAddress(data.address);
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDetailAddressChange = (event) => {
    setDetailAddress(event.target.value);
  };

  return (
    <div className="address-search-container">
      <div className="PostCode">
        <div className="address-field">
          <label>우편번호:</label>
          <input type="text" value={zoneCode} readOnly />
        </div>
        <button className="search-button" onClick={handleClick}>
          우편번호 찾기
        </button>
      </div>

      {isOpen && (
        <div className="postcode-popup">
          <DaumPostcode
            onComplete={handleComplete}
            autoClose={false}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      )}
      <div className="address-info">
        <div className="address-field">
          <label>주소:</label>
          <input type="text" value={address} readOnly />
        </div>
        <div className="address-field">
          <label>상세 주소:</label>
          <input
            type="text"
            value={detailAddress}
            onChange={handleDetailAddressChange}
          />
        </div>
      </div>
    </div>
  );
};

export default AddressSearch;
