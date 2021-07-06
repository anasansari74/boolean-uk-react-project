import { useEffect } from "react";

import useStore from "../store";

function MovieCards() {
  const genre = useStore((store) => store.genre);
  const fetchMovies = useStore((store) => store.fetchMovies);
  const fetchMoviesGenres = useStore((store) => store.fetchMoviesGenres);
  const getFilteredMoviesByGenres = useStore(
    (store) => store.getFilteredMoviesByGenres
  );
  useEffect(() => {
    fetchMovies();
    fetchMoviesGenres();
  }, [fetchMovies, fetchMoviesGenres]);

  return getFilteredMoviesByGenres(genre).map((movie) => (
    <li className="card">
      <div className="card-header">
        <h1>{movie.title}</h1>
        <input type="checkbox" className="star-checkbox" checked="true" />
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
      <button>Rate Me!</button>
    </li>
  ));
}
export default MovieCards;
