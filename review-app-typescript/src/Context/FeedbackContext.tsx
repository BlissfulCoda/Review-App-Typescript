import React, { useState, createContext, useEffect } from "react";
import {
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
  const [feedback, setFeedback] = useState<FeedbackDataInterface[]>([]);
  const [feedbackEdit, setFeedbackEdit] = useState<FeedbackEditInterface>({
    item: {},
    edit: false,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchFeedbackData();
    setIsLoading(false);
  }, []);

  /*------ Fetch REST API DATA -------*/
  const fetchFeedbackData = async () => {
    const response = await fetch(`/feedback?&_sort=id&_order=desc`, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    const data = await response.json();
    setFeedback(data);
  };

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
          return { ...upItem, ...feedback };
        } else {
          return item;
        }
      })
    );
  };

  /*------ Add an item -------*/
  const handleAddFeedback = async (newFeedback: FeedbackDataInterface) => {
    const response = await fetch(`/feedback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    setFeedback([data, ...feedback]);
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
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackContext;
