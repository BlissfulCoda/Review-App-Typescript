import { FeedbackContextType } from "../Data/FeedbackData";
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

import FeedbackItem from "./FeedbackItem";

export default function FeedbackList(): JSX.Element {
  const { feedback } = useContext(FeedbackContext) as FeedbackContextType;
  if (!feedback || feedback.length === 0) {
    return <p>loading....</p>;
  }
  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} data={item} />
      ))}
    </div>
  );
}
