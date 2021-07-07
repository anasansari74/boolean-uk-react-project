import useStore from "../store";

export default function YourFavourites() {
  const favourites = useStore((store) => store.favourites);

  if (!favourites)
    return [
      {
        title: "empty ",
        poster_image: "empty",
        rating: "empty",
        description: "empty",
      },
    ];

  return favourites.map((movie, index) => (
    <ul>
      <li key={index} className="card">
        <div className="card-header">
          <h1>{movie.title}</h1>
          {/* <input type="checkbox" className="star-checkbox" checked="true" /> */}
        </div>
        <img
          className=""
          width="200px"
          height="200px"
          src={movie.poster_image}
          alt={movie.title}
        />
        <p>Rated: {movie.rating}/10</p>
        <p>Description: {movie.description}</p>
      </li>
    </ul>
  ));
}
