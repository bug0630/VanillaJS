import Carousel from '../components/Carousel';
import MonthArtist from '../components/Main/MonthArtist';
import BestArt from '../components/Main/BestArt';
import News from '../components/Main/News';
import '../styles/Main.scss';
import '../styles/BestArt.scss';
// import '../styles/Carousel.scss';

export default function Main() {
  const images = [
    require('../img/am-24-04-pc-3.jpg'),
    require('../img/am-24-05-pc.jpg'),
    require('../img/ai-24-05-pc.jpg'),
    require('../img/pc-mb-4.jpg'),
    require('../img/ai-24-05-pc.jpg'),
  ];
  const comments = ['이달의 작가', '경매', '테마', '전시회', ''];
  const pageLinks = ['/artist', '/auction', '', '', ''];
  return (
    <div className="mainLab">
      <div className="mainCarousel">
        {' '}
        <Carousel
          images={images}
          comments={comments}
          pageLinks={pageLinks}
        ></Carousel>
      </div>
      <MonthArtist images={images}></MonthArtist>
      <BestArt></BestArt>
      <News></News>
      <h2>this is Exhibition</h2>
    </div>
  );
}
