import React, { useState } from "react";
import FeedbackData from "../../Data/feedbackData";
import FeedbackItem from "../FeedbackItem";

function FeedbackList() {
  const [feedback, setFeedback] = useState(FeedbackData);

  if (!feedback || feedback.length === 0) {
    return <p>no feed back yet</p>;
  }
  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
