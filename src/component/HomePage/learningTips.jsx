import { FaBookOpen, FaClock, FaBullseye, FaLightbulb } from "react-icons/fa";

const tips = [
  {
    id: 1,
    icon: <FaBookOpen />,
    title: "Active Learning",
    description:
      "Don't just read. Practice what you learn through projects, quizzes and real-world examples.",
    category: "Study Techniques",
  },
  {
    id: 2,
    icon: <FaClock />,
    title: "Time Management",
    description:
      "Create a daily study schedule and divide your learning into small, manageable sessions.",
    category: "Time Management",
  },
  {
    id: 3,
    icon: <FaBullseye />,
    title: "Set Learning Goals",
    description:
      "Set clear daily and weekly goals to stay focused and track your learning progress.",
    category: "Study Techniques",
  },
  {
    id: 4,
    icon: <FaLightbulb />,
    title: "Take Short Breaks",
    description:
      "Take regular short breaks during study sessions to refresh your mind and improve focus.",
    category: "Time Management",
  },
];

const LearningTips = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-10">
        <p className="text-primary font-semibold uppercase tracking-widest">
          Learn Smarter
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          💡 Learning Tips
        </h2>
        <p className="text-base-content/60 mt-3">
          Simple techniques to make your learning journey more effective.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="card bg-base-100 border border-base-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="card-body">
              <div className="text-3xl text-primary mb-3">{tip.icon}</div>

              <span className="badge badge-primary badge-outline">
                {tip.category}
              </span>

              <h3 className="card-title mt-2">{tip.title}</h3>

              <p className="text-sm text-base-content/70">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningTips;
