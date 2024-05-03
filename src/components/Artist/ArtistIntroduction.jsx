import React, { useState, useEffect } from 'react';
import jsonData from '../../data/artist.json'
import '../../styles/ArtistIntroduction.css'


const ArtistIntroduction = () => {
  const [artistData, setArtistData] = useState(jsonData);

  return (
    <div className='artist-introduction'>
      {artistData && (
        <div className='artist-info'>
          <div className='profile'>
          <img src={`${process.env.PUBLIC_URL}/images/artist_img/${artistData[0].profile_img}`} alt="Artist Profile" 
          style={{ width: '180px', height: '200px'}}/>
          </div>

          <div className='details'>
            <h1>{artistData[0].artist_name}</h1>
            <p>Birthdate: {artistData[0].birthdate}</p>
            <p>{artistData[0].description}</p>
            <p>Email: {artistData[0].email}</p>
            <p>Instagram: <a href={artistData[0].insta_link} target="_blank" rel="noopener noreferrer">{artistData[0].artist_name}</a></p>
          </div>
          <div className='artworks'>
            <h2>Artworks</h2>
            <ul>
            {artistData[0].art.map(artwork => (
              <li key={artwork.id}>
                <img src={`/images/art_img/${artwork.art_img}`} alt={artwork.title} />
                <p>{artwork.title}</p>
              </li>
            ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArtistIntroduction;
