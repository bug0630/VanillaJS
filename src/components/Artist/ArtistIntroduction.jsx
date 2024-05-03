import React, { useState, useEffect } from 'react';
import jsonData from '../../data/artist.json'

const ArtistIntroduction = () => {
  const [artistData, setArtistData] = useState(jsonData);

  return (
    <div>
      {artistData && (
        <div>
          <h1>{artistData[0].artist_name}</h1>
          <p>{artistData[0].description}</p>
          <img src={artistData[0].profile_img} alt="Artist Profile" />
          <ul>
            {artistData[0].art.map(artwork => (
              <li key={artwork.id}>
                <img src={`/images/art_img/${artwork.art_img}`} alt={artwork.title} />
                <p>{artwork.title}</p>
              </li>
            ))}
          </ul>
          <p>Email: {artistData[0].email}</p>
          <p>Instagram: <a href={artistData[0].insta_link} target="_blank" rel="noopener noreferrer">{artistData[0].artist_name}</a></p>
        </div>
      )}
    </div>
  );
}

export default ArtistIntroduction;
