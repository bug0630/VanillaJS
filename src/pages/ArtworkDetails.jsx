import React from 'react';

const ArtworkDetails = ({ title, artist, description, estimatedPrice, startingBid, auctionEndTime }) => {
  return (
    <div className="artwork-details">
      <div className="artwork-info">
        <h2>{title}</h2>
        <p>Artist: {artist}</p>
        <p>Description: {description}</p>
        {/* <p>Size: {size}</p> */}
        {/* <p>Medium: {medium}</p> */}
        <p>Estimated Price: ${estimatedPrice}</p>
        <p>Starting Bid: ${startingBid}</p>
        <p>Auction Finish Time: {auctionEndTime && auctionEndTime.toLocaleString()}</p>
        <div className="buttons-container">
          <button className="bid-button">Place your bid</button>
          <button className="watchlist-button">Add to Watchlist</button>
        </div>
      </div>
      <div className="artwork-container">
        <img className="artwork-image" src="artwork.jpg" alt="Artwork" />
      </div>
    </div>
  );
};

export default ArtworkDetails;
