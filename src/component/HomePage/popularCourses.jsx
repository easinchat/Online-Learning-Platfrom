import React from "react";
import courses from "@/lib/course.json";
import PopulerCourseCard from "../sheard/populerCourseCard";

const PopularCourses = () => {
  const topCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="text-center mb-10">
      <div className="text-center mb-10 ">
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          🏆 Populer courses
        </h2>

        <p className="text-base-content/60 mt-3">
          Top 3 highest-rated courses in this e learning website
        </p>
      </div>
      <h2 className="font-bold text-3xl text-center mb-10"></h2>
      <div className="grid grid-cols-3 gap-5 ">
        {topCourses.map((course) => (
          <PopulerCourseCard
            key={course.id}
            course={course}
          ></PopulerCourseCard>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
