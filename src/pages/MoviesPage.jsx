import "./../styles/App.css";

import MovieCards from "../components/MovieCards";

function MoviesPage() {
  return (
    <>
      <div class="drop-down-forms">
        <form acion="submit" method="get">
          <label for="movie-genre">Choose a genre:</label>
          <select name="genre" id="movie-genre">
            <option value="">All</option>
            <option value="action">Action</option>
            <option value="fantasy">Fantasy</option>
            <option value="adventure">Adventure</option>
            <option value="thriller">Thriller</option>
            <option value="drama">Drama</option>
            <option value="biography">Biography</option>
            <option value="Sci-fi">Sci-Fi</option>
            <option value="crime">Crime</option>
            <option value="mystery">Mystery</option>
          </select>
        </form>
        <form action="submit" method="get">
          <label for="rating">Rating:</label>
          <select name="rating" id="rating">
            <option value="">--Please choose an option--</option>
            <option value="dog">High to Low</option>
            <option value="cat">Low to High</option>
          </select>
        </form>
      </div>
      <ul className="cards">
        <MovieCards />
        {/* <li className="card">
          <div className="card-header">
            <h1>The Imitation Game</h1>
            <input type="checkbox" className="star-checkbox" checked="false" />
          </div>
          <img
            className=""
            width="200px"
            height="200px"
            src="https://images-na.ssl-images-amazon.com/images/M/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_UX182_CR0,0,182,268_AL_.jpg"
            alt="movie-img"
          />
          <p>Rated: 4.5/5</p>
          <p>Description: yahoo!</p>
          <button>Rate Me!</button>
        </li> */}
      </ul>
    </>
  );
}

export default MoviesPage;
