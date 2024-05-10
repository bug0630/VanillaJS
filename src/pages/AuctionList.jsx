import AuctionCountdown from '../components/Auction/AuctionCountdown';
import AuctionItemList from '../components/Auction/AuctionItemList';
import auctionData from '../data/auction.json';
import Header from '../components/header/Header';

export default function AuctionList() {
  const today = new Date();
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const formattedDate = `${months[today.getMonth()]} ${today.getDate()}`;
  return (
    <div>
      <Header />
      <h2>today's auction</h2>
      <span>{formattedDate}(10AM)</span>
      <span> Open</span>
      <AuctionCountdown />
      <div>오늘의 특별한 작품들을 만나보세요.</div>
      <AuctionItemList data={auctionData} type="bid" />
      <button>Place your bid</button>
    </div>
  );
}
