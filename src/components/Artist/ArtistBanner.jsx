import '../../styles/Artist.scss';

const ArtistBanner = ({ h1Text }) => {
  return (
    <div className="heroEffects">
      <div className="bg">
        <div className="arrow bouncy">
          <svg height="25" width="50">
            <polygon
              points="0,0 25,10 50,0 25,25"
              fill="rgba(255,255,255,.5)"
              stroke-width="0"
              stroke="rgba(255,255,255,.3)"
            />
          </svg>
        </div>
        <div className="titleBanner centerV">
          <div>
            <div className="text">
              <h1>{h1Text}</h1>
              <p>There is no must in art because art is free</p>
            </div>
          </div>
        </div>
      </div>
      <div className="shade"></div>
    </div>
  );
};

export default ArtistBanner;
