const Header = ({ courseName }) => <h1>{courseName}</h1>;
const Content = ({ part }) => (
  <li>
    {part.name} {part.exercises}
  </li>
);

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
    ],
  };

  return <Course course={course} />;
};

export default App;
