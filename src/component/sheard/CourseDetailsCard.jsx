import Link from "next/link";
import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";

const CourseDetailsCard = ({ course }) => {
  return (
    <div className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition duration-300">
      <figure className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-52 object-cover"
        />

        <span className="badge badge-primary absolute top-3 left-3">
          {course.category}
        </span>

        <button className="btn btn-circle btn-sm absolute top-3 right-3 bg-white border-none">
          <FaRegHeart className="text-red-500" />
        </button>
      </figure>

      <div className="card-body">
        <div className="flex justify-between items-center">
          <span className="badge badge-outline">{course.level}</span>

          <span className="flex items-center gap-1 text-yellow-500 font-bold">
            <FaStar />
            {course.rating}
          </span>
        </div>

        <h2 className="card-title">{course.title}</h2>

        <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>

        <p className="text-sm text-base-content/70">{course.description}</p>

        <div className="divider my-1"></div>

        <div className="flex justify-between items-center">
          <span className="text-sm">⏱ {course.duration}</span>

          <Link href={`/details/${course.id}`}>
            <button className="btn btn-primary btn-sm">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsCard;
