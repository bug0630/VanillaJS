import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

const AddressSearch = () => {
  const [address, setAddress] = useState('');
  const [zoneCode, setZoneCode] = useState('');

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setAddress(fullAddress);
    setZoneCode(data.zonecode);
  };

  return (
    <div>
      <h2>배송주소 입력</h2>
      <DaumPostcode onComplete={handleComplete} />
      {address && (
        <div>
          <p>
            <strong>기준주소:</strong> {address}
          </p>
          <p>
            <strong>우편번호:</strong> {zoneCode}
          </p>
        </div>
      )}
    </div>
  );
};

export default AddressSearch;
