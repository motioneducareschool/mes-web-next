import React from "react";
// import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Trophy } from "lucide-react";

const HeroSection = () => {
  const stats = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      value: "3+",
      label: "Years of Excellence",
    },
    {
      icon: <Users className="h-6 w-6" />,
      value: "1000+",
      label: "Happy Students",
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      value: "100%",
      label: "Success Rate",
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col min-h-screen justify-center max-w-3xl">
          {/* Announcement Banner */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 text-white border border-white/20 w-fit">
            <span className="text-yellow-400 font-semibold">
              Admissions Open 2025-26
            </span>
            <ArrowRight className="h-4 w-4 ml-2" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Nurturing Minds,
            <span className="block">Building Futures</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            At Motion Educare School, we combine academic excellence with
            holistic development, preparing students for success in a rapidly
            evolving world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black">
              Apply Now
            </button>
            <button className="px-4 py-2 text-white border-white hover:bg-white/10 bg-white/20">
              Virtual Tour
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center bg-white/10 backdrop-blur-sm  p-4 border border-white/20"
              >
                <div className="text-yellow-400 mr-4">{stat.icon}</div>
                <div>
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </div>
  );
};

export default HeroSection;
