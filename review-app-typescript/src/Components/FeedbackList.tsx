import { FeedbackDataInterface } from "../Data/FeedbackData";

import FeedbackItem from "./FeedbackItem";

interface FeedbackListInterface {
  feedback: FeedbackDataInterface[];
}

export default function FeedbackList({
  feedback,
}: FeedbackListInterface): JSX.Element {
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
