import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
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
      <button className="close">
        <AiTwotoneDelete color="purple" />
      </button>
      <button className="edit">
        <AiTwotoneEdit color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
}
