import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Building,
  MonitorPlay,
  BookOpen,
  Bus,
  ShieldCheck,
  Component,
  Music2,
  Coffee,
  User,
  Home,
} from "lucide-react";

const FacilitiesAndSports = () => {
  const academicFacilities = [
    {
      icon: <Building className="h-6 w-6" />,
      title: "Smart Classrooms",
      description:
        "Interactive digital boards, multimedia systems, and modern teaching aids in air-conditioned classrooms",
    },
    {
      icon: <MonitorPlay className="h-6 w-6" />,
      title: "Computer Labs",
      description:
        "State-of-the-art computer labs with latest hardware and software for practical learning",
    },
    {
      icon: <Component className="h-6 w-6" />,
      title: "Science Labs",
      description:
        "Separate Physics, Chemistry, and Biology labs with modern equipment",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Library",
      description:
        "Extensive collection of books, magazines, and digital resources with reading spaces",
    },
    {
      icon: <Music2 className="h-6 w-6" />,
      title: "Activity Rooms",
      description:
        "Dedicated spaces for art, music, dance, and other co-curricular activities",
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Cafeteria",
      description:
        "Hygienic canteen serving nutritious meals with proper seating arrangement",
    },
  ];

  const sportsAndOthers = [
    {
      title: "Indoor Sports Complex",
      facilities: [
        "Badminton Courts",
        "Table Tennis Arena",
        "Chess Room",
        "Carrom Facility",
        "Yoga Center",
      ],
    },
    {
      title: "Outdoor Sports",
      facilities: [
        "400m Running Track",
        "Football Ground",
        "Cricket Field",
        "Basketball Courts",
        "Volleyball Courts",
      ],
    },
    {
      title: "Safety & Security",
      facilities: [
        "24x7 CCTV Surveillance",
        "Security Personnel",
        "Fire Safety Equipment",
        "First Aid Facilities",
        "Emergency Protocols",
      ],
    },
  ];

  const transportAndSafety = [
    {
      icon: <Bus className="h-8 w-8 text-yellow-600" />,
      title: "Transport",
      features: [
        "GPS-enabled school buses",
        "Trained drivers and conductors",
        "Regular vehicle maintenance",
        "City-wide coverage",
      ],
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-red-600" />,
      title: "Medical Care",
      features: [
        "Full-time medical staff",
        "Well-equipped medical room",
        "Regular health check-ups",
        "Emergency response protocol",
      ],
    },
  ];

  const hostelFeatures = [
    {
      title: "Accommodation",
      icon: <Home className="h-8 w-8 text-blue-600" />,
      features: [
        "Separate wings for boys and girls",
        "Well-ventilated rooms",
        "Modern furniture",
        "24/7 hot water supply",
        "Regular housekeeping",
      ],
      color: "bg-blue-50",
    },

    {
      title: "Dining",
      icon: <User className="h-6 w-6 text-green-600" />,
      features: [
        "Nutritious vegetarian meals",
        "Hygienic kitchen facility",
        "Special diet considerations",
        "Fresh and seasonal menu",
        "Dedicated dining halls",
      ],
      color: "bg-green-50",
    },
    {
      title: "Security",
      icon: <ShieldCheck className="h-6 w-6 text-red-600" />,
      features: [
        "24/7 security personnel",
        "CCTV surveillance",
        "Biometric attendance",
        "Regular health check-ups",
        "Dedicated wardens",
      ],
      color: "bg-red-50",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Our Facilities
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We provide state-of-the-art infrastructure and facilities to ensure a
          conducive environment for both academic excellence and physical
          development.
        </p>
      </div>

      {/* Academic Facilities */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Academic Facilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academicFacilities.map((facility, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-green-600 mt-1">{facility.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-gray-600">{facility.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Hostel Facilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hostelFeatures.map((facility, index) => (
            <Card
              key={index}
              className={`${facility.color} hover:shadow-lg transition-shadow`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  {facility.icon}
                  <h3 className="text-xl font-semibold">{facility.title}</h3>
                </div>
                <ul className="space-y-2">
                  {facility.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* Sports Facilities */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Sports & Other Facilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sportsAndOthers.map((section, index) => (
            <Card key={index} className={`hover:shadow-lg transition-shadow`}>
              <CardHeader>
                <CardTitle className="text-xl">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.facilities.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Transport and Medical */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Transport & Medical Facilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {transportAndSafety.map((facility, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  {facility.icon}
                  <h3 className="text-xl font-semibold">{facility.title}</h3>
                </div>
                <ul className="space-y-2">
                  {facility.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacilitiesAndSports;
