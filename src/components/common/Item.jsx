export default function Item({ item, type }) {
  const imagePath =
    type === 'bid'
      ? `auction_img/${item.bid_art_img}`
      : `art_img/${item.art_img}`;
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/images/${imagePath}`}
        alt={type === 'bid' ? item.bid_art_title : item.title}
      />
      <div>{type === 'bid' ? item.bid_art_title : item.title}</div>
      {type === 'bid' ? (
        <>
          <div>Starting Price: {item.bid_starting_price}</div>
          <div>Bid Code: {item.bid_code}</div>
        </>
      ) : (
        <>
          <div>Price: {item.price}</div>
          <div>Code: {item.code}</div>
          <div>Artist: {item.artist_name}</div>
        </>
      )}
    </div>
  );
}
