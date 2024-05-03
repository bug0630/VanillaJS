import Carousel from '../components/Carousel';
import '../styles/Main.scss';

export default function Main() {
  const images = [
    require('../img/news_4.jpg'),
    require('../img/news_5.jpg'),
    require('../img/news_6.jpg'),
  ];
  return (
    <div className="mainLab">
      <Carousel images={images}></Carousel>
      <h2>this is Artist</h2>
      <h2>Best Art</h2>
      <h2>this is News</h2>
      <h2>this is Exhibition</h2>
    </div>
  );
}
