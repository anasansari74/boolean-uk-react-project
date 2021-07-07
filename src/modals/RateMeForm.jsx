import styled from "styled-components";

import useStore from "../store";

function RateMeForm() {
  //   const fetchUsers = useStore(store => store.fetchUsers)
  const closeModal = useStore((store) => store.closeModal);

  function handleSubmit(event) {
    event.preventDefault();
    const formEl = event.target;

    const rateMeFormData = {
      yourRating: formEl.firstName.value,
      reasonForRating: formEl.lastName.value,
    };

    // API.createUser(newUserData).then(fetchUsers).then(closeModal);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="modal-title">Enter your Rating for:</h1>
        <h2>Movie Name:</h2>
        <h2>Movie Rating:</h2>
        <label htmlFor="yourRating">Choose a rating:</label>
        <select name="yourRating" id="yourRating">
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
  form {
    display: grid;
    grid-gap: 5px;
  }

  .modal-title {
    text-align: center;
  }

  input {
    border: solid 1px black;
  }

  .create-user {
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
