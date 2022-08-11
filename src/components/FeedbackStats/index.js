import React from "react";
import { Rating, Review, StatsContainer } from "./FeedbackStatsStyles";

const FeedbackStats = ({ feedback }) => {
  // Methold to Calculate ratings average
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  // make aveage to one decimal place
  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <StatsContainer>
      <Review>{feedback.length} Reviews</Review>
      <Rating>Average rating: {isNaN(average) ? 0 : average}</Rating>
    </StatsContainer>
  );
};

export default FeedbackStats;
