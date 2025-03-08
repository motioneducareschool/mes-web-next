"use client";
import { motion } from "framer-motion";
import AcademicProgram from "./academic-program";

const AcademicsPage = () => {
  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
      variants={staggerVariants}
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white"
    >
      {/* Hero Section */}
      <div className="py-16 bg-blue-700 text-white">
        <motion.div variants={fadeIn} className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Academic Program</h1>
          <p className="text-xl">
            CBSE-affiliated Curriculum with Holistic Learning Approach
          </p>
        </motion.div>
      </div>

      <AcademicProgram />
      {/* Curriculum Structure */}
      <div className="container mx-auto px-4 py-12">
        {/* Grading System */}
        <motion.div
          variants={fadeIn}
          className="bg-blue-50 p-8 rounded-2xl mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Assessment Pattern
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Scholastic Areas</h3>
              <div className="space-y-4">
                <div className="flex items-center bg-white p-4 rounded-lg">
                  <div className="text-blue-600 text-2xl mr-4">📘</div>
                  <div>
                    <p className="font-medium">
                      Continuous Comprehensive Evaluation (CCE)
                    </p>
                    <p className="text-sm text-gray-600">
                      Formative & Summative Assessments
                    </p>
                  </div>
                </div>
                <div className="flex items-center bg-white p-4 rounded-lg">
                  <div className="text-blue-600 text-2xl mr-4">📊</div>
                  <div>
                    <p className="font-medium">Grading System</p>
                    <p className="text-sm text-gray-600">
                      9-point scale as per CBSE guidelines
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Co-Scholastic Areas
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {["Sports", "Arts", "Yoga", "Music", "Drama", "Clubs"].map(
                  (activity, i) => (
                    <div
                      key={i}
                      className="bg-white p-4 rounded-lg text-center flex gap-4 justify-center items-center"
                    >
                      <div className="text-2xl mb-2">🏅</div>
                      <p className="text-sm font-medium">{activity}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Teaching Methodology */}
        <motion.div variants={fadeIn} className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Our Teaching Philosophy
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: "🧠",
                title: "Conceptual Learning",
                desc: "Focus on fundamental understanding",
              },
              {
                icon: "💻",
                title: "Tech Integration",
                desc: "Smart classes & educational apps",
              },
              {
                icon: "👥",
                title: "Peer Learning",
                desc: "Collaborative learning strategies",
              },
              {
                icon: "🌍",
                title: "Global Exposure",
                desc: "International curriculum standards",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl shadow-sm text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Academic Calendar */}
        <motion.div
          variants={fadeIn}
          className="bg-white p-8 rounded-2xl shadow-sm"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Academic Calendar 2024-25
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-50">
                  <th className="p-4 text-left">Term</th>
                  <th className="p-4 text-left">Duration</th>
                  <th className="p-4 text-left">Key Events</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    term: "Term I",
                    duration: "April - September",
                    events: "Orientation, Periodic Tests, Sports Day",
                  },
                  {
                    term: "Term II",
                    duration: "October - March",
                    events: "Project Submissions, Annual Exam, Cultural Fest",
                  },
                ].map((term, i) => (
                  <tr key={i} className="border-b border-blue-50">
                    <td className="p-4 font-medium">{term.term}</td>
                    <td className="p-4">{term.duration}</td>
                    <td className="p-4">{term.events}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AcademicsPage;
