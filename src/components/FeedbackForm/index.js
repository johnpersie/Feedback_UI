import { useEffect, useState } from "react";
import Button from "../../reuseable/Button";
import { AnimatePresence } from "framer-motion";
import Card from "../../reuseable/Card";
import RatingSelect from "../RatingSelect";
import { Div, FormContainer, Input, InputGroup } from "./FormStyles";
import { useContext } from "react";
import FeedbackContext from "../Context/Context";

const FeedbackForm = () => {
  const { addNewFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  // this function active the rating and text for editing

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage(" text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addNewFeedback(newFeedback);
      }

      setText("");
    }
  };
  return (
    <Card>
      <FormContainer onSubmit={handleSubmit}>
        <h2> How will you rate your services with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <InputGroup>
          <Input
            onChange={handleTextChange}
            type="text"
            placeholder="write your review"
            value={text}
          />
          <Button type="submit" isdisabled={btnDisabled} version="">
            send
          </Button>
        </InputGroup>
        {message && (
          <AnimatePresence>
            <Div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {message}
            </Div>
          </AnimatePresence>
        )}
      </FormContainer>
    </Card>
  );
};

export default FeedbackForm;
