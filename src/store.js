import create from "zustand";

const useStore = create((set, get) => ({
  movies: [],
  fetchMovies: () => {
    fetch("http://localhost:3000/movies")
      .then((resp) => resp.json())
      .then((movies) => set({ movies: movies }));
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
    if (get().genre === "All") {
      return get().movies.slice();
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

  //sort the array
  ////whether low to high
  sortLowToHigh: () => {
    return get()
      .getFilteredMoviesByGenres()
      .sort(function (a, b) {
        return a.rating - b.rating;
      });
  },
  ////or high to low
  sortHighToLow: () => {
    return get()
      .getFilteredMoviesByGenres()
      .sort(function (a, b) {
        return b.rating - a.rating;
      });
  },

  getSortedFilms: () => {
    if (get().ratingOrder === "") {
      return get().getFilteredMoviesByGenres();
    }
    if (get().ratingOrder === "1") {
      return get().sortHighToLow();
    }
    if (get().ratingOrder === "2") {
      return get().sortLowToHigh();
    }
  },

  ratingOrder: "",
  updateRatingOrder: (newRatingOrder) => {
    set({ ratingOrder: newRatingOrder });
  },

  favourites: [],
  addToFavourites: (movieId) => {
    const movieFound = get().movies.find((movie) => movie.id === movieId);
    const movieFoundInFav = get().favourites.find(
      (favBook) => favBook.id === movieId
    );
    if (movieFoundInFav === undefined) {
      set({ favourites: [...get().favourites, movieFound] });
    }
  },

  modal: "",
  setModal: (modal) => set({ modal }),

  modalMovie: null,
  setModalMovie: (movie) => set({ modalMovie: movie }),

  closeModal: () => set({ modal: "" }),

  getModalInfo: (modal, movie) => {
    get().setModal(modal);
    get().setModalMovie(movie);
  },

  scrollTop: () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  ratings: [],

  fetchRatings: () => {
    fetch("http://localhost:3000/ratings")
      .then((resp) => resp.json())
      .then((rating) => set({ ratings: rating }));
  },

  postRating: (target) => {
    fetch("http://localhost:3000/ratings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(target),
    })
      .then((resp) => resp.json())
      .then((rating) => set({ ratings: [...get().ratings, rating] }));
  },

  editRating: (target, id) => {
    fetch(`http://localhost:3000/ratings/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(target),
    })
      .then((resp) => resp.json())
      .then((updateRatingFromServer) =>
        set({
          ratings: get().ratings.map((target) => {
            if (target.id === updateRatingFromServer.id) {
              return updateRatingFromServer;
            } else return target;
          }),
        })
      );
  },

  deleteRating: (id) => {
    fetch(`http://localhost:3000/ratings/${id}`, {
      method: "DELETE",
    }).then(() =>
      set({
        ratings: get().ratings.filter((target) => target.id !== id),
      })
    );
  },
}));

export default useStore;
