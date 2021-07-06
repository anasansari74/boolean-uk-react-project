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
  moviesGenres: [
    {
      id: 1,
      movieId: 1,
      genreId: 4,
    },
  ],
  fetchMovies: () => {
    fetch("http://localhost:3000/moviesGenres")
      .then((resp) => resp.json())
      .then((movieGenre) => set({ moviesGenres: movieGenre }));
  },
  selectedGenreId: "",
  foundMoviesByGenreId: [],
  // getFilteredMoviesByGenres: (genreId) => {
  //   const foundGenre = moviesGenres.find(
  //     (movieGenre) => genreId === movieGenre.id
  //   );
  //   const foundMoviesByGenre = movies.filter(
  //     (movie) => foundGenre.movieId === movie.id
  //   );
  //   // return foundMoviesByGenre;
  //   set({ getFilteredMoviesByGenres: foundMoviesByGenre });
  // },
}));

export default useStore;
