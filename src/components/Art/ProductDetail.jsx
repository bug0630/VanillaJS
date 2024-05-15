import React, { useState, useEffect } from 'react';
import '../../styles/ArtDetail.css';
import productsData from '../../data/art.json';
import { useParams } from 'react-router-dom';

const ProductDetail = (props) => {
  const { artistId } = useParams();
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [activeImg, setActiveImage] = useState('');

  const [cart, setCart] = useState([]);
  console.log(cart);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  useEffect(() => {
    const productData = productsData.find(
      (product) => product.id === parseInt(artistId)
    );
    setProduct(productData);
    setImages(productData.art_img);
    setActiveImage(productData.art_img[0]);
  }, [artistId]);

  return (
    <div className="product_detail">
      <div className="product_img">
        <img src={activeImg} alt="" className="product_main_img" />
        <div className="product_art_img">
          <img
            src={images[0]}
            alt=""
            className="art_detail_img"
            onClick={() => setActiveImage(images[0])}
          />
          <img
            src={images[1]}
            alt=""
            className="art_detail_img"
            onClick={() => setActiveImage(images[1])}
          />
          <img
            src={images[2]}
            alt=""
            className="art_detail_img"
            onClick={() => setActiveImage(images[2])}
          />
          <img
            src={images[3]}
            alt=""
            className="art_detail_img"
            onClick={() => setActiveImage(images[3])}
          />
        </div>
      </div>

      <div className="product_about">
        <h1 className="product_name">{product && product.title}</h1>

        <div className="infoArea">
          <div className="infoItem">
            <div className="infoLabel">작가명</div>
            <div className="infoValue">{product && product.artist_name}</div>
          </div>

          <div className="infoItem">
            <div className="infoLabel">제작년도</div>
            <div className="infoValue">{product && product.published_year}</div>
          </div>

          <div className="infoItem">
            <div className="infoLabel">액자</div>
            <div className="infoValue">{product && product.frame}</div>
          </div>

          <div className="infoItem">
            <div className="infoLabel">작품 코드</div>
            <div className="infoValue">{product && product.code}</div>
          </div>

          <div className="infoItem">
            <div className="infoLabel">재료</div>
            <div className="infoValue">{product && product.material}</div>
          </div>

          <div className="infoItem">
            <div className="infoLabel">호수</div>
            <div className="infoValue">{product && product.size}</div>
          </div>

          <div className="infoItem">
            <div className="infoLabel">가격</div>
            <div className="infoValue">{product && product.price}</div>
          </div>
        </div>
        <div className="product_btn">
          <button className="product_cart" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
