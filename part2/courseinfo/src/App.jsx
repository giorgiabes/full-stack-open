const Header = ({ courseName }) => <h1>{courseName}</h1>;
const Content = ({ part }) => (
  <li>
    {part.name} {part.exercises}
  </li>
);

const TotalExercises = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  return <h4>total of {totalExercises} exercises</h4>;
};

const Course = ({ course }) => {
  console.log(course.parts);

  return (
    <div>
      <Header courseName={course.name} />
      <ul>
        {course.parts.map((part) => (
          <Content key={part.id} part={part} />
        ))}
      </ul>
      <TotalExercises parts={course.parts} />
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
