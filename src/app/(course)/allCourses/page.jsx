import CourseDetailsCard from "@/component/sheard/CourseDetailsCard";
import DetailsCard from "@/component/sheard/CourseDetailsCard";
import courses from "@/lib/course.json";

const CourseDetails = () => {
  return (
    <div className="text-center mb-10">
      <div className="text-center mb-10 ">
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          🏆 Populer courses
        </h2>

        <p className="text-base-content/60 mt-3">
          All Populer courses you get in there
        </p>
      </div>
      <h2 className="font-bold text-3xl text-center mb-10"></h2>
      <div className="grid grid-cols-3 gap-5 ">
        {courses.map((course) => (
          <CourseDetailsCard
            key={course.id}
            course={course}
          ></CourseDetailsCard>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
