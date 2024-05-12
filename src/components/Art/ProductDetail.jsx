import React, { useState, useEffect } from "react";
import '../../styles/ArtDetail.css'
import productsData from "../../data/art.json";

const ProductDetail = ({ id }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productData = productsData.find(product => product.id === parseInt(id));
    setProduct(productData);
  }, [id]);

  const [images] = useState({
    img1: "https://images.joseartgallery.com/100736/what-kind-of-art-is-popular-right-now.jpg",
    img2: "https://img.freepik.com/premium-photo/woman-s-face-is-made-up-geometric-shapes-cyberpunk-colorful-fractalism-cubism_834088-1.jpg",
    img3: "https://img.freepik.com/premium-photo/colorful-face-collage-illustration-with-abstract-shapes-patterns_124507-114531.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699920000&semt=ais",
    img4: "https://img.freepik.com/premium-photo/colorful-face-collage-illustration-with-abstract-shapes-patterns_124507-114529.jpg"
  })

  const [activeImg, setActiveImage] = useState(images.img1);
  const [amount, setAmount] = useState(1);

  return (
    <div className="product_detail">
      <div className="product_img">
        <img src={activeImg} alt="" className="product_main_img" />
        <div className="product_art_img">
          <img src={images.img1} alt="" className="art_detail_img" onClick={() => setActiveImage(images.img1)} />
          <img src={images.img2} alt="" className="art_detail_img" onClick={() => setActiveImage(images.img2)} />
          <img src={images.img3} alt="" className="art_detail_img" onClick={() => setActiveImage(images.img3)} />
          <img src={images.img4} alt="" className="art_detail_img" onClick={() => setActiveImage(images.img4)} />
        </div>
      </div>

      <div className="product_about">
        <h1 className="product_name">{product && product.product_name}</h1>

        <div className="infoArea">
          <tr className="product_artist_name">
            <th>작가명</th>
            <th>{product && product.artist_name}</th>
          </tr>
          <tr className="published_year">
            <th>제작년도</th>
            <th>{product && product.published_year}</th>
          </tr>
          <tr className="art_frame">
            <th>액자</th>
            <th>{product && product.art_frame}</th>
          </tr>
          <tr className="product_code">
            <th>작품 코드</th>
            <th>{product && product.product_code}</th>
          </tr>
          <tr className="material">
            <th>재료</th>
            <th>{product && product.material}</th>
          </tr>
          <tr className="product_size">
            <th>호수</th>
            <th>{product && product.product_size}</th>
          </tr>
          <tr className="product_price">
            <th>가격</th>
            <td>
              <span id="span_product_price_text">{product && product.product_price}</span>
            </td>
          </tr>
          <p className="product_description">{product && product.product_description}</p>
        </div>
        
        <div className="product_btn">
          <div className="product_count">
            <button className="btn_down" onClick={() => setAmount(prev => prev - 1)}>-</button>
            <span className="count_num">{amount}</span>
            <button className="btn_up" onClick={() => setAmount(prev => prev + 1)}>+</button>
          </div>
          <button className="product_cart">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail;