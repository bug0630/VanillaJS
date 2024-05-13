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
        </div>
      </div>

      <div className="product_about">
        <h1 className="product_name">{product && product.title}</h1>

        <div className="infoArea">
        
        </div>
        <p className="product_description">{product && product.description}</p>
        <div className="product_btn">
          <button className="product_cart">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
export default ProductDetail;
