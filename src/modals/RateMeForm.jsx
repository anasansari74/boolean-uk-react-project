import styled from "styled-components";

import useStore from "../store";

import Button from "@material-ui/core/Button";

function RateMeForm({ className }) {
  const closeModal = useStore((store) => store.closeModal);
  const modalMovie = useStore((store) => store.modalMovie);
  const postRating = useStore((store) => store.postRating);
  console.log("rateMeFormData");

  function handleSubmit(event) {
    event.preventDefault();
    const formEl = event.target;

    const rateMeFormData = {
      modalMovie: modalMovie,
      yourRating: formEl.yourRating.value,
      reasonForRating: formEl.reasonForRating.value,
    };
    console.log(rateMeFormData);
  }

  return (
    <div className={`form-modal ${className}`}>
      <form onSubmit={handleSubmit}>
        <h1 className="modal-title">Enter your Rating for:</h1>
        <h2 className="movie-to-rate modal-movie-title">{modalMovie.title}</h2>
        <h2 className="modal-movie-rating">
          Movie Rated:
          <div className="movie-to-rate">{modalMovie.rating}</div>
          <div className="fraction">10</div>
        </h2>
        <img
          className="modal-movie-image"
          src={modalMovie.poster_image}
          alt="Movie image"
          height="250px"
        />
        <label htmlFor="yourRating" className="rating-label movie-to-rate">
          <strong>Choose a rating:</strong>
          <select className="drop-down" name="yourRating" id="yourRating">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </label>
        <div className="why-label">
          <label htmlFor="reasonForRating" className="movie-to-rate">
            <strong>
              Would you like to explain why you gave this movie this rating?
            </strong>
          </label>
          <textarea
            name="reasonForRating"
            id="reasonForRating"
            rows="5"
            cols="33"
          />
        </div>
        <Button
          type="submit"
          className="submit-rating"
          variant="contained"
          color="primary"
        >
          SAVE RATING
        </Button>
      </form>
    </div>
  );
}

export default styled(RateMeForm)`
  width: 35rem;
  height: auto;

  form {
    display: grid;
    grid-gap: 1rem;

    grid-template:
      "title image" auto
      "movie-title image" auto
      "movie-rating image" auto
      "rating-label rating-label" auto
      "why-label why-label" auto
      "button button" auto/
      auto auto;
  }

  .modal-title {
    grid-area: title;
    text-align: center;
  }

  .modal-movie-title {
    grid-area: movie-title;
  }

  .modal-movie-rating {
    grid-area: movie-rating;
  }

  .modal-movie-image {
    grid-area: image;
  }

  .rating-label {
    grid-area: rating-label;

    padding: 0.4rem;
  }

  .why-label {
    grid-area: why-label;

    padding: 0.4rem;

    display: grid;
  }

  .submit-rating {
    grid-area: button;
  }

  .movie-to-rate {
    color: crimson;
  }

  .fraction {
    border-top: 3px solid black;
    width: 2.2rem;
    margin: 0 auto;
  }

  input {
    border: solid 1px black;
  }

  .drop-down {
    width: 25%;
    justify-self: center;
  }

  .submit-rating {
    text-align: center;
    justify-self: center;

    padding: 0.5rem 1rem;
  }
`;
