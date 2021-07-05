import create from "zustand";

const useStore = create((set, get) => ({
  movies: [],
  fetchMovies: () => {
    fetch("http://localhost:4000/movies")
      .then((resp) => resp.json())
      .then((movie) => set({ movies: movie }));
  },
  getFilteredMoviesByGenres: (genreId) => {
    const foundGenre = movieGenre.find((movGen) => genreId === movGen.id);
    const foundMovieByGenre = movies.filter(
      (movie) => foundGenre.movieId === movie.id
    );
    return foundMovieByGenre;
  },
}));

export default useStore;
