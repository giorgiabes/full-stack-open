import CourseHeader from "./CourseHeader";
import Content from "./Content";
import TotalExercises from "./TotalExercises";

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

export default Course;
