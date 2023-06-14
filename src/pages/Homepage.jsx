import React from "react";
import ResponsiveNavbar from "../components/navbar/ResponsiveNavbar";
import HeroSection from "../components/herosection/HeroSection";
import BodyParts from "../components/bodyParts/BodyParts";
import SearchExercises from "../components/search/SearchExercises";

const Homepage = () => {
  return (
    <>
      <ResponsiveNavbar />
      <HeroSection />
      <BodyParts />
      <SearchExercises />
    </>
  );
};

export default Homepage;
