import React, { useState, useEffect } from 'react';
import jsonData from '../../data/artist.json'
import '../../styles/ArtistIntroduction.css'
import { FaMailBulk, FaInstagram } from "react-icons/fa";


const ArtistIntroduction = () => {
  const [artistData, setArtistData] = useState(jsonData);

  return (
    <div className='artist-introduction'>
      {artistData && (
        <div className='artist-info'>
          <div className='profile'>
          <img src={`${process.env.PUBLIC_URL}/images/artist_img/${artistData[0].profile_img}`} alt="Artist Profile" 
          style={{ width: '300px', height: '350px', borderRadius: '15px'}}/>
          </div>

          <div className='details'>
            <h1 className='artist-name'>{artistData[0].artist_name}</h1>
            <p>{artistData[0].birthdate}</p>
            <br />
            <p>{artistData[0].description}</p>
            <div className='details-right'>
              <div className='Email'>
                <FaMailBulk className="icon" />
                <p>: {artistData[0].email}</p></div>
              <div className='instagram-link'>
                <FaInstagram className="icon" />
                <p>: <a href={artistData[0].insta_link} 
                target="_blank" rel="noopener noreferrer">
                  {artistData[0].artist_name}</a></p>
              </div>
            </div>
          </div>
          <div className='artworks'>
            <h2>Artworks</h2>
            <br />
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
