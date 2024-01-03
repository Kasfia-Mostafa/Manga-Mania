import "../../../Component/Styles/Manga.css";

const Manga = ({ manga }) => {
  const { mangaName, image, plot } = manga || [];
  console.log(manga);

  return (
    <div>
      <div className="container">
        <div className="cta">
          <img src={image} alt="" />
          <div className="text">
            <h2>{mangaName}</h2>
            <p>{plot}</p>
            <button>See More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manga;
