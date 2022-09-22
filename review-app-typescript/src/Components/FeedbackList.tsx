import { useContext } from "react";
import { FeedbackContextType } from "../Data/FeedbackData";
import FeedbackContext from "../Context/FeedbackContext";
import Spinner from "./Shared/Spinner";

import FeedbackItem from "./FeedbackItem";

export default function FeedbackList(): JSX.Element {
  const { feedback, isLoading } = useContext(
    FeedbackContext
  ) as FeedbackContextType;
  if (!feedback || feedback.length === 0) {
    return <Spinner />;
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} data={item} />
      ))}
    </div>
  );
}
