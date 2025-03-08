"use client";
import { motion } from "framer-motion";

const TimetablePage = () => {
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

  // Sample timetable data
  const timetable: any = [
    {
      time: "8:00 - 8:45",
      mon: { subject: "Math", teacher: "RG", room: "B201" },
      tue: { subject: "Science", teacher: "SP", room: "Lab3" },
      wed: { subject: "English", teacher: "AD", room: "B202" },
      thu: { subject: "Hindi", teacher: "SK", room: "B203" },
      fri: { subject: "PT", teacher: "MS", room: "Ground" },
      sat: { subject: "Math", teacher: "RG", room: "B201" },
    },
    {
      time: "8:45 - 9:30",
      mon: { subject: "Science", teacher: "SP", room: "Lab1" },
      tue: { subject: "Math", teacher: "RG", room: "B201" },
      wed: { subject: "S.St", teacher: "PK", room: "B204" },
      thu: { subject: "English", teacher: "AD", room: "B202" },
      fri: { subject: "Art", teacher: "RS", room: "Art1" },
      sat: { subject: "Science", teacher: "SP", room: "Lab3" },
    },
    // Add more periods following same structure
    {
      time: "9:30 - 9:45",
      mon: { subject: "Break", teacher: "", room: "" },
      tue: { subject: "Break", teacher: "", room: "" },
      wed: { subject: "Break", teacher: "", room: "" },
      thu: { subject: "Break", teacher: "", room: "" },
      fri: { subject: "Break", teacher: "", room: "" },
      sat: { subject: "Break", teacher: "", room: "" },
    },
    // Continue adding all periods up to school closing time
  ];

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
          <h1 className="text-4xl font-bold mb-4">School Timetable</h1>
          <p className="text-xl">
            Academic Schedule for Class VI - A (2024-25)
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Class Selector */}
        <motion.div variants={fadeIn} className="mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-bold text-blue-900 mb-4">
              Select Class
            </h3>
            <select className="w-full p-3 border border-blue-200 rounded-lg">
              <option>Class VI - A</option>
              <option>Class VII - B</option>
              <option>Class VIII - C</option>
              {/* Add other classes */}
            </select>
          </div>
        </motion.div>

        {/* Timetable */}
        <motion.div
          variants={fadeIn}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="p-4 text-left min-w-[120px]">Time</th>
                  <th className="p-4 min-w-[150px]">Monday</th>
                  <th className="p-4 min-w-[150px]">Tuesday</th>
                  <th className="p-4 min-w-[150px]">Wednesday</th>
                  <th className="p-4 min-w-[150px]">Thursday</th>
                  <th className="p-4 min-w-[150px]">Friday</th>
                  <th className="p-4 min-w-[150px]">Saturday</th>
                </tr>
              </thead>
              <tbody>
                {timetable.map((period: any, index: number) => (
                  <motion.tr
                    key={index}
                    variants={fadeIn}
                    className="border-b border-blue-50 even:bg-blue-50"
                  >
                    <td className="p-4 font-medium">{period.time}</td>
                    {["mon", "tue", "wed", "thu", "fri", "sat"].map((day) => (
                      <td key={day} className="p-4">
                        {period[day].subject ? (
                          <div className="space-y-1">
                            <div className="font-medium">
                              {period[day].subject}
                            </div>
                            <div className="text-sm text-gray-600">
                              {period[day].teacher &&
                                `Prof. ${period[day].teacher}`}
                            </div>
                            <div className="text-xs text-blue-600">
                              {period[day].room}
                            </div>
                          </div>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Timetable Key */}
        <motion.div
          variants={fadeIn}
          className="mt-8 bg-blue-50 p-6 rounded-xl"
        >
          <h3 className="text-lg font-bold text-blue-900 mb-4">
            Timetable Key
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-600 mr-2 rounded-full"></div>
              <span>PT - Physical Training</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-600 mr-2 rounded-full"></div>
              <span>Lab Sessions</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-600 mr-2 rounded-full"></div>
              <span>Assessment Days</span>
            </div>
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          variants={fadeIn}
          className="mt-8 bg-white p-6 rounded-xl shadow-md"
        >
          <h3 className="text-lg font-bold text-blue-900 mb-4">
            Important Notes
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>School timings: 8:00 AM to 2:30 PM</li>
            <li>Wednesday: Special Activity Period (Last hour)</li>
            <li>Saturday: Half day till 12:00 PM</li>
            <li>Teacher codes: RG (R. Gupta), SP (S. Patel), etc.</li>
            <li>Lab sessions require lab coat</li>
          </ul>
        </motion.div>

        {/* Download CTA */}
        <motion.div variants={fadeIn} className="mt-8 text-center">
          <button className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition">
            Download Timetable (PDF)
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TimetablePage;
