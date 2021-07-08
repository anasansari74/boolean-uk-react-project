import useStore from "../store";

export default function YourFavourites() {
  const favourites = useStore((store) => store.favourites);

  return (
    <div>
      <ul className="cards">
        {favourites.map((favMovie, index) => (
          <li key={index} className="card">
            <div className="card-header">
              <h1>{favMovie.title}</h1>
              <input type="checkbox" className="star-checkbox" checked="true" />
            </div>
            <img
              className=""
              width="200px"
              height="200px"
              src={favMovie.poster_image}
              alt={favMovie.title}
            />
            <p>
              <h3>Rated:</h3> {favMovie.rating}/10
            </p>
            <p>
              <h3>Description:</h3> {favMovie.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
