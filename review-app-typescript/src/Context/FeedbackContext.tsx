import React, { useState, createContext } from "react";
import FeedbackData, {
  FeedbackDataInterface,
  FeedbackContextType,
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

  /*------ Delete an item -------*/
  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this feedback ?")) {
      setFeedback(feedback.filter((item) => id !== item.id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleDelete,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackContext;
