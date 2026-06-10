import React from "react";
import "./CourseCard.css";

function CourseCard3() {
  return (
    <div className="card">
      <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" alt="Data science bootcamp" />
      <div className="content">
        <p className="title">Data Science Bootcamp</p>
        <p className="info">Instructor: Sanjith </p>
        <p className="info">Duration: 20 hrs</p>
        <p className="info">Rating: ⭐ 4.8</p>
        <p className="price">₹999</p>
      </div>
    </div>
  );
}

export default CourseCard3;
