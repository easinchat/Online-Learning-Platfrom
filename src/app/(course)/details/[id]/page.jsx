import courses from "@/lib/course.json";
import { notFound } from "next/navigation";
import { FaRegHeart, FaStar } from "react-icons/fa";

const CardDetials = async ({ params }) => {
  const { id } = await params;
  console.log(typeof id);

  const course = courses.find((c) => c.id === Number(id));
  if (!course) {
    notFound();
  }

  return (
    <div className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition duration-300  items-center">
      <figure className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-auto object-cover"
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
        </div>
      </div>
    </div>
  );
};

export default CardDetials;
