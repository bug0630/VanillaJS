import styles from '../../styles/Item.module.scss';

export default function Item({ item, type }) {
  const imagePath =
    type === 'bid'
      ? `auction_img/${item.bid_art_img}`
      : `art_img/${item.art_img}`;
  return (
    <div className={styles.card}>
      <div className={styles.imgSection}>
        <img
          className={styles.img}
          src={`${process.env.PUBLIC_URL}/images/${imagePath}`}
          alt={type === 'bid' ? item.bid_art_title : item.title}
        />
      </div>
      {type === 'bid' ? (
        <>
          <span className={styles.code}>No.{item.bid_code}</span>
          <div>{item.bid_art_title}</div>
          <div className={styles.artist}>{item.artist}</div>
          <div>Starting Price: {item.bid_starting_price}</div>
        </>
      ) : (
        <>
          <span className={styles.code}>No.{item.code}</span>
          <div>{item.title}</div>
          <div className={styles.artist}>Artist: {item.artist_name}</div>
          <div>Price: {item.price}</div>
        </>
      )}
    </div>
  );
}
