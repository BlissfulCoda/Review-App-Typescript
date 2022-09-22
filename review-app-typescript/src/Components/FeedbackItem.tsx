import { useContext } from "react";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
import {
  FeedbackDataInterface,
  FeedbackContextType,
} from "../Data/FeedbackData";
import FeedbackContext from "../Context/FeedbackContext";
import Card from "./Shared/Card";

interface DataInterface {
  data: FeedbackDataInterface;
}

export default function FeedbackItem({ data }: DataInterface): JSX.Element {
  const { handleDelete, editFeedback } = useContext(
    FeedbackContext
  ) as FeedbackContextType;
  const { id, rating, text } = data;
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close">
        <AiTwotoneDelete onClick={() => handleDelete(id)} color="red" />
      </button>
      <button className="edit">
        <AiTwotoneEdit onClick={() => editFeedback(data)} color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
}
