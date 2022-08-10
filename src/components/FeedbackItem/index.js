import { FaTimes } from "react-icons/fa";
import Card from "../../reuseable/Card";

import { Button, NumDisplay, TextDisplay } from "./feedbackItemStyled";

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card reverse={false}>
      <NumDisplay>{item.rating}</NumDisplay>
      <Button onClick={() => handleDelete(item.id)}>
        <FaTimes color="red" />
      </Button>
      <TextDisplay>{item.text}</TextDisplay>
    </Card>
  );
}

export default FeedbackItem;
