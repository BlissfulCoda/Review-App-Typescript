import { FeedbackDataInterface } from "../Data/FeedbackData";
import Card from "./Shared/Card";

interface DataInterface {
  data: FeedbackDataInterface;
}

export default function FeedbackItem({ data }: DataInterface): JSX.Element {
  const { rating, text } = data;
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </Card>
  );
}
