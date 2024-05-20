import { Link } from 'react-router-dom';
import styles from '../../styles/Item.module.scss';

export default function Item({ item, type }) {
  const imagePath = type === 'bid' ? `${item.bid_art_img}` : `${item.art_img}`;

  const linkPath =
    type === 'bid' ? `/auction/${item.id}` : `/artDetail/${item.id}`;

  return (
    <div className={styles.card}>
      <Link to={linkPath} className={styles.link}>
        <div className={styles.imgSection}>
          <img
            className={styles.img}
            src={`${imagePath}`}
            alt={type === 'bid' ? item.bid_art_title : item.title}
          />
        </div>
        {type === 'bid' ? (
          <>
            <span className={styles.code}>No.{item.bid_code}</span>
            <div>{item.bid_art_title}</div>
            <div className={styles.artist}>{item.artist}</div>
            <div className="auction-price">{item.bid_estimate_price}</div>
            <div className="auction-button">
              <button>작품 보러 가기</button>
            </div>
          </>
        ) : (
          <>
            <span className={styles.code}>No.{item.code}</span>
            <div>{item.title}</div>
            <div className={styles.artist}>Artist: {item.artist_name}</div>
            <div>Price: {item.price}</div>
          </>
        )}
      </Link>
    </div>
  );
}
