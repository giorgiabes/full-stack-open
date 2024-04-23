const CourseHeader = ({ courseName }) => <h2>{courseName}</h2>;
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
  // console.log(course.parts);

  return (
    <div>
      <CourseHeader courseName={course.name} />
      <ul>
        {course.parts.map((part) => (
          <Content key={part.id} part={part} />
        ))}
      </ul>
      <TotalExercises parts={course.parts} />
    </div>
  );
};

const Header = () => <h1>Web development curriculum</h1>;

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <Header />
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default App;
