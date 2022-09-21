import { useState } from "react";
import FeedbackData, { FeedbackDataInterface } from "./Data/FeedbackData";

import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";

export default function App() {
  const [feedback, setFeedback] =
    useState<FeedbackDataInterface[]>(FeedbackData);
  return (
    <div>
      <Header title="Review App" />
      <div className="container">
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} />
      </div>
    </div>
  );
}
