import { FaStar, FaUserGraduate } from "react-icons/fa";

const instructors = [
  {
    id: 1,
    name: "Rafiq Ahmed",
    expertise: "UI/UX Designer",
    rating: 4.9,
    students: 1200,
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    expertise: "Web Developer",
    rating: 4.8,
    students: 950,
    image: "https://i.pravatar.cc/300?img=47",
  },
  {
    id: 3,
    name: "Alex Morgan",
    expertise: "Digital Marketer",
    rating: 4.7,
    students: 850,
    image: "https://i.pravatar.cc/300?img=11",
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    expertise: "Graphic Designer",
    rating: 4.9,
    students: 1100,
    image: "https://i.pravatar.cc/300?img=44",
  },
];

const TopInstructors = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-10">
        <p className="text-primary font-semibold uppercase tracking-widest">
          Meet Our Experts
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          🏆 Top Instructors
        </h2>

        <p className="text-base-content/60 mt-3">
          Learn from our experienced and professional instructors.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {instructors.map((instructor) => (
          <div
            key={instructor.id}
            className="card bg-base-100 shadow-lg border border-base-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
          >
            <figure className="pt-7">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-28 h-28 rounded-full object-cover border-4 border-primary/20"
              />
            </figure>

            <div className="card-body items-center text-center">
              <h3 className="card-title text-lg">{instructor.name}</h3>

              <span className="badge badge-primary badge-outline">
                {instructor.expertise}
              </span>

              <div className="flex items-center gap-2 mt-3 text-sm">
                <span className="flex items-center gap-1 text-yellow-500 font-bold">
                  <FaStar />
                  {instructor.rating}
                </span>

                <span className="text-base-content/50">|</span>

                <span className="flex items-center gap-1 text-base-content/60">
                  <FaUserGraduate />
                  {instructor.students}+ Students
                </span>
              </div>

              <button className="btn btn-primary btn-outline btn-sm w-full mt-4">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopInstructors;
