"use client";
import FacilitiesSection from "@/components/facility/facility";
import { motion } from "framer-motion";

const FacilitiesPage = () => {
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
          <h1 className="text-4xl font-bold mb-4">Campus Facilities</h1>
          <p className="text-xl">
            World-Class Infrastructure for Holistic Development
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Key Stats */}
        <motion.div
          variants={stagger}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {[
            {
              icon: "🏫",
              title: "Spacious Campus",
              subtitle: "Well-designed learning environment",
            },
            {
              icon: "🏢",
              title: "Modern Infrastructure",
              subtitle: "Well-equipped academic buildings",
            },
            {
              icon: "💡",
              title: "Smart Classrooms",
              subtitle: "Technology-enabled interactive learning",
            },
            {
              icon: "🌳",
              title: "Eco-Friendly Campus",
              subtitle: "Lush green surroundings",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                {stat.title}
              </h3>
              <p className="text-gray-600">{stat.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Academic Facilities */}
        <motion.div variants={fadeIn} className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Academic Infrastructure
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Classrooms",
                features: [
                  "Interactive Boards",
                  "Digital Podiums",
                  "AC Environment",
                ],
                icon: "💻",
              },
              {
                title: "Science Complex",
                features: [
                  "10 Advanced Labs",
                  "Research Facilities",
                  "Demo Theaters",
                ],
                icon: "🔬",
              },
              {
                title: "Library",
                features: ["25K+ Books", "e-Learning Hub", "Reading Lounges"],
                icon: "📚",
              },
            ].map((facility, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex gap-2 items-center ">
                  <div className="text-4xl mb-4">{facility.icon}</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    {facility.title}
                  </h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {facility.features.map((feature, j) => (
                    <li key={j}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sports Facilities */}
        <motion.div
          variants={fadeIn}
          className="bg-blue-50 p-8 rounded-2xl mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Sports & Recreation
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Indoor Facilities
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {["Table Tennis", "Badminton", "Yoga Studio", "Gymnasium"].map(
                  (sport, i) => (
                    <div
                      key={i}
                      className="bg-white p-4 rounded-xl text-center"
                    >
                      <div className="text-3xl mb-2">🏓</div>
                      <p className="font-medium">{sport}</p>
                    </div>
                  )
                )}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Outdoor Facilities
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {["Football", "Cricket", "Basketball", "Athletics"].map(
                  (sport, i) => (
                    <div
                      key={i}
                      className="bg-white p-4 rounded-xl text-center"
                    >
                      <div className="text-3xl mb-2">⚽</div>
                      <p className="font-medium">{sport}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <FacilitiesSection />

        {/* Specialized Facilities */}
        <motion.div variants={fadeIn} className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Specialized Facilities
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎭",
                title: "Auditorium",
                desc: "800-seat capacity with HD projection",
              },
              {
                icon: "🍲",
                title: "Cafeteria",
                desc: "Hygeinic multi-cuisine food court",
              },
              {
                icon: "🏥",
                title: "Medical Center",
                desc: "24/7 health care with ambulance",
              },
            ].map((facility, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="text-4xl mb-4">{facility.icon}</div>
                <h4 className="text-xl font-bold mb-2">{facility.title}</h4>
                <p className="text-gray-600">{facility.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hostel Facilities */}
        {/* <motion.div
          variants={fadeIn}
          className="bg-white p-8 rounded-2xl shadow-lg mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Residential Facilities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="list-disc pl-5 space-y-4 text-gray-700">
                {[
                  "Separate AC hostels for boys & girls",
                  "24/7 security & CCTV surveillance",
                  "Nutritious meals (4 times daily)",
                  "Common study rooms & WiFi zones",
                  "Laundry & housekeeping services",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2">🏠</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-100 rounded-xl p-4">
              <div className="aspect-video bg-white rounded-lg"></div>
              <p className="text-center mt-4 text-gray-600">Hostel Preview</p>
            </div>
          </div>
        </motion.div> */}

        {/* Transportation */}
        {/* <motion.div variants={fadeIn} className="bg-blue-50 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Transportation Network
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Key Features
              </h3>
              <ul className="list-disc pl-5 space-y-3 text-gray-700">
                {[
                  "GPS-enabled AC buses",
                  "Female attendants & first aid",
                  "Real-time tracking app",
                  "50+ pickup points",
                  "Annual safety audits",
                ].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Coverage Map
              </h3>
              <div className="bg-white p-4 rounded-xl shadow-md">
                <div className="aspect-video bg-blue-100 rounded-lg"></div>
                <p className="text-center mt-4 text-gray-600">
                  Transport Route Network
                </p>
              </div>
            </div>
          </div>
        </motion.div> */}

        {/* CTA Section */}
        <motion.div variants={fadeIn} className="text-center mt-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Experience Our Campus
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 text-xl">
              Schedule a campus tour today!
              <br />
              📞 +91 74610 38138 | 📧 motioneducareschool@gmail.com
            </p>
            {/* <button className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition">
              Book Campus Tour
            </button> */}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FacilitiesPage;
