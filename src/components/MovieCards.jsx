import { useEffect } from "react";

import useStore from "../store";

import React from "react";
import Button from "@material-ui/core/Button";

function MovieCards() {
  const getModalInfo = useStore((store) => store.getModalInfo);

  const genre = useStore((store) => store.genre);
  const fetchMovies = useStore((store) => store.fetchMovies);
  const fetchMoviesGenres = useStore((store) => store.fetchMoviesGenres);
  const getFilteredMoviesByGenres = useStore(
    (store) => store.getFilteredMoviesByGenres
  );
  // const ratingOrder = useStore((store) => store.ratingOrder);
  // const getRatingOrder = useStore((store) => store.getRatingOrder);
  const addToFavourites = useStore((store) => store.addToFavourites);
  const scrollTop = useStore((store) => store.scrollTop);

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
      <p>
        <h3>Rated:</h3> {movie.rating}/10
      </p>
      <p>
        <h3>Description:</h3> {movie.description}
      </p>
      <div>
        <Button
          style={{ margin: "10px" }}
          variant="contained"
          color="secondary"
          onClick={() => {
            getModalInfo("rateMeForm", `${movie.title}`, `${movie.rating}`);
            scrollTop();
          }}
        >
          Rate Me!
        </Button>
        <Button
          style={{ margin: "10px" }}
          onClick={() => {
            addToFavourites(movie.id);
          }}
          variant="contained"
        >
          Add to Favourites
        </Button>
      </div>
    </li>
  ));
}
export default MovieCards;
