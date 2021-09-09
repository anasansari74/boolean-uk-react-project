import useStore from "../store";
import { useEffect } from "react";

import Button from "@material-ui/core/Button";

export default function RatingsCards() {
  const ratings = useStore((store) => store.ratings);
  const fetchRatings = useStore((store) => store.fetchRatings);

  const getModalInfo = useStore((store) => store.getModalInfo);
  const scrollTop = useStore((store) => store.scrollTop);
  const deleteRating = useStore((store) => store.deleteRating);

  useEffect(() => {
    fetchRatings();
  }, [fetchRatings]);
  return ratings.map((rating, index) => (
    <li key={index} className="card">
      <h1>{rating.title}</h1>
      <h3>Movie Rating: {rating.rating}</h3>
      <img src={rating.poster_image} alt="" height="200px" />
      <h1>Your Rating: {rating.yourRating}</h1>
      <h3>Your Comment: </h3>
      <p>{rating.comment}</p>
      <Button
        onClick={() => {
          getModalInfo("editMeForm", rating);
          scrollTop();
        }}
        style={{ margin: "10px" }}
        variant="contained"
      >
        Edit
      </Button>
      <Button
        onClick={() => deleteRating(rating.id)}
        style={{ margin: "10px" }}
        variant="contained"
        color="secondary"
      >
        Delete
      </Button>
    </li>
  ));
}
