import React, { useState, createContext } from "react";
import FeedbackData, {
  FeedbackDataInterface,
  FeedbackContextType,
  FeedbackEditInterface,
} from "../Data/FeedbackData";

interface FeedbackContextInterface {
  children: React.ReactNode;
}

const FeedbackContext = createContext<FeedbackContextType | null>(null);

export function FeedbackProvider({
  children,
}: FeedbackContextInterface): JSX.Element {
  const [feedback, setFeedback] =
    useState<FeedbackDataInterface[]>(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState<FeedbackEditInterface>({
    item: {},
    edit: false,
  });

  /*------ Update an item -------*/
  const editFeedback = (item: FeedbackDataInterface) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  /*------ Add an item -------*/
  const handleAddFeedback = (newFeedback: FeedbackDataInterface) => {
    setFeedback([newFeedback, ...feedback]);
  };

  /*------ Delete an item -------*/
  const handleDelete = (id: number | string) => {
    if (window.confirm("Are you sure you want to delete this feedback ?")) {
      setFeedback(feedback.filter((item) => id !== item.id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleDelete,
        handleAddFeedback,
        editFeedback,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackContext;
