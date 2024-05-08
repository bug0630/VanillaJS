import React, { useState, useEffect } from 'react';
import jsonData from '../../data/artist.json';
import '../../styles/ArtistIntroduction.css';
import { FaMailBulk, FaInstagram } from 'react-icons/fa';

const ArtistIntroduction = () => {
  const [artistData, setArtistData] = useState(jsonData);

  return (
    <div className="artist-introduction">
      {artistData && (
        <div className="artist-info">
          <h1 className="artist">Artist</h1>
          <div className="profile">
            <img
              src={`${process.env.PUBLIC_URL}/images/artist_img/${artistData[0].profile_img}`}
              alt="Artist Profile"
              style={{ width: '300px', height: '350px', borderRadius: '15px' }}
            />
          </div>

          <div className="details">
            <h1 className="artist-name">{artistData[0].artist_name}</h1>
            <p>{artistData[0].birthdate}</p>
            <br />
            <p>{artistData[0].description}</p>
            <div className="details-right">
              <div className="Email">
                <FaMailBulk className="icon" />
                <p>{artistData[0].email}</p>
              </div>
              <div className="instagram-link">
                <FaInstagram className="icon" />
                <p>
                  <a
                    href={artistData[0].insta_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="gallery">
            <h1 className="artworks">Artworks</h1>
            <ul>
              <div className="gallery-container">
                <li>
                  <img
                    className="gallery-item gallery-item-1"
                    src={`${process.env.PUBLIC_URL}/images/art_img/img1.webp`}
                    alt="1"
                  />
                  <img
                    className="gallery-item gallery-item-2"
                    src={`${process.env.PUBLIC_URL}/images/art_img/img2.webp`}
                    alt="2"
                  />
                  <img
                    className="gallery-item gallery-item-3"
                    src={`${process.env.PUBLIC_URL}/images/art_img/img3.webp`}
                    alt="3"
                  />
                  <img
                    className="gallery-item gallery-item-4"
                    src={`${process.env.PUBLIC_URL}/images/art_img/img4.webp`}
                    alt="4"
                  />
                  <img
                    className="gallery-item gallery-item-5"
                    src={`${process.env.PUBLIC_URL}/images/art_img/img5.webp`}
                    alt="5"
                  />
                </li>
              </div>
            </ul>
            <div className="gallery-controls"></div>
            {/* <h2>Artworks</h2>
            <br />
            <ul>
            {artistData[0].art.map(artwork => (
              <li key={artwork.id}>
                <img src={`/images/art_img/${artwork.art_img}`} alt={artwork.title} />
                <p>{artwork.title}</p>
              </li>
            ))}
            </ul> */}
          </div>
          <h1 className="critique">Critique</h1>
          <div className="cards">
            <div className="card-1">
              <img
                className="review-img-1"
                src={`${process.env.PUBLIC_URL}/images/art_img/img15.webp`}
                alt="15"
              />
              <div class="card-body">
                <h5 class="card-title">Art title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Instagram
                </a>
              </div>
            </div>

            <div className="card-2">
              <img
                className="review-img-2"
                src={`${process.env.PUBLIC_URL}/images/art_img/img14.webp`}
                alt="14"
              />
              <div class="card-body">
                <h5 class="card-title">Art title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Instagram
                </a>
              </div>
            </div>

            <div className="card-3">
              <img
                className="review-img-3"
                src={`${process.env.PUBLIC_URL}/images/art_img/img13.webp`}
                alt="13"
              />
              <div class="card-body">
                <h5 class="card-title">Art title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Instagram
                </a>
              </div>
            </div>
            <div className="card-4">
              <img
                className="review-img-4"
                src={`${process.env.PUBLIC_URL}/images/art_img/img12.webp`}
                alt="12"
              />
              <div class="card-body">
                <h5 class="card-title">Art title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Instagram
                </a>
              </div>
            </div>
            <div className="card-5">
              <img
                className="review-img-5"
                src={`${process.env.PUBLIC_URL}/images/art_img/img11.webp`}
                alt="11"
              />
              <div class="card-body">
                <h5 class="card-title">Art title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtistIntroduction;
