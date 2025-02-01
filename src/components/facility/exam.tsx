import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  Trophy,
  Clock,
  Star,
  Target,
  CheckCircle,
  Wrench,
  Globe,
  Lightbulb,
  Shield,
} from "lucide-react";

const ExamPrepPrograms = () => {
  const programs = [
    {
      title: "Sainik School Preparation",
      icon: <Trophy className="h-12 w-12 text-blue-600" />,
      description:
        "Comprehensive preparation for Sainik School entrance examination with focus on military aptitude.",
      features: [
        "Military aptitude training",
        "Physical fitness coaching",
        "Intelligence & reasoning preparation",
        "Language skills development",
        "Mock tests and interviews",
      ],
      duration: "1 Year Program",
      eligibility: "Students of Class 5-6",
      success: "85% success rate",
    },
    {
      title: "Navodaya Vidyalaya",
      icon: <Star className="h-12 w-12 text-yellow-600" />,
      description:
        "Specialized coaching for Jawahar Navodaya Vidyalaya entrance test with proven methodology.",
      features: [
        "Mental ability training",
        "Language proficiency",
        "Mathematics excellence program",
        "Regular mock tests",
        "Personal mentoring",
      ],
      duration: "8 Months Program",
      eligibility: "Class 5 students",
      success: "90% selection rate",
    },
    {
      title: "BHU Entrance Preparation",
      icon: <BookOpen className="h-12 w-12 text-green-600" />,
      description:
        "Expert guidance for BHU entrance examinations across various courses.",
      features: [
        "Subject-specific coaching",
        "Previous year paper analysis",
        "Weekly assessments",
        "Doubt clearing sessions",
        "Study material provided",
      ],
      duration: "1.5 Year Program",
      eligibility: "Class 11-12 students",
      success: "75% success rate",
    },
    {
      title: "JEE Main & Advanced",
      icon: <Target className="h-12 w-12 text-red-600" />,
      description:
        "Intensive coaching program for IIT-JEE preparation with focus on conceptual learning.",
      features: [
        "Advanced level physics, chemistry & mathematics",
        "Daily practice problems",
        "Live doubt solving sessions",
        "Regular mock tests",
        "Performance tracking",
      ],
      duration: "2 Year Program",
      eligibility: "Class 11-12 students",
      success: "80% qualify for advanced",
    },
    {
      title: "NEET Preparation",
      icon: <Clock className="h-12 w-12 text-purple-600" />,
      description:
        "Comprehensive medical entrance preparation program with expert faculty.",
      features: [
        "Biology, Physics & Chemistry coverage",
        "NCERT-focused approach",
        "Regular test series",
        "Practical sessions",
        "One-on-one mentoring",
      ],
      duration: "2 Year Program",
      eligibility: "Class 11-12 students",
      success: "85% selection rate",
    },
    {
      title: "Military School Entrance",
      icon: <Shield className="h-12 w-12 text-gray-600" />,
      description:
        "Dedicated coaching for military school entrance exams with specialized training.",
      features: [
        "Written test preparation",
        "Physical endurance training",
        "Interview and personality development",
        "Current affairs and general knowledge",
        "Mock tests & assessments",
      ],
      duration: "1 Year Program",
      eligibility: "Class 5-9 students",
      success: "80% success rate",
    },
    {
      title: "Ramakrishna Mission School Entrance",
      icon: <Lightbulb className="h-12 w-12 text-orange-600" />,
      description:
        "Focused preparation for Ramakrishna Mission School entrance with emphasis on values-based education.",
      features: [
        "Logical reasoning and aptitude",
        "Mathematics and English coaching",
        "Spoken English and essay writing",
        "Interview and personality development",
        "Mock tests and practice papers",
      ],
      duration: "6 Months Program",
      eligibility: "Class 4-7 students",
      success: "88% selection rate",
    },
    {
      title: "Simultala Residential School Preparation",
      icon: <Globe className="h-12 w-12 text-teal-600" />,
      description:
        "Rigorous training for Simultala entrance with structured curriculum and test series.",
      features: [
        "Comprehensive subject-wise preparation",
        "Logical reasoning and mental ability",
        "Regular assessments and test series",
        "Interview and writing skills development",
        "Past year paper analysis",
      ],
      duration: "10 Months Program",
      eligibility: "Class 5-6 students",
      success: "85% success rate",
    },
    {
      title: "Polytechnic Entrance Preparation",
      icon: <Wrench className="h-12 w-12 text-indigo-600" />,
      description:
        "Expert coaching for Polytechnic entrance exams with focus on technical subjects.",
      features: [
        "Mathematics and science foundation",
        "Technical subject preparation",
        "Mock tests and previous year paper discussions",
        "One-on-one doubt solving",
        "Guidance for diploma course selection",
      ],
      duration: "1 Year Program",
      eligibility: "Class 10 students",
      success: "75% selection rate",
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Competitive Exam Preparation
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our specialized coaching programs are designed to help students
            excel in various competitive examinations through personalized
            attention, regular assessments, and comprehensive study materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">{program.icon}</div>
                <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                <p className="text-gray-600">{program.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-gray-600 flex items-center gap-2"
                        >
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-semibold">{program.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Success Rate</p>
                      <p className="font-semibold text-green-600">
                        {program.success}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-sm text-gray-500">Eligibility</p>
                      <p className="font-semibold">{program.eligibility}</p>
                    </div>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamPrepPrograms;
