import { FeedbackProvider } from "./Context/FeedbackContext";

import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";

export default function App() {

  return (
    <FeedbackProvider>
      <div>
        <Header title="Review App" />
        <div className="container">
          <FeedbackStats />
          <FeedbackList />
        </div>
      </div>
    </FeedbackProvider>
  );
}
