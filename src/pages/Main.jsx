import Carousel from '../components/Carousel';
import '../styles/Main.scss';

export default function Main() {
  const images = [
    require('../img/am-24-04-pc-3.jpg'),
    require('../img/am-24-05-pc.jpg'),
    require('../img/ai-24-05-pc.jpg'),
    require('../img/mona_lisa.webp'),
  ];
  const comments = ['이달의 작가', '특별초청', '테마', '전시회'];
  const pageLinks = ['/artist', '/auction', '', ''];
  return (
    <div className="mainLab">
      <Carousel
        images={images}
        comments={comments}
        pageLinks={pageLinks}
      ></Carousel>
      <h2>이 달의 작가</h2>
      <h2>Best Art</h2>
      <h2>this is News</h2>
      <h2>this is Exhibition</h2>
    </div>
  );
}
