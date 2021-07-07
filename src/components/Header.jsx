import "./../styles/App.css";
import { Link } from "react-router-dom";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <header>
      <Link to="/">
        <img
          height="75px"
          src="data:image/png;base64,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"
          alt=""
        />
      </Link>
      <div className="space"></div>
      <div className="nav-buttons">
        <Link className="nav-link" to="/movies">
          <Button variant="contained" color="primary">
            Movies
          </Button>
        </Link>
        <Link className="nav-link" to="/your-ratings">
          <Button variant="contained" color="primary">
            Your Ratings
          </Button>
        </Link>
        <Link className="nav-link" to="/your-favourites">
          <Button variant="contained" color="primary">
            Your Favourites
          </Button>
        </Link>
      </div>
      <div className="space"></div>
      <ul>
        <li></li>
      </ul>
    </header>
  );
}

export default Header;
