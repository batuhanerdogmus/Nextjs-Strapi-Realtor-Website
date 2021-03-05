import photo from "../img/photo.jpg";

export const Description = () => {
  return (
    <div className="contact">
      <div className="img-container">
        <img src={photo} alt="photo" />
      </div>
      <div className="info">
        <h1>Meral EGEMEN</h1>
        <h2>Gayrimenkul Danışmanı</h2>
        <h3>Tel: +90 537 245 5007</h3>
        <h4>mail: meralegemen@realtyworld.com.tr</h4>
      </div>
    </div>
  );
};
