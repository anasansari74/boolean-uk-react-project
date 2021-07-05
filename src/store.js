import create from "zustand";

const useStore = create((set, get) => ({
  movies: [],
  fetchMovies: () => {
    fetch("http://localhost:3000/movies")
      .then((resp) => resp.json())
      .then((movie) => set({ movies: movie }));
  },
}));

export default useStore;
