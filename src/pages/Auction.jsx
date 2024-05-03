import React, { useState, useEffect } from 'react';
import ArtworkDetails from './ArtworkDetails'; 
import '../styles/auction.css'

const AuctionPage = () => {
  // State variable for artwork details
  const [artwork, setArtwork] = useState({
    title: 'Elvin Larsson',
    artist: 'Artist Name',
    // description: 'Artwork Description',
    // size: 'Medium',
    medium: 'Oil on Canvas',
    estimatedPrice: 500, // Mock data for estimated price
    startingBid: 250, // Mock data for starting bid
    auctionEndTime: new Date().getTime() + (7 * 24 * 60 * 60 * 1000) // Auction lasts for 7 days
  });

  // Function to format auction end time
  const formatAuctionEndTime = () => {
    const endDate = new Date(artwork.auctionEndTime);
    return endDate.toLocaleString();
  };

  return (
    <div className="auction-page">
      <div className="artwork-container">
        <h1 className="artwork-title">{artwork.title}</h1>
        <img className="artwork-image" src="./elvin_larsson.png" alt="Artwork" />
      </div>
      <div className="artwork-info">
        <ArtworkDetails
          artist={artwork.artist}
          description={artwork.description}
          // size={artwork.size}
          // medium={artwork.medium}
          estimatedPrice={artwork.estimatedPrice}
          startingBid={artwork.startingBid}
          auctionEndTime={formatAuctionEndTime()} // Format auction end time
          
        />
      </div>
    </div>
  );
};

export default AuctionPage;
