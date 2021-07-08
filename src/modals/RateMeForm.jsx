import styled from "styled-components";

import useStore from "../store";

function RateMeForm({ className }) {
  //   const fetchUsers = useStore(store => store.fetchUsers)
  const closeModal = useStore((store) => store.closeModal);
  const modalMovieName = useStore((store) => store.modalMovieName);
  const modalMovieRating = useStore((store) => store.modalMovieRating);
  const postRating = useStore((store) => store.postRating);

  function handleSubmit(event) {
    event.preventDefault();
    const formEl = event.target;

    const rateMeFormData = {
      movieName: modalMovieName,
      movieRating: modalMovieRating,
      yourRating: formEl.yourRating.value,
      reasonForRating: formEl.reasonForRating.value,
    };
    //almost last step: create a fetch function to POST
    postRating(rateMeFormData);
  }

  return (
    <div className={`form-modal ${className}`}>
      <form onSubmit={handleSubmit}>
        <h1 className="modal-title">Enter your Rating for:</h1>
        <h2 className="movie-to-rate">{modalMovieName}</h2>
        <h2 className="movie-to-rate">Movie Rating: {modalMovieRating}</h2>
        <label htmlFor="yourRating">Choose a rating:</label>
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
        <label htmlFor="reasonForRating">
          Would you like to explain why you gave this movie this rating?
        </label>
        <textarea
          name="reasonForRating"
          id="reasonForRating"
          rows="5"
          cols="33"
        />
        <button className="submit-rating">SAVE RATING</button>
      </form>
    </div>
  );
}

export default styled(RateMeForm)`
  width: 35vw;
  height: auto;

  form {
    display: grid;
    grid-gap: 1px;
  }

  .modal-title {
    text-align: center;
  }

  .movie-to-rate {
    color: royalblue;
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

    font-weight: 500;
    letter-spacing: 0.1rem;
    color: var(--white);

    background-color: var(--background-stripe);
    border-radius: 3px;
  }
`;
