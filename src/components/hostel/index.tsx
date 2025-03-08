"use client";
import { motion } from "framer-motion";

const HostelPage = () => {
  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { y: 30, opacity: 0 },
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
      <div className="py-20 bg-blue-800 text-white">
        <motion.div variants={fadeUp} className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">School Hostel Facilities</h1>
          <p className="text-xl">Safe & Nurturing Residential Environment</p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Key Facilities */}
        <motion.div variants={stagger} className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Hostel Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏠",
                title: "Accommodation",
                desc: "Separate wings for boys & girls with capacity of 150 students",
              },
              {
                icon: "🛏️",
                title: "Rooms",
                desc: "Spacious AC rooms with 2/3/4 sharing options",
              },
              {
                icon: "📚",
                title: "Study",
                desc: "Dedicated study hours with supervised prep rooms",
              },
              {
                icon: "🏥",
                title: "Health Care",
                desc: "24/7 medical facility with in-house nurse",
              },
              {
                icon: "🍲",
                title: "Dining",
                desc: "Nutritious vegetarian meals (4 times daily)",
              },
              {
                icon: "🏸",
                title: "Recreation",
                desc: "Indoor games room & outdoor sports facilities",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-blue-50"
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

        {/* Room Facilities */}
        <motion.div
          variants={fadeUp}
          className="bg-blue-50 p-8 rounded-2xl mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Room Amenities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="list-disc pl-5 space-y-4 text-gray-700">
                {[
                  "Comfortable beds with orthopedic mattresses",
                  "Individual study tables & lockers",
                  "24/7 WiFi (regulated access)",
                  "Attached bathrooms with geyser",
                  "Daily housekeeping services",
                  "Laundry facility (twice weekly)",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2">✔️</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="aspect-video bg-blue-100 rounded-lg"></div>
              <p className="text-center mt-4 text-gray-600">
                Hostel Room Preview
              </p>
            </div>
          </div>
        </motion.div>

        {/* Safety & Security */}
        <motion.div variants={fadeUp} className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Safety Measures
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: "👮",
                title: "Security",
                desc: "24/7 CCTV surveillance & guards",
              },
              {
                icon: "👩⚕️",
                title: "Wardens",
                desc: "Experienced male & female wardens",
              },
              {
                icon: "📵",
                title: "Tech Policy",
                desc: "Regulated device usage hours",
              },
              {
                icon: "🚨",
                title: "Emergency",
                desc: "Fire safety systems & drills",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl shadow-md text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Daily Schedule */}
        <motion.div
          variants={fadeUp}
          className="bg-white p-8 rounded-2xl shadow-lg mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Daily Routine
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-50">
                <tr>
                  <th className="p-3 text-left">Time</th>
                  <th className="p-3 text-left">Activity</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { time: "6:00 AM", activity: "Morning Bell & Exercise" },
                  { time: "7:00 AM", activity: "Breakfast" },
                  { time: "8:00 AM", activity: "School Hours" },
                  { time: "3:30 PM", activity: "Snacks & Recreation" },
                  { time: "5:00 PM", activity: "Guided Study Hours" },
                  { time: "8:00 PM", activity: "Dinner" },
                  { time: "9:30 PM", activity: "Lights Out" },
                ].map((item, i) => (
                  <tr key={i} className="border-b border-blue-50">
                    <td className="p-3 font-medium">{item.time}</td>
                    <td className="p-3">{item.activity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={fadeUp}
          className="text-center bg-blue-50 p-8 rounded-2xl"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Hostel Admissions
          </h2>
          <p className="text-gray-700 mb-6">
            For inquiries or registration, contact our hostel warden:
            <br />
            📞 +91 74610 38138 | 📧 motioneducareschool@gmail.com
          </p>
          <button className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition">
            Download Hostel Brochure
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HostelPage;
