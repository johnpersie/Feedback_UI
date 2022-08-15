import { Fragment } from "react";
import Header from "./components/Header";
import { Container, GlobalStyles } from "./styles/Global";
import FeedbackList from "./components/feedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { FeedbackProvider } from "./components/Context/Context";

function App() {
  return (
    <FeedbackProvider>
      <Fragment>
        <GlobalStyles />
        <Container>
          <Header />
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList />
        </Container>
      </Fragment>
    </FeedbackProvider>
  );
}
export default App;
