"use client";
import { useState } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Upgrade Your Skills Today 🚀",
    description:
      "Learn new skills, improve your knowledge and take your career to the next level.",
    button: "Explore Courses",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    title: "Learn from Industry Experts",
    description:
      "Get practical knowledge and learn from experienced instructors around the world.",
    button: "Start Learning",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
];

const BannerPage = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden rounded-2xl bg-slate-900 text-center mb-10">
      <div className="grid md:grid-cols-2 items-center min-h-[450px]">
        <div className="p-8 md:p-14 text-white">
          <span className="badge badge-warning mb-5">Learn & Grow</span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {slide.title}
          </h1>

          <p className="mt-5 text-slate-300 text-lg">{slide.description}</p>

          <button className="btn btn-warning mt-8">
            {slide.button}
            <FaArrowRight />
          </button>

          <div className="flex gap-3 mt-8 items-center">
            <button
              onClick={prevSlide}
              className="btn btn-circle btn-outline btn-sm text-white"
            >
              <FaChevronLeft />
            </button>

            <span className="text-sm">
              0{current + 1} / 0{slides.length}
            </span>

            <button
              onClick={nextSlide}
              className="btn btn-circle btn-outline btn-sm text-white"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="h-full min-h-[300px]">
          <img
            src={slide.image}
            alt="Students learning together"
            className="w-full h-full min-h-[300px] md:min-h-[450px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerPage;
