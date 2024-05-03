export default function Carousel() {
  const moveLeft = () => {
    return {
      transform: `translateX(-100%)`,
    };
  };

  return (
    <div>
      <ul className="carousel">
        <li style={moveLeft()}>1</li>
        <li style={moveLeft()}>2</li>
        <li style={moveLeft()}>3</li>
        <li style={moveLeft()}>4</li>
      </ul>
    </div>
  );
}
