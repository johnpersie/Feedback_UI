import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import Card from "../../reuseable/Card";
import FeedbackContext from "../Context/Context";

import { Button, NumDisplay, TextDisplay } from "./feedbackItemStyled";

function FeedbackItem({ item }) {
  const { deleteFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <NumDisplay>{item.rating}</NumDisplay>
      <Button onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="red" />
      </Button>
      <TextDisplay>{item.text}</TextDisplay>
    </Card>
  );
}

export default FeedbackItem;
