import { motion, AnimatePresence } from "framer-motion";
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
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            <FeedbackItem key={item.id} data={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
