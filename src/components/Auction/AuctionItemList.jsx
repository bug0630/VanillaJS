import Item from '../common/Item';
import styled from '../../styles/AuctionItemList.module.scss';

function AuctionItemList({ data }) {
  return (
    <div className={styled.cardList}>
      {data.slice(0, 3).map((item) => (
        <Item key={item.id} item={item} type="bid" />
      ))}
    </div>
  );
}

export default AuctionItemList;
