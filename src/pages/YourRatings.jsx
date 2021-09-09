import styled from "styled-components";

import RatingsCards from "../components/RatingsCards";

function YourRatings({ className }) {
  return (
    <ul className={`cards ${className}`}>
      <RatingsCards />
    </ul>
  );
}

export default styled(YourRatings)``;
