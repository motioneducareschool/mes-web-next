"use client";
import { motion } from "framer-motion";

const CareersPage = () => {
  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const fadeIn = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white"
    >
      {/* Hero Section */}
      <div className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <motion.div variants={fadeIn} className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Competitive Exam Excellence
          </h1>
          <p className="text-xl">
            Gateway to IIT, NEET, NTSE & Olympiad Success
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Key Features */}
        <motion.div variants={stagger} className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Our Strategic Advantage
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Targeted Preparation",
                desc: "Customized study plans for each competitive exam",
              },
              {
                icon: "📈",
                title: "Result Analysis",
                desc: "Weekly performance tracking & improvement plans",
              },
              {
                icon: "🏆",
                title: "Topper Mentorship",
                desc: "Guidance from previous year achievers",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-blue-50"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Exam Categories */}
        <motion.div
          variants={fadeIn}
          className="bg-blue-50 p-8 rounded-2xl mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Comprehensive Exam Preparation
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Engineering",
                exams: [
                  "JEE Main & Advanced",
                  "BITSAT",
                  "VITEEE",
                  "State CETs",
                ],
                icon: "⚙️",
              },
              {
                title: "Medical",
                exams: ["NEET UG", "AIIMS", "JIPMER", "AFMC"],
                icon: "🩺",
              },
              {
                title: "Foundation",
                exams: ["NTSE", "Olympiads", "KVPY", "NSTSE"],
                icon: "📘",
              },
              {
                title: "Other",
                exams: ["CUET", "CLAT", "NDA", "SAT"],
                icon: "🎓",
              },
            ].map((category, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  {category.title}
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {category.exams.map((exam, j) => (
                    <li key={j}>{exam}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Preparation Strategy */}
        <motion.div variants={fadeIn} className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            5-Step Success Formula
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                step: "1",
                title: "Concept Mastery",
                desc: "Daily concept classes by experts",
              },
              {
                step: "2",
                title: "Problem Solving",
                desc: "1000+ practice questions per subject",
              },
              {
                step: "3",
                title: "Test Series",
                desc: "Weekly mock tests with All India Ranking",
              },
              {
                step: "4",
                title: "Doubt Resolution",
                desc: "24-hour doubt clearing support",
              },
              {
                step: "5",
                title: "Revision",
                desc: "Strategic revision cycles & crash courses",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="w-56 bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Results Section */}
        <motion.div
          variants={fadeIn}
          className="bg-blue-800 text-white p-8 rounded-2xl mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Track Record
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { number: "1500+", label: "Selections in Top 100" },
              { number: "98%", label: "Success Rate" },
              { number: "200+", label: "NTSE Scholars" },
              { number: "50+", label: "Olympiad Medalists" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Study Schedule */}
        <motion.div
          variants={fadeIn}
          className="bg-white p-8 rounded-2xl shadow-sm"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Daily Study Plan
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-50">
                <tr>
                  <th className="p-3 text-left">Time</th>
                  <th className="p-3 text-left">Activity</th>
                  <th className="p-3 text-left">Focus Area</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    time: "6:00 AM",
                    activity: "Morning Session",
                    focus: "Theory Classes",
                  },
                  {
                    time: "9:00 AM",
                    activity: "School Curriculum",
                    focus: "Board Preparation",
                  },
                  {
                    time: "2:00 PM",
                    activity: "Practice Session",
                    focus: "Problem Solving",
                  },
                  {
                    time: "5:00 PM",
                    activity: "Test Series",
                    focus: "Exam Simulation",
                  },
                  {
                    time: "7:00 PM",
                    activity: "Doubt Classes",
                    focus: "Weak Area Analysis",
                  },
                ].map((item, i) => (
                  <tr key={i} className="border-b border-blue-50">
                    <td className="p-3 font-medium">{item.time}</td>
                    <td className="p-3">{item.activity}</td>
                    <td className="p-3 text-blue-600">{item.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={fadeIn} className="text-center mt-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Start Your Success Journey
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 text-xl">
              📞 Admission Helpline: +91 74610 38138
              <br />
              📧 Email: motioneducareschool@gmail.com
            </p>
            {/* <button className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition">
              Download Complete Brochure
            </button> */}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CareersPage;
