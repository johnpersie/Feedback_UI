import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../Context/Context";
import FeedbackItem from "../FeedbackItem";
import { Container, FeedbackListContainer, Para } from "./feedbackListStyled";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return (
      <Container>
        <Para
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          No feed back yet
        </Para>
      </Container>
    );
  }

  return (
    <FeedbackListContainer>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </FeedbackListContainer>
  );
}

export default FeedbackList;
