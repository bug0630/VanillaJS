import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import '../styles/auction.css';

const AuctionPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showBidSubmittedModal, setShowBidSubmittedModal] = useState(false);
  const [bidDetails, setBidDetails] = useState({
    amount: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleCloseBidSubmittedModal = () => setShowBidSubmittedModal(false);
  const handleShowBidSubmittedModal = () => setShowBidSubmittedModal(true);

  const handleBidSubmit = () => {
    handleCloseModal(); // Close "Place Your Bid" modal
    handleShowBidSubmittedModal(); // Show "Your bid submitted" modal
    // You can perform additional actions here, such as sending bid details to the server
  };

  const artwork = {
    title: 'Swedish street view',
    artist: 'Elvin Larsson',
    description: 'Elvin Larsson is known for his representational street view artworks',
    estimatedPrice: 5000,
    startingBid: 2500,
    auctionEndTime: new Date().getTime() + (7 * 24 * 60 * 60 * 1000)
  };

  const [auctionEndTime, setAuctionEndTime] = useState(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)); // Set initial auction end time
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime(auctionEndTime));

  // Calculate remaining time function
  function calculateRemainingTime(endTime) {
    const currentTime = new Date().getTime();
    const remaining = Math.max(0, endTime - currentTime); // Ensure remaining time is not negative
    return remaining;
  }

  // Update remaining time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime(auctionEndTime));
    }, 500);

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(timer);
  }, [auctionEndTime]);

  // Convert remaining milliseconds to human-readable format
  function formatRemainingTime(remaining) {
    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;

  }
  
  return (
    <div className="auction-page">
      {/*------ curtain effect-------- */}
      <div className="outer">
      <div className="tcell">
        <div className="curtain-wrapper">
          {/* <div className="curtain-ratio-keeper"> */}
            <div className="curtain">
              <div className="panel-left"></div>
              <div className="panel-right"></div>
            {/* </div> */}
            <div className="jacket" title="Play"></div>
          </div>
        </div>
      </div>
    </div>
      <div className="artwork-container">
        <img className="artwork-image" src="https://media.mutualart.com/Images/2020_06/14/09/094726816/bb707499-9640-41bb-b511-848015876fb2.Jpeg?w=768" alt="Artwork" />
      </div>
 <div className="artwork-info"> 
  <div className="artwork-details">
  <h2 className="artwork-title">{artwork.title}</h2>
    <h3 className="artist">Artist: {artwork.artist}</h3>
    <p className="description">Description: {artwork.description}</p>
    <div className="price-section">
      <p className="price-label">Estimated Price:</p>
      <p className="price-value">${artwork.estimatedPrice}</p>
    </div>
    <div className="bid-section">
      <p className="bid-label">Starting Bid:</p>
      <p className="bid-value">${artwork.startingBid}</p>
      
    </div>
    {/* <p className="auction-end">Auction End Time: {formatRemainingnEndTime(remainingTime)}</p> */}
    <div className="timer-container">
        <div className="timer-frame">
        <p className="remaining-time">Closing:{formatRemainingTime(remainingTime)}</p>
        </div>
      </div>
  </div>
</div>
      <div className="buttons-container">
        <button className="bid-button" onClick={handleShowModal}>Place your bid</button>
        <button className="watchlist-button">Add to Watchlist</button>
      </div>
    

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Place Your Bid</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="bidAmount" className="form-label">Bid Amount</label>
              <div className="input-group">
                <span className="input-group-text">$</span>
                <input type="text" className="form-control" id="bidAmount" value={bidDetails.amount} onChange={(e) => setBidDetails({...bidDetails, amount: e.target.value})} />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="bidderName" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="bidderName" value={bidDetails.name} onChange={(e) => setBidDetails({...bidDetails, name: e.target.value})} />
            </div>
            <div className="mb-3">
              <label htmlFor="bidderEmail" className="form-label">Your Email</label>
              <input type="email" className="form-control" id="bidderEmail" value={bidDetails.email} onChange={(e) => setBidDetails({...bidDetails, email: e.target.value})} />
            </div>
            <div className="mb-3">
              <label htmlFor="bidderPhone" className="form-label">Your Phone Number</label>
              <input type="tel" className="form-control" id="bidderPhone" value={bidDetails.phone} onChange={(e) => setBidDetails({...bidDetails, phone: e.target.value})} />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleBidSubmit}>
            Submit Bid
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showBidSubmittedModal} onHide={handleCloseBidSubmittedModal}>
  <Modal.Header closeButton>
    <Modal.Title>Bid Submitted</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div style={{ textAlign: 'center' }}>
      <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/successful-bid-3-613041.png" alt="Success Icon" style={{ width: '100px', marginBottom: '20px' }} />
      <h4>Congratulations!</h4>
      <p>Your bid has been successfully submitted.</p>
      <p>Thank you for participating in the auction.</p>
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="primary" onClick={handleCloseBidSubmittedModal}>
     닫기
    </Button>
  </Modal.Footer>
</Modal>

    </div>
  );
};

export default AuctionPage;
