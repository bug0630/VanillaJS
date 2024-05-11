import React, { useState, useEffect } from 'react';
import '../styles/auction.css';
// import './Bidding.jsx';
// import BiddingForm from './Bidding';
const AuctionPage = () => {
  const [artwork, setArtwork] = useState({
    title: 'Swedish street view',
    artist: 'Elvin Larsson',
    description: 'Elvin Larsson is known for his representational street view artworks',
    // size: 'Medium',
    // medium: 'Oil on Canvas',
    estimatedPrice: 5000, 
    startingBid: 2500, 
    auctionEndTime: new Date().getTime() + (7 * 24 * 60 * 60 * 1000) 
  });

  const formatAuctionEndTime = () => {
    const endDate = new Date(artwork.auctionEndTime);
    return endDate.toLocaleString();
  };

  return (
    <div className="auction-page">
      <h2>{artwork.title}</h2> 
      <div className="artwork-container">  
           
        <img className="artwork-image" src="https://media.mutualart.com/Images/2020_06/14/09/094726816/bb707499-9640-41bb-b511-848015876fb2.Jpeg?w=768" alt="Artwork" />
       
      </div>
      <div className="artwork-info">
        <div className="artwork-details">
          <p>Artist: {artwork.artist}</p>
          <p>Description: {artwork.description}</p>
          {/* <p>Size: {artwork.size}</p>
          <p>Medium: {artwork.medium}</p> */}
          <p>Estimated Price: ${artwork.estimatedPrice}</p>
          <p>Starting Bid: ${artwork.startingBid}</p>
          <p>Auction End Time: {formatAuctionEndTime()}</p>
        </div>
      </div>
      <div className="buttons-container">
          <button className="bid-button">Place your bid</button>
          <button className="watchlist-button">Add to Watchlist</button>
        </div>
    </div>
  );
};

export default AuctionPage;
