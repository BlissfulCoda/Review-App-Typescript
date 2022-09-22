import React, { useState, useContext, useEffect } from "react";
import FeedbackContext from "../Context/FeedbackContext";
import { FeedbackContextType } from "../Data/FeedbackData";
import RatingStats from "./RatingStats";

import Card from "./Shared/Card";
import Button from "./Shared/Button";

export default function FeedbackForm(): JSX.Element {
  const { handleAddFeedback, feedbackEdit, updateFeedback } = useContext(
    FeedbackContext
  ) as FeedbackContextType;

  const [text, setText] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [message, setMessage] = useState<string | null>("");
  const [rating, setRating] = useState<number>(4);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setIsDisabled(false);
      setText(feedbackEdit.item.text);
    }
  }, [feedbackEdit]);

  /*--------- Handle Input Text --------*/
  const handleText = (e: React.FormEvent<HTMLInputElement>): void => {
    if (text === "") {
      setIsDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.length <= 10) {
      setIsDisabled(true);
      setMessage("Please leave a longer review");
    } else {
      setMessage(null);
      setIsDisabled(false);
    }
    setText(e.currentTarget.value);
  };

  /*--------- Form Submit --------*/
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (text.length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        handleAddFeedback(newFeedback);
      }
      setText("");
    }
  };
  return (
    <Card>
      <div className="input">
        <form onSubmit={handleSubmit}>
          <h2>What would you rate this service ?</h2>
          <RatingStats select={(rating: number): void => setRating(rating)} />
          <section className="input-group">
            <input
              type="text"
              placeholder="Enter a review"
              value={text}
              onChange={handleText}
            />
            <Button type="submit" isDisabled={isDisabled}>
              Send
            </Button>
          </section>
          {message && <div className="message">{message}</div>}
        </form>
      </div>
    </Card>
  );
}
