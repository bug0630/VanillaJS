import React, { useState, useEffect } from "react";
import '../../styles/ArtDetail.css'
import productsData from "../../data/art.json";
import { FaMailBulk, FaInstagram } from 'react-icons/fa';
import { useParams } from "react-router-dom";

const ArtistInfo = (props) => {
  const { artistId } = useParams();
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([])
  const [activeImg, setActiveImage] = useState('');

  useEffect(() => {
    const productData = productsData.find(product => product.id === parseInt(artistId));
    setProduct(productData);
    setImages(productData.profile_img) // 변경된 부분
    setActiveImage(productData.profile_img[0]) // 변경된 부분
  }, [artistId]);

  
  return (
    <div className="product_detail">
     
        <img src={activeImg} alt="" className="artistInfo_img" />
          {/* 여기서 art_img를 profile_img로 변경 */}
          <img src={images[0]} alt="" className="profile_img" onClick={() => setActiveImage(images[0])} />
      <div>
      <div className="infoItem">
            <div className="infoValue">{product && product.artist_name}</div>
          </div>

          

          <div className='Email'>
            <p><FaMailBulk className="iconEmail" />{product && product.email}</p>
          </div>

          <div className='instagram-link'>
                    <p> <FaInstagram className="icon" />
                    <a
                    href={product && product.insta_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    >Instagram
                    </a>
                    </p>
                   </div>
      </div>

    </div>
  );
};

export default ArtistInfo;

