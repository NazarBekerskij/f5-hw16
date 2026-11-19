import { useState } from "react";
import "./App.css";

import Statistics from "./components/Statistics/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodFeedback = () => {
    setGood((prev) => prev + 1);
  };

  const handleNeutralFeedback = () => {
    setNeutral((prev) => prev + 1);
  };

  const handleBadFeedback = () => {
    setBad((prev) => prev + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    if (total === 0) {
      return 0;
    }

    return Math.round((good / total) * 100);
  };

  return (
    <div>
      <div>
        <button onClick={handleGoodFeedback} type="button">
          Good
        </button>
        <button onClick={handleNeutralFeedback} type="button">
          Neutral
        </button>
        <button onClick={handleBadFeedback} type="button">
          Bad
        </button>
      </div>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </div>
  );
}

export default App;
