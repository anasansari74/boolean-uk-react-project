import create from "zustand";

const useStore = create((set, get) => ({
  movies: [],
  fetchMovies: () => {
    fetch("http://localhost:3000/movies")
      .then((resp) => resp.json())
      .then((movie) => set({ movies: movie }));
  },
  genres: [],
  fetchGenres: () => {
    fetch("http://localhost:3000/genres")
      .then((resp) => resp.json())
      .then((genre) => set({ genres: genre }));
  },
  moviesGenres: [],
  fetchMoviesGenres: () => {
    fetch("http://localhost:3000/movies_genres")
      .then((resp) => resp.json())
      .then((movieGenre) => set({ moviesGenres: movieGenre }));
  },
  genre: "",
  selectedGenre: (event) => {
    set({ genre: event.target.value });
  },
  getFilteredMoviesByGenres: () => {
    const foundGenre = get().moviesGenres.filter(
      (movieGenre) => parseInt(get().genre) === movieGenre.genreId
    );
    if (get().genre === "") {
      return get().movies;
    } else {
      const filteredMovies = foundGenre.map((movie) => {
        let specificMovie = get().movies.find(
          (target) => target.id === movie.movieId
        );
        return specificMovie;
      });
    }
  },
}));

export default useStore;
