import React from "react";
import "./CourseCard.css";

function CourseCard1() {
  return (
    <div className="card">
      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" alt="Full stack web development" />
      <div className="content">
        <p className="title">Full Stack Web Development</p>
        <p className="info">Instructor: Praveena </p>
        <p className="info">Duration: 12 hrs</p>
        <p className="info">Rating: ⭐ 4.7</p>
        <p className="price">₹799</p>
      </div>
    </div>
  );
}

export default CourseCard1;
