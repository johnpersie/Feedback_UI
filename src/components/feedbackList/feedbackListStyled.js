import styled from "styled-components";
import { motion } from "framer-motion";

export const FeedbackListContainer = styled.div`
  margin: auto;
`;
export const Container = styled.div`
  margin: auto;
  width: 90%;
  padding: 1.5rem;
  transition: 0.5s ease-in;
`;
export const Para = styled(motion.p)`
  font-size: clamp(1.6rem, 5vw, 2rem) !important;
  transition: all 0.5s;
`;
