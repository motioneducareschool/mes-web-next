import React from "react";
// import { BookOpen, Users, Trophy } from "lucide-react"; 
import HeroCarousel from "@/components/home/components/hero";
import SchoolHomepage from "@/components/home/components/other";

const HeroSection = () => {
  // const stats = [
  //   {
  //     icon: <BookOpen className="h-6 w-6" />,
  //     value: "3+",
  //     label: "Years of Excellence",
  //   },
  //   {
  //     icon: <Users className="h-6 w-6" />,
  //     value: "1000+",
  //     label: "Happy Students",
  //   },
  //   {
  //     icon: <Trophy className="h-6 w-6" />,
  //     value: "100%",
  //     label: "Success Rate",
  //   },
  // ];

  return (
    <>
      <div className="flex flex-col justify-center max-w-screen-xl mx-auto  py-4 font-bold">
        <h1>MOTION EDUCARE SCHOOL</h1>
      </div>
      <HeroCarousel />

      {/* Content */}
      <SchoolHomepage />
    </>
  );
};

export default HeroSection;
