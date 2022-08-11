import { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import { Container, GlobalStyles, Wrapper } from "./styles/Global";
import FeedbackList from "./components/feedbackList";
import FeedbackData from "./Data/feedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

const theme = {
  color: {
    orange: "#ffc75f",
    orange1: "#ff9f5f",
    orange2: "#feb72b",
    green3: "#2F7A85",
    aquamarine: "#86f3df",
    black: "#000",
    black1: "#070b0d",
    blackOpacity: "rgb(0, 0, 0, 0.8)",
    blackOpacity1: "rgb(0, 0, 0, 0.95)",
    black2: "#151a1e",
    gray: "#2e2d2c",
    darkgray: "#b3afac",
    white: "#fff",
    white1: "#e8ebed",
    whitesmoke: "  #f8f8f6",
    gainsboro: "#e1e4e6",
    midnightblue: "#18043c",
    midnightblue1: "#071733",
    transparent: "transparent",
  },
};

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const addNewFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
    }
    setFeedback(feedback.filter((list) => list.id !== id));
  };
  return (
    <Fragment>
      <GlobalStyles />
      <Container>
        <Header />
        {/* <Wrapper> */}
        <FeedbackForm handleAdd={addNewFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        {/* </Wrapper> */}
      </Container>
    </Fragment>
  );
}
export default App;
