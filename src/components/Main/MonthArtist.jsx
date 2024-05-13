import { Link } from 'react-router-dom';
export default function MonthArtist() {
  return (
    <div className="artMonth">
      <h2>Artist of the Month</h2>
      <div className="artistInfo">
        {' '}
        <div className="picture">
          <img
            className="artistPhoto"
            src="images/artist_img/artist1.webp"
            alt="artist"
          ></img>
        </div>
        <div className="artistComment">
          <h3>김세동</h3>
          <p>
            어린 시절부터 자연 속에서 보낸 시간이 작품에 큰 영감을 주었습니다.
            바닷가에서의 여름 휴가나 산속 등 자연 속에서의 경험이 그녀의
            예술적인 시야를 형성하는 데 중요한 역할을 했습니다. 특히 바닷가에서
            보낸 시간은 그녀의 작품에 자주 등장하며, 맑고 푸른 바다, 햇살 가득한
            해변을 그린 작품들은 그녀의 대표작 중 하나입니다. 작품들은 자연의
            아름다움과 함께 여유와 평화를 전해줍니다. 김지영은 자연을 통해
            인간의 내면을 담아내는 작업을 지속하며, 관람자들에게 그 안에서의
            안정과 휴식을 선사하고 있습니다. 그의 작품은 각자의 삶에서 벗어나
            자연과 소통하고자 하는 욕구를 자극하여 많은 이들에게 위안을 주고
            있습니다.
          </p>
        </div>
      </div>
      <ul className="artMonthList">
        <li>
          <Link to="/">
            <img src="images/art_img/img4.webp" alt="arts"></img>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="images/art_img/img5.webp" alt="arts"></img>
          </Link>
        </li>{' '}
        <li>
          <Link to="/">
            <img src="images/art_img/img6.webp" alt="arts"></img>
          </Link>
        </li>
      </ul>
    </div>
  );
}
