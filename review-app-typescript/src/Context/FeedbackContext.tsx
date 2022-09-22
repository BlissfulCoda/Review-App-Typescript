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

  /*------ EDIT an item -------*/
  const editFeedback = (item: FeedbackDataInterface) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  /*------ UPDATE an item -------*/
  const updateFeedback = async (
    id: string | number,
    upItem: FeedbackDataInterface
  ) => {
    const response = await fetch(`feedback/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(upItem),
    });

    const data = await response.json();

    setFeedback(
      feedback.map((item) => {
        if (item.id === id) {
          return { ...data, ...feedback };
        } else {
          return item;
        }
      })
    );
  };

  /*------ ADD an item -------*/
  const handleAddFeedback = async (newFeedback: FeedbackDataInterface) => {
    const response = await fetch(`/feedback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  /*------ DELETE an item -------*/
  const handleDelete = async (id: number | string | undefined) => {
    if (window.confirm("Are you sure you want to delete this feedback ?")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });
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
