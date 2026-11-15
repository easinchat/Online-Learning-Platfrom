import BannerPage from "@/component/HomePage/banner";
import PopularCourses from "@/component/HomePage/popularCourses";
import LearningTips from "@/component/HomePage/learningTips";
import Footer from "@/component/sheard/Footer";
import Navbar from "@/component/sheard/Navbar";
import React from "react";
import TopInstructors from "@/component/HomePage/topInstructor";

const layout = ({ children }) => {
  return (
    <div
      className="container mx-auto
    "
    >
      <Navbar></Navbar>

      <BannerPage></BannerPage>
      <PopularCourses></PopularCourses>
      <LearningTips></LearningTips>
      <TopInstructors></TopInstructors>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default layout;
