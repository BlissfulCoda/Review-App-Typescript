import { useState } from "react";
import FeedbackData, { FeedbackDataInterface } from "./Data/FeedbackData";

import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";

export default function App() {
  const [feedback, setFeedback] =
    useState<FeedbackDataInterface[]>(FeedbackData);
  return (
    <div>
      <Header title="Review App" />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </div>
  );
}
