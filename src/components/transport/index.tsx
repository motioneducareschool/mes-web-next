"use client";
import { motion } from "framer-motion";

const TransportPage = () => {
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
          <h1 className="text-4xl font-bold mb-4">School Transportation</h1>
          <p className="text-xl">Safe & Reliable Student Commute Solutions</p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Key Features */}
        <motion.div variants={stagger} className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Our Transport Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚌",
                title: "Modern Fleet",
                desc: "GPS-enabled AC buses with speed governors",
              },
              {
                icon: "👮♀️",
                title: "Safety First",
                desc: "Female attendants & CCTV surveillance",
              },
              {
                icon: "📱",
                title: "Real-Time Tracking",
                desc: "Live bus tracking via parent app",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
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

        {/* Route Information */}
        <motion.div
          variants={fadeIn}
          className="bg-blue-50 p-8 rounded-2xl mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Transport Routes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="p-3 text-left">Route</th>
                      <th className="p-3 text-left">Key Stops</th>
                      <th className="p-3">Timing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        route: "North Zone",
                        stops: "5",
                        time: "7:00 AM - 4:00 PM",
                      },
                      {
                        route: "South Zone",
                        stops: "8",
                        time: "6:45 AM - 4:15 PM",
                      },
                      {
                        route: "East Zone",
                        stops: "6",
                        time: "7:15 AM - 4:30 PM",
                      },
                      {
                        route: "West Zone",
                        stops: "7",
                        time: "6:30 AM - 4:00 PM",
                      },
                    ].map((route, i) => (
                      <tr key={i} className="border-b border-blue-100">
                        <td className="p-3 font-medium">{route.route}</td>
                        <td className="p-3">{route.stops} pickup points</td>
                        <td className="p-3 text-center">{route.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="aspect-video bg-blue-100 rounded-lg"></div>
              <p className="text-center mt-4 text-gray-600">
                Transport Route Map
              </p>
            </div>
          </div>
        </motion.div>

        {/* Safety Features */}
        <motion.div variants={fadeIn} className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Safety Protocols
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Vehicle Safety
              </h3>
              <ul className="list-disc pl-5 space-y-3 text-gray-700">
                {[
                  "Annual fitness certification",
                  "Fire extinguishers & first aid kits",
                  "Speed limit controllers",
                  "Regular maintenance checks",
                  "Emergency exit windows",
                ].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Child Safety
              </h3>
              <ul className="list-disc pl-5 space-y-3 text-gray-700">
                {[
                  "Attendance verification via RFID",
                  "Parental pickup authorization",
                  "Emergency alert system",
                  "Women attendants in all buses",
                  "Seat belts for all students",
                ].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Fee Structure */}
        <motion.div
          variants={fadeIn}
          className="bg-white p-8 rounded-2xl shadow-lg mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Transport Charges
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-50">
                <tr>
                  <th className="p-3 text-left">Distance</th>
                  <th className="p-3">Monthly Fee</th>
                  <th className="p-3">Quarterly</th>
                  <th className="p-3">Annual</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    distance: "0-3 km",
                    monthly: "₹400",
                    quarterly: "₹1200",
                    annual: "₹4600",
                  },
                  {
                    distance: "3-5 km",
                    monthly: "₹500",
                    quarterly: "₹1500",
                    annual: "₹5700",
                  },
                  {
                    distance: "5-7 km",
                    monthly: "₹600",
                    quarterly: "₹1800",
                    annual: "₹6800",
                  },
                ].map((plan, i) => (
                  <tr key={i} className="border-b border-blue-50">
                    <td className="p-3 font-medium">{plan.distance}</td>
                    <td className="p-3 text-center">{plan.monthly}</td>
                    <td className="p-3 text-center">{plan.quarterly}</td>
                    <td className="p-3 text-center">{plan.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-600">
            * Fuel surcharge applicable as per market rates
          </p>
        </motion.div>

        {/* Pickup Procedure */}
        <motion.div
          variants={fadeIn}
          className="bg-blue-50 p-8 rounded-2xl mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Pickup/Drop Procedure
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📝",
                title: "Registration",
                desc: "Submit transport request form with documents",
              },
              {
                icon: "📍",
                title: "Stop Allocation",
                desc: "Nearest pickup point assigned within 48 hours",
              },
              {
                icon: "🆔",
                title: "ID Verification",
                desc: "Mandatory ID card for student pickup",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          variants={fadeIn}
          className="text-center bg-blue-800 text-white p-8 rounded-2xl"
        >
          <h2 className="text-3xl font-bold mb-4">
            Need Transport Assistance?
          </h2>
          <p className="text-xl mb-6">
            📞 Transport Manager: +91 74610 38138
            <br />
            📧 Email: motioneducareschool@gmail.com
          </p>
          <button className="bg-white text-blue-800 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
            Download Route Map
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TransportPage;
