const TotalExercises = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  return <h4>total of {totalExercises} exercises</h4>;
};

export default TotalExercises;
