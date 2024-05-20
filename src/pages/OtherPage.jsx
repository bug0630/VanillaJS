// OtherPage.js (Receiving page)
import React from 'react';
import { useSelector } from 'react-redux';

const OtherPage = () => {
  // Access bidData from Redux store
  const bidData = useSelector(state => state.bidData);

  return (
    <div>
      <h2>Bid Details</h2>
      <p>Amount: {bidData.amount}</p>
      <p>Name: {bidData.name}</p>
      <p>Email: {bidData.email}</p>
      <p>Phone: {bidData.phone}</p>
    </div>
  );
};

export default OtherPage;
