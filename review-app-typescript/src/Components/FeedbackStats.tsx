import { FeedbackDataInterface, FeedbackContextType } from "../Data/FeedbackData";
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

export default function FeedbackStats(): JSX.Element {
  const { feedback } = useContext(FeedbackContext) as FeedbackContextType;

  let average: number =
    feedback.reduce((prev, curr) => {
      return prev + curr.rating;
    }, 0) / feedback.length;

  average = Number(average.toFixed(1).replace(/[.,]0$/, ""));

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}
