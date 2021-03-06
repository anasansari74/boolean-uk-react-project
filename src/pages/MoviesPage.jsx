import "./../styles/App.css";

import MovieCards from "../components/MovieCards";
import useStore from "../store";

function MoviesPage() {
  const selectedGenre = useStore((store) => store.selectedGenre);
  const updateRatingOrder = useStore((store) => store.updateRatingOrder);

  return (
    <>
      <div className="drop-down-forms">
        <div>
          <label htmlFor="movie-genre">Choose a genre:</label>
          <select onChange={selectedGenre} name="genre" id="movie-genre">
            <option value="">--Please choose an option--</option>
            <option value="All">All</option>
            <option value="1">Action</option>
            <option value="2">Fantasy</option>
            <option value="3">Adventure</option>
            <option value="4">Thriller</option>
            <option value="5">Drama</option>
            <option value="6">Biography</option>
            <option value="7">Sci-Fi</option>
            <option value="8">Crime</option>
            <option value="9">Mystery</option>
          </select>
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <select
            onChange={(event) => {
              updateRatingOrder(event.target.value);
            }}
            name="rating"
            id="rating"
          >
            <option value="">--Please choose an option--</option>
            <option value="1">High to Low</option>
            <option value="2">Low to High</option>
          </select>
        </div>
      </div>
      <ul id="list-top" className="cards">
        <MovieCards />
      </ul>
    </>
  );
}

export default MoviesPage;
