import Item from '../common/Item';

function AuctionItemList({ data }) {
  return (
    <div>
      {data.slice(0, 3).map((item) => (
        <Item key={item.id} item={item} type="bid" />
      ))}
    </div>
  );
}

export default AuctionItemList;
