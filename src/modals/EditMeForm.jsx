import styled from "styled-components";

import useStore from "../store";

import Button from "@material-ui/core/Button";

function EditMeForm({ className }) {
  const modalMovie = useStore((store) => store.modalMovie);
  const closeModal = useStore((store) => store.closeModal);
  const editRating = useStore((store) => store.editRating);

  function handleSubmit(event) {
    event.preventDefault();
    const formEl = event.target;

    const editMeFormData = {
      yourRating: formEl.yourEdittedRating.value,
      comment: formEl.yourEdittedComment.value,
    };
    console.log(editMeFormData);
    console.log(modalMovie.id);
    editRating(editMeFormData, modalMovie.id);

    closeModal();
  }

  return (
    <div className={`${className}`}>
      <img
        className="edit-form-image"
        src={modalMovie.poster_image}
        alt="Movie image"
        height="250px"
      />
      <form className="edit-me-form" onSubmit={handleSubmit}>
        <h1 className="edit-modal-title">Edit your Rating for:</h1>
        <h2 className="movie-to-rate edit-movie-form">{modalMovie.title}</h2>
        <h3>Your Previous Rating: {modalMovie.yourRating}</h3>
        <h3>Your Previous Comment:</h3>
        <p className="previos-comment">{modalMovie.comment}</p>
        <label
          htmlFor="yourEdittedRating"
          className="rating-label movie-to-rate"
        >
          <strong>How would you rate this movie now?</strong>
          <select
            className="previous-rating drop-down"
            name="yourEdittedRating"
            id="yourEdittedRating"
          >
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
        {/* <div className="previous-comment"> */}
        <label htmlFor="yourEdittedComment" className="movie-to-rate">
          <strong>
            Would you like to explain why you gave this movie this rating?
          </strong>
        </label>
        <textarea
          name="yourEdittedComment"
          id="yourEdittedComment"
          rows="5"
          cols="33"
        />
        {/* </div> */}
        <Button
          type="submit"
          className="submit-rating edit-form-button"
          variant="contained"
          color="primary"
        >
          Confirm Edit
        </Button>
      </form>
    </div>
  );
}

export default styled(EditMeForm)`
  display: grid;
  align-items: center;
  grid-auto-flow: column;

  .edit-me-form {
    display: grid;
    grid-gap: 0.5rem;

    padding: 1rem;
  }

  .edit-form-image {
    height: 350px;
    justify-self: center;
  }

  .previos-comment {
    width: 20rem;
    justify-self: center;
  }
`;
