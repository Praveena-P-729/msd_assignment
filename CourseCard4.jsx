import React from "react";
import "./CourseCard.css";

function CourseCard4() {
  return (
    <div className="card">
      <img src="https://images.unsplash.com/photo-1517430816045-df4b7de01170?auto=format&fit=crop&w=800&q=80" alt="Java programming masterclass" />
      <div className="content">
        <p className="title">Java Programming Masterclass</p>
        <p className="info">Instructor: Gokul Priya </p>
        <p className="info">Duration: 18 hrs</p>
        <p className="info">Rating: ⭐ 4.5</p>
        <p className="price">₹749</p>
      </div>
    </div>
  );
}

export default CourseCard4;
