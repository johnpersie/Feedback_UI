import { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "../../reuseable/Card";
import FeedbackContext from "../Context/Context";

import { Button, NumDisplay, TextDisplay } from "./feedbackItemStyled";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <NumDisplay>{item.rating}</NumDisplay>
      <Button onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="red" />
      </Button>
      <Button right=" 4rem" onClick={() => editFeedback(item)}>
        <FaEdit color="#86f3df" />
      </Button>
      <TextDisplay>{item.text}</TextDisplay>
    </Card>
  );
}

export default FeedbackItem;
