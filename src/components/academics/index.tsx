"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Book,
  Trophy,
  Star,
  Calculator,
  Microscope,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Play School Component
export const PlaySchool = () => (
  <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
    <header className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Play School (2-5 Years)</h1>
        <p className="text-xl">Where learning meets imagination and fun</p>
      </div>
    </header>

    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-purple-800">Our Programs</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Pre-Nursery (2-3 years)
                </h3>
                <p>Early socialization and basic skill development</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Nursery (3-4 years)
                </h3>
                <p>Foundation for literacy and numeracy</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">KG (4-5 years)</h3>
                <p>Preparation for formal schooling</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-purple-800">Key Features</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Users />, title: "Small Class Size" },
              { icon: <Book />, title: "Play-based Learning" },
              { icon: <Star />, title: "Montessori Methods" },
              { icon: <GraduationCap />, title: "Skilled Teachers" },
            ].map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="text-pink-500">{feature.icon}</div>
                  <span>{feature.title}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

// Primary School Component
export const PrimarySchool = () => (
  <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
    <header className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Primary School (6-10 Years)</h1>
        <p className="text-xl">
          Building strong foundations for lifelong learning
        </p>
      </div>
    </header>

    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-indigo-800 mb-6">
              Classes I-V
            </h2>
            <div className="space-y-4">
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Core Academics</h3>
                  <ul className="space-y-2">
                    <li>• English and Hindi Medium</li>
                    <li>• Mathematics & Environmental Science</li>
                    <li>• Computer Education</li>
                    <li>• Art & Craft</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-indigo-800 mb-6">
              Entrance Exam Preparation
            </h2>
            <div className="grid gap-4">
              {[
                "Sainik School",
                "Navodaya Vidyalaya",
                "BHU Entrance",
                "Military School",
                "Ramakrishna Mission",
                "Simultala Residential School",
              ].map((exam, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50"
                >
                  <CardContent className="p-4 flex items-center space-x-3">
                    <Trophy className="text-indigo-500" />
                    <span className="font-medium">{exam}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-indigo-800">Our Approach</h2>
          <div className="space-y-4">
            {[
              {
                title: "Personalized Learning",
                description: "Individual attention and customized study plans",
              },
              {
                title: "Regular Assessments",
                description: "Continuous evaluation and feedback",
              },
              {
                title: "Interactive Learning",
                description: "Technology-integrated classrooms",
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Middle School Component
export const MiddleSchool = () => (
  <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
    <header className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Middle School (11-14 Years)</h1>
        <p className="text-xl">
          Nurturing critical thinking and academic excellence
        </p>
      </div>
    </header>

    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-teal-800 mb-6">
              Classes VI-VIII
            </h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Core Subjects</h3>
                <ul className="space-y-2">
                  <li>• Mathematics</li>
                  <li>• Science</li>
                  <li>• Social Studies</li>
                  <li>• Languages (English, Hindi, Sanskrit)</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-teal-800 mb-6">
              Competitive Exam Preparation
            </h2>
            <div className="grid gap-4">
              {[
                "Polytechnic Entrance",
                "JEE Main Foundation",
                "NEET Foundation",
                "Olympiads",
              ].map((exam, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-r from-green-50 to-teal-50"
                >
                  <CardContent className="p-4 flex items-center space-x-3">
                    <Calculator className="text-teal-500" />
                    <span className="font-medium">{exam}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-teal-800">Special Programs</h2>
          <div className="space-y-4">
            {[
              {
                title: "STEM Labs",
                description: "Hands-on science and technology learning",
              },
              {
                title: "Career Guidance",
                description: "Early career counseling and direction",
              },
              {
                title: "Leadership Development",
                description: "Student council and team activities",
              },
            ].map((program, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {program.title}
                  </h3>
                  <p>{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Senior School Component
export const SeniorSchool = () => (
  <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
    <header className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Senior School (15-18 Years)</h1>
        <p className="text-xl">Preparing leaders for tomorrow</p>
      </div>
    </header>

    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-red-800 mb-6">
              Classes IX-XII
            </h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Streams Offered
                  </h3>
                  <ul className="space-y-2">
                    <li>• Science (PCM & PCB)</li>
                    <li>• Commerce</li>
                    <li>• Humanities</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-red-800 mb-6">
              Competitive Exam Programs
            </h2>
            <div className="grid gap-4">
              {[
                "JEE Main & Advanced",
                "NEET",
                "KVPY",
                "Olympiads",
                "CUET Preparation",
              ].map((exam, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-r from-orange-50 to-red-50"
                >
                  <CardContent className="p-4 flex items-center space-x-3">
                    <Microscope className="text-red-500" />
                    <span className="font-medium">{exam}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-red-800">
            Academic Excellence
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "Expert Faculty",
                description: "Experienced teachers and subject matter experts",
              },
              {
                title: "Advanced Labs",
                description:
                  "State-of-the-art science and computer laboratories",
              },
              {
                title: "Career Counseling",
                description: "Professional guidance for higher education",
              },
              {
                title: "Mock Tests",
                description: "Regular practice tests and performance analysis",
              },
            ].map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default {
  PlaySchool,
  PrimarySchool,
  MiddleSchool,
  SeniorSchool,
};
