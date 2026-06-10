import React from "react";
import "./CourseCard.css";

function CourseCard2() {
  return (
    <div className="card">
      <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" alt="Python programming" />
      <div className="content">
        <p className="title">Python Programming</p>
        <p className="info">Instructor: Sasiprabha </p>
        <p className="info">Duration: 15 hrs</p>
        <p className="info">Rating: ⭐ 4.6</p>
        <p className="price">₹699</p>
      </div>
    </div>
  );
}

export default CourseCard2;
