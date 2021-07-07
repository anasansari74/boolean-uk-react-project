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
  getFilteredMoviesByGenres: (target) => {
    const foundGenre = get().moviesGenres.filter(
      (movieGenre) => parseInt(target) === movieGenre.genreId
    );
    if (target === "") {
      return get().movies;
    } else {
      const filteredMovies = foundGenre.map((movie) => {
        let specificMovie = get().movies.find(
          (target) => target.id === movie.movieId
        );
        return specificMovie;
      });
      return filteredMovies;
    }
  },
  // ratingOrder: "",
  // selectedRatingOrder: (event) => {
  //   set({ ratingOrder: event.target.value });
  // },
  // getRatingOrder: (target) => {
  //   if (parseInt(get().ratingOrder) === 2) {
  //     const lowToHigh = get().movies.rating.sort();
  //     return lowToHigh;
  //   } else return null;
  // },
  favourites: [],
  addToFavourites: (movieId) => {
    const movieFound = get().movies.find((movie) => movie.id === movieId);
    get().favourites.push(movieFound);
  },
}));

export default useStore;
