import { useEffect } from "react";

import useStore from "../store";

function MovieCards() {
  const genre = useStore((store) => store.genre);
  const fetchMovies = useStore((store) => store.fetchMovies);
  const fetchMoviesGenres = useStore((store) => store.fetchMoviesGenres);
  const getFilteredMoviesByGenres = useStore(
    (store) => store.getFilteredMoviesByGenres
  );
  // const ratingOrder = useStore((store) => store.ratingOrder);
  // const getRatingOrder = useStore((store) => store.getRatingOrder);
  const addToFavourites = useStore((store) => store.addToFavourites);

  useEffect(() => {
    fetchMovies();
    fetchMoviesGenres();
  }, [fetchMovies, fetchMoviesGenres]);

  return getFilteredMoviesByGenres(genre).map((movie, index) => (
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
      <div>
        <button style={{ padding: "10px" }}>Rate Me!</button>
        <button
          style={{ padding: "10px" }}
          onClick={() => {
            addToFavourites(movie.id);
          }}
        >
          Add to Favourites
        </button>
      </div>
    </li>
  ));
}
export default MovieCards;
