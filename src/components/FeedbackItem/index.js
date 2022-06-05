import { useState } from "react";
import { CardContainer, NumDisplay, TextDisplay } from "./feedbackItemStyled";

function FeedbackItem({ item }) {
  return (
    <CardContainer>
      <NumDisplay>{item.rating}</NumDisplay>
      <TextDisplay>{item.text}</TextDisplay>
    </CardContainer>
  );
}

export default FeedbackItem;
