import React from "react";
import "./CourseCard.css";

function CourseCard5() {
  return (
    <div className="card">
      <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80" alt="UI UX design fundamentals" />
      <div className="content">
        <p className="title">UI/UX Design Fundamentals</p>
        <p className="info">Instructor: Chandru </p>
        <p className="info">Duration: 10 hrs</p>
        <p className="info">Rating: ⭐ 4.6</p>
        <p className="price">₹599</p>
      </div>
    </div>
  );
}

export default CourseCard5;
