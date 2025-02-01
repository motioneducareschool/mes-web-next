import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, GraduationCap, Home, ArrowRight } from "lucide-react";

const WhyChooseUs = () => {
  // Hero section stats
  const stats = [
    { label: "Years of Excellence", value: "5+" },
    { label: "Student Success Rate", value: "99%" },
    { label: "Qualified Teachers", value: "50+" },
    { label: "Total Students", value: "500+" },
  ];

  // Key features
  const features = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Academic Excellence",
      description:
        "Comprehensive curriculum with modern teaching methodologies",
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Sports Facilities",
      description: "State-of-the-art indoor and outdoor sports infrastructure",
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Hostel Facility",
      description:
        "Safe and comfortable residential facilities with modern amenities",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Faculty",
      description: "Highly qualified and experienced teaching staff",
    },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Welcome to Motion Educare Public School
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Nurturing minds, building character, and shaping futures through
                excellence in education and comprehensive development.
              </p>
              <div className="flex gap-4">
                <button
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 
                  transition-colors flex items-center gap-2"
                >
                  Apply Now <ArrowRight className="h-5 w-5" />
                </button>
                <button
                  className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg 
                  hover:bg-green-50 transition-colors"
                >
                  Virtual Tour
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <h3 className="text-3xl font-bold text-green-600 mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links - Competitive Exams */}
      {/* <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {examPreps.map((exam, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className={`flex items-center gap-3 ${exam.color}`}>
                    {exam.icon}
                    <h3 className="font-semibold">{exam.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div> */}

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a comprehensive learning environment with modern
              facilities and experienced faculty to ensure holistic development
              of every student.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-green-600 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our School?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Take the first step towards excellence. Contact us to learn more
            about admission processes and available programs.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              className="bg-white text-green-600 px-6 py-3 rounded-lg 
              hover:bg-gray-100 transition-colors"
            >
              Admission Enquiry
            </button>
            <button
              className="border-2 border-white px-6 py-3 rounded-lg 
              hover:bg-green-700 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default WhyChooseUs;
