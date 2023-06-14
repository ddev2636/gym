import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="heroContainer">
      <div className="contentContainer">
        {/* <div > */}
        <img
          width="80%"
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR9KBzmS8E7cxZ5XhjyvlaEHAWFGaBj2nSIUZXuf7O8UbQEi4Lu"
          alt="dumbbell"
          className="rotate"
        />

        {/* </div> */}
        <div className="title">Welcome to Our Gym</div>
        <div className="subtitle">Get fit, stay healthy</div>
      </div>
    </div>
  );
};

export default HeroSection;
