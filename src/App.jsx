import { useState } from "react";
import "./App.css";

import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

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
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={{
            good: handleGoodFeedback,
            neutral: handleNeutralFeedback,
            bad: handleBadFeedback,
          }}
        />
      </Section>

      <Section title="Statistics">

          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback"/>
          ) : (

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />)
        }
      </Section>
    </div>
  );
}

export default App;
