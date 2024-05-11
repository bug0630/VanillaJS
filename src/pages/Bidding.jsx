import React from 'react';
import { connect } from 'react-redux';
import { updateBidAmount, updateBidderName, submitBid } from './actions';

const BiddingForm = ({ bidAmount, bidderName, updateBidAmount, updateBidderName, submitBid }) => {

  const handleBidAmountChange = (e) => {
    updateBidAmount(e.target.value);
  };

  const handleBidderNameChange = (e) => {
    updateBidderName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitBid();
    console.log(`Bidder Name: ${bidderName}, Bid Amount: ${bidAmount}`);
    // Reset form fields after submission (You can dispatch actions for this as well)
  };

  return (
    <div>
      <h2>Bidding Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="bidderName">Your Name:</label>
          <input
            type="text"
            id="bidderName"
            value={bidderName}
            onChange={handleBidderNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="bidAmount">Bid Amount:</label>
          <input
            type="number"
            id="bidAmount"
            value={bidAmount}
            onChange={handleBidAmountChange}
            required
          />
        </div>
        <button type="submit">Submit Bid</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  bidAmount: state.bidAmount,
  bidderName: state.bidderName,
});

const mapDispatchToProps = {
  updateBidAmount,
  updateBidderName,
  submitBid,
};

export default connect(mapStateToProps, mapDispatchToProps)(BiddingForm);
