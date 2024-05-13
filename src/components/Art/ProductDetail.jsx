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
          <table>
            <tbody>
              <tr className="product_artist_name">
                <th className="detail_text">작가명</th>
                <th className="detail_info">{product && product.artist_name}</th>
              </tr>
              <tr className="published_year">
                 <th className="detail_text">제작년도</th>
                 <th className="detail_info">{product && product.published_year}</th>
              </tr>
              <tr className="art_frame">
                 <th className="detail_text">액자</th>
                 <th className="detail_info">{product && product.frame}</th>
              </tr>
              <tr className="product_code">
                 <th className="detail_text">작품 코드</th>
                 <th className="detail_info">{product && product.code}</th>
              </tr>
              <tr className="material">
                 <th className="detail_text">재료</th>
                 <th className="detail_info">{product && product.material}</th>
              </tr>
              <tr className="product_size">
                 <th className="detail_text">호수</th>
                 <th className="detail_info">{product && product.size}</th>
              </tr>
              <tr className="product_description">
                 <th className="detail_text">작품 소개</th>
                 <th className="detail_info">{product && product.description}</th>
              </tr>
              <tr className="product_price">
                 <th className="detail_text">가격</th>
                 <td>
                  <span id="span_product_price_text">{product && product.price}</span>
                 </td>
              </tr>
          </tbody>
          </table>
        </div>
        <div className="product_btn">
          <button className="product_cart">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
export default ProductDetail;
