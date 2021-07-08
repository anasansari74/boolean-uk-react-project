import styled from "styled-components";

import Button from "@material-ui/core/Button";

function YourRatings({ className }) {
  return (
    <ul className={`cards ${className}`}>
      <li className="card">
        <h1>Movie Name:</h1>
        <h1>Movie Rating:</h1>
        <h2>Your Rating:</h2>
        <h3>Your Comment:</h3>
        <Button style={{ margin: "10px" }} variant="contained">
          Edit
        </Button>
        <Button
          style={{ margin: "10px" }}
          variant="contained"
          color="secondary"
        >
          Delete
        </Button>
      </li>
    </ul>
  );
}

export default styled(YourRatings)``;
