import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is a test sample",
      rating: 10,
    },
    {
      id: 1,
      text: "This for context test",
      rating: 7,
    },
    {
      id: 1,
      text: "This is a test sample",
      rating: 9,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  // function to delete feedback item
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
    }
    setFeedback(feedback.filter((list) => list.id !== id));
  };

  // function to add feedback item
  const addNewFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // a function to set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  return (
    <FeedbackContext.Provider
      value={{ feedback, deleteFeedback, addNewFeedback, editFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
