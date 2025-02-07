import React from "react";
// import HeroCarousel from "./components/hero";
import WhyChooseUs from "./components/whyChooseUs";
import FacilitiesAndSports from "../facility/facility";
import ExamPrepPrograms from "../facility/exam";
import CTA from "./components/cta";

const HomePage = () => {
  return (
    <>
      {/* <HeroCarousel /> */}
      <WhyChooseUs />
      <FacilitiesAndSports />
      <ExamPrepPrograms />
      <CTA />
    </>
  );
};

export default HomePage;
