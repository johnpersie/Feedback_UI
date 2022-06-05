import { useState } from "react";
// import FeedbackItem from "./components/FeedbackItem";
import Header from "./components/Header";
import { Container } from "./styles/AppStyled";
import { GlobalStyles } from "./styles/Global";
import FeedbackList from "./components/feedbackList";
function App({ feedback }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Container>
        {/* <FeedbackItem /> */}
        <FeedbackList feedback={feedback} />
      </Container>
    </div>
  );
  console.log(feedback);
}
export default App;
