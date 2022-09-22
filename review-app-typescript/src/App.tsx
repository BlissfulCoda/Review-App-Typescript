import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FeedbackProvider } from "./Context/FeedbackContext";

import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeeedbackForm";
import AboutPageLink from "./Components/AboutPageLink";
import AboutPage from "./Pages/AboutPage";

export default function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header title="Review App" />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutPageLink />
                </>
              }
            />
          </Routes>
        </div>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}
