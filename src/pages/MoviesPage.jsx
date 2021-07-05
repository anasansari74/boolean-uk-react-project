import "./../styles/App.css";

import MovieCards from "../components/MovieCards";

function MoviesPage() {
  return (
    <>
      <div className="drop-down-forms">
        <form acion="submit" method="get">
          <label htmlFor="movie-genre">Choose a genre:</label>
          <select name="genre" id="movie-genre">
            <option value="">All</option>
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
        </form>
        <form action="submit" method="get">
          <label htmlFor="rating">Rating:</label>
          <select name="rating" id="rating">
            <option value="">--Please choose an option--</option>
            <option value="1">High to Low</option>
            <option value="2">Low to High</option>
          </select>
        </form>
      </div>
      <ul className="cards">
        <MovieCards />
      </ul>
    </>
  );
}

export default MoviesPage;
