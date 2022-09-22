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

  /*------ Edit an item -------*/
  const editFeedback = (item: FeedbackDataInterface) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  /*------ Update an item -------*/
  const updateFeedback = (
    id: string | number,
    upItem: FeedbackDataInterface
  ): void => {
    setFeedback(
      feedback.map((item) => {
        if (item.id === id) {
          return { ...feedback, ...upItem };
        } else {
          return item;
        }
      })
    );
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
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackContext;
