import React from "react";
import { StatsContainer } from "./FeedbackStatsStyles";

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
      <h4>{feedback.length} Reviews</h4>
      <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
    </StatsContainer>
  );
};

export default FeedbackStats;
