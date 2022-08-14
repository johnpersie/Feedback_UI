import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "../FeedbackItem";
import { Container, FeedbackListContainer, Para } from "./feedbackListStyled";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return (
      <Container>
        <Para>No feed back yet</Para>
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
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </FeedbackListContainer>
  );
}

export default FeedbackList;
