"use client";
import { motion } from "framer-motion";

const LabsPage = () => {
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
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
          <h1 className="text-4xl font-bold mb-4">Science & Innovation Labs</h1>
          <p className="text-xl">
            Hands-On Learning Through Advanced Research Facilities
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Lab Statistics */}
        <motion.div
          variants={stagger}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: "🔬", title: "15+", subtitle: "Specialized Labs" },
            { icon: "🧪", title: "5000+", subtitle: "Equipment Units" },
            { icon: "👩🔬", title: "1:15", subtitle: "Student:Mentor Ratio" },
            { icon: "⏲️", title: "60hrs/week", subtitle: "Lab Access" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                {stat.title}
              </h3>
              <p className="text-gray-600">{stat.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Lab Categories */}
        <motion.div variants={fadeIn} className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Our Laboratory Facilities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Physics Lab",
                features: [
                  "Optics Experiments",
                  "Electronics Workbench",
                  "Modern Sensors",
                ],
                icon: "⚛️",
                image: "physics-lab.jpg",
              },
              {
                name: "Chemistry Lab",
                features: [
                  "Analytical Instruments",
                  "Safety Fume Hoods",
                  "Spectrometers",
                ],
                icon: "🧪",
                image: "chemistry-lab.jpg",
              },
              {
                name: "Biology Lab",
                features: [
                  "Microscopy Center",
                  "DNA Analysis",
                  "Specimen Collection",
                ],
                icon: "🧬",
                image: "bio-lab.jpg",
              },
              {
                name: "Computer Lab",
                features: ["3D Printing", "AI Workstations", "Robotics Kits"],
                icon: "💻",
                image: "computer-lab.jpg",
              },
              {
                name: "Language Lab",
                features: [
                  "Digital Audio Systems",
                  "VR Language Immersion",
                  "TOEFL Prep",
                ],
                icon: "🎧",
                image: "language-lab.jpg",
              },
              {
                name: "Innovation Hub",
                features: [
                  "IoT Devices",
                  "Prototyping Tools",
                  "Startup Incubator",
                ],
                icon: "🚀",
                image: "innovation-lab.jpg",
              },
            ].map((lab, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="h-48 bg-blue-100"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{lab.icon}</span>
                    <h3 className="text-xl font-bold text-blue-900">
                      {lab.name}
                    </h3>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {lab.features.map((feature, j) => (
                      <li key={j}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Lab Safety */}
        <motion.div
          variants={fadeIn}
          className="bg-blue-50 p-8 rounded-2xl mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Safety Protocols
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Mandatory Guidelines
              </h3>
              <ul className="space-y-3">
                {[
                  "Lab coats and safety goggles required",
                  "Chemical handling certification",
                  "Emergency shower stations",
                  "Digital safety briefings",
                  "Supervised access only",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2">⚠️</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Emergency Features
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🚨", title: "Alert Systems" },
                  { icon: "🧯", title: "Fire Safety" },
                  { icon: "🏥", title: "First Aid" },
                  { icon: "📞", title: "Emergency Call" },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl text-center">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <p className="font-medium">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Lab Hours */}
        <motion.div
          variants={fadeIn}
          className="bg-white p-8 rounded-2xl shadow-lg mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Lab Access Schedule
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-50">
                <tr>
                  <th className="p-3 text-left">Lab Type</th>
                  <th className="p-3">Weekdays</th>
                  <th className="p-3">Saturday</th>
                  <th className="p-3">Booking Policy</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: "Science Labs",
                    weekdays: "8AM-6PM",
                    sat: "8AM-1PM",
                    policy: "24h prior booking",
                  },
                  {
                    type: "Computer Lab",
                    weekdays: "7AM-8PM",
                    sat: "7AM-3PM",
                    policy: "Walk-in allowed",
                  },
                  {
                    type: "Innovation Hub",
                    weekdays: "9AM-9PM",
                    sat: "Closed",
                    policy: "Faculty approval",
                  },
                ].map((lab, i) => (
                  <tr key={i} className="border-b border-blue-50">
                    <td className="p-3 font-medium">{lab.type}</td>
                    <td className="p-3 text-center">{lab.weekdays}</td>
                    <td className="p-3 text-center">{lab.sat}</td>
                    <td className="p-3 text-center">{lab.policy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div variants={fadeIn} className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Lab Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                year: "2023",
                title: "National Science Fair Winners",
                desc: "3 projects selected for national exhibition",
              },
              {
                year: "2022",
                title: "Patent Filed",
                desc: "Student-developed water purification system",
              },
              {
                year: "2024",
                title: "AI Research Grant",
                desc: "₹50L grant for machine learning research",
              },
            ].map((achievement, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {achievement.year}
                </div>
                <h4 className="text-xl font-bold mb-2">{achievement.title}</h4>
                <p className="text-gray-600">{achievement.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Inquiry CTA */}
        <motion.div
          variants={fadeIn}
          className="text-center bg-blue-800 text-white p-8 rounded-2xl"
        >
          <h2 className="text-2xl font-bold mb-4">Lab Inquiries</h2>
          <p className="text-lg mb-6">
            Contact our Lab Coordinator:
            <br />
            📞 +91 74610 38138
            <br />
            📧 motioneducareschool@gmail.com
          </p>
          {/* <button className="bg-white text-blue-800 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
            Book Lab Time
          </button> */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LabsPage;
