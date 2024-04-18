import { useState } from "react";

const Head = () => <h1>give feedback</h1>;

const Button = ({ increment, text }) => {
  return <button onClick={increment}>{text}</button>;
};

const Statistics = () => <h1>statistics</h1>;

const Display = ({ text, score }) => (
  <div>
    {text} {score}
  </div>
);

const Stats = ({ all, average, positive }) => {
  return (
    <div>
      <div>all {all}</div>
      <div>average {average}</div>
      <div>positive {positive}%</div>
    </div>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const average = (good - bad) / all || 0;
  const positive = (good / all) * 100;

  const incrGood = () => setGood(good + 1);
  const incrNeutral = () => setNeutral(neutral + 1);
  const incrBad = () => setBad(bad + 1);

  return (
    <div>
      <Head />
      <Button increment={incrGood} text="good" />
      <Button increment={incrNeutral} text="neutral" />
      <Button increment={incrBad} text="bad" />
      <Statistics />
      <Display text="good" score={good} />
      <Display text="neutral" score={neutral} />
      <Display text="bad" score={bad} />
      <Stats all={all} average={average} positive={positive} />
    </div>
  );
}

export default App;
