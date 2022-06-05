import { useState } from "react";
import { CardContainer, NumDisplay, TextDisplay } from "./feedbackItemStyled";

function FeedbackItem() {
  const [rating, setRating] = useState(8);
  const [text, setText] = useState("here is an example of a feedback item");
  return (
    <CardContainer>
      <NumDisplay>{rating}</NumDisplay>
      <TextDisplay>{text}</TextDisplay>
    </CardContainer>
  );
}

export default FeedbackItem;
