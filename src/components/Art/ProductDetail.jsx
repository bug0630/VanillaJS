import React, { useState, useEffect } from "react";
import '../../styles/ArtDetail.css'
import productsData from "../../data/art.json";
import { useParams } from "react-router-dom";

const ProductDetail = (props) => {
  const { artistId } = useParams();
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([])
  const [activeImg, setActiveImage] = useState('');

  useEffect(() => {
    const productData = productsData.find(product => product.id === parseInt(artistId));
    setProduct(productData);
    setImages(productData.art_img)
    setActiveImage(productData.art_img[0])
  }, [artistId]);

  
  return (
    <div className="product_detail">
      <div className="product_img">
        <img src={activeImg} alt="" className="product_main_img" />
        <div className="product_art_img">
          <img src={images[0]} alt="" className="art_detail_img" onClick={() => setActiveImage(images[0])} />
          <img src={images[1]} alt="" className="art_detail_img" onClick={() => setActiveImage(images[1])} />
          <img src={images[2]} alt="" className="art_detail_img" onClick={() => setActiveImage(images[2])} />
          <img src={images[3]} alt="" className="art_detail_img" onClick={() => setActiveImage(images[3])} />
        </div>
      </div>

      <div className="product_about">
        <h1 className="product_name">{product && product.title}</h1>

        <div className="infoArea">

          <div className="product_artist_name">
            <div>작가명</div>
            <div>{product && product.artist_name}</div>
          </div>

          <div className="published_year">
            <div>제작년도</div>
            <div>{product && product.published_year}</div>
          </div>

          <div className="art_frame">
            <div>액자</div>
            <div>{product && product.frame}</div>
          </div>

          <div>
            <div>작품 코드</div>
            <div>{product && product.code}</div>
          </div>

          <div className="material">
            <div>재료</div>
            <div>{product && product.material}</div>
          </div>

          <div className="product_size">
            <div>호수</div>
            <div>{product && product.size}</div>
          </div>

          <div className="product_price">
            <div>가격</div>
            <span id="span_product_price_text">{product && product.price}</span>
          </div>
          
          <p className="product_description">{product && product.description}</p>
        </div>
        
        <div className="product_btn">
          <button className="product_cart">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
export default ProductDetail;
