import Navbar from "@/component/sheard/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="container mx-auto space-y-10">
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default layout;
