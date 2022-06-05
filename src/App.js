import FeedbackItem from "./components/FeedbackItem";
import Header from "./components/Header";
import { Container } from "./styles/AppStyled";
import { GlobalStyles } from "./styles/Global";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Container>
        <FeedbackItem />
      </Container>
    </div>
  );
}
export default App;
