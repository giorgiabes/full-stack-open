import Course from "./components/Course";
import Header from "./components/Header";
import courses from "./coursesData";

const App = () => {
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
