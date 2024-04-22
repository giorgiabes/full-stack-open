import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Display = ({ anecdotes, selected, points }) => {
  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
    </>
  );
};

const MostVoted = ({ anecdotes, points }) => {
  function indexOfMax(arr) {
    let max = Math.max(...arr);
    return arr.indexOf(max);
  }

  if (points.reduce((acc, curr) => acc + curr, 0) === 0) {
    return (
      <>
        <h1>Anecdote with most votes</h1>
        <p>
          To display most voted anecdote, there should be at last one voted
          anecdote
        </p>
      </>
    );
  }
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[indexOfMax(points)]}</div>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoint] = useState(new Uint8Array(anecdotes.length));

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const handleNext = () => setSelected(getRandomInt(0, anecdotes.length));

  const handleVote = () => {
    const newSelected = [...points];
    newSelected[selected] += 1;
    return setPoint(newSelected);
  };

  return (
    <div>
      <Display anecdotes={anecdotes} selected={selected} points={points} />
      <Button handleClick={handleVote} text="vote" />
      <Button handleClick={handleNext} text="next anecdote" />
      <MostVoted anecdotes={anecdotes} points={points} />
    </div>
  );
};

export default App;
