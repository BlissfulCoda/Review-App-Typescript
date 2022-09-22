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

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackContext;
