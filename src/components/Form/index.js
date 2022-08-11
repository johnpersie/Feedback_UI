import { useState } from "react";
import Button from "../../reuseable/Button";
import Card from "../../reuseable/Card";
import RatingSelect from "../RatingSelect";
import { Div, FormContainer, InputGroup } from "./FormStyles";

const Form = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("hello");

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
  return (
    <Card>
      <FormContainer>
        <h2> How will you rate your services with us?</h2>

        <RatingSelect select={(rating) => setRating(rating)} />
        <InputGroup>
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="write your review"
            value={text}
          />
          <Button type="submit" isdisabled={btnDisabled} version="secondary">
            send
          </Button>
        </InputGroup>
        {message && <Div>{message}</Div>}
      </FormContainer>
    </Card>
  );
};

export default Form;
