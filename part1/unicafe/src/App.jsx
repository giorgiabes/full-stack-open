import { useState } from "react";

const Head = ({ text }) => <h1>{text}</h1>;

const Button = (props) => {
  return (
    <div>
      <button onClick={props.incrGood}>{props.textGood}</button>
      <button onClick={props.incrNeutral}>{props.textNeutral}</button>
      <button onClick={props.incrBad}>{props.textBad}</button>
    </div>
  );
};

const Display = (props) => {
  if (props.all === 0) {
    return (
      <>
        <h1>statistics</h1>
        <div>No feedback given</div>
      </>
    );
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <div>
          {props.textGood} {props.scoreGood}
        </div>
        <div>
          {props.textNeutral} {props.scoreNeutral}
        </div>
        <div>
          {props.textBad} {props.scoreBad}
        </div>
        <div>all {props.all}</div>
        <div>average {props.average}</div>
        <div>positive {props.positive}%</div>
      </div>
    );
  }
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  const incrGood = () => setGood(good + 1);
  const incrNeutral = () => setNeutral(neutral + 1);
  const incrBad = () => setBad(bad + 1);

  return (
    <>
      <Head text="give feedback" />
      <Button
        incrGood={incrGood}
        incrNeutral={incrNeutral}
        incrBad={incrBad}
        textGood="good"
        textNeutral="neutral"
        textBad="bad"
      />
      <Display
        textGood="good"
        textNeutral="neutral"
        textBad="bad"
        scoreGood={good}
        scoreNeutral={neutral}
        scoreBad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </>
  );
}

export default App;
