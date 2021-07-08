import styled from "styled-components";

import Button from "@material-ui/core/Button";

function YourRatings({ className }) {
  return (
    <ul className={`cards ${className}`}>
      <li className="card">
        <h1>The Imitation Game</h1>
        <h3>Movie Rating: 5</h3>
        <img
          src="https://images-na.ssl-images-amazon.com/images/M/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_UX182_CR0,0,182,268_AL_.jpg"
          alt=""
          height="200px"
        />
        <h1>Your Rating: 10</h1>
        <h3>Your Comment: </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          inventore voluptate dolorum tempora dicta, quidem id quas eligendi.
          Ipsam, sapiente?
        </p>
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
