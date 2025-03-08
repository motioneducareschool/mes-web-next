import Link from "next/link";
import { motion } from "framer-motion";

const facilities = [
  {
    title: "Academic Excellence",
    description:
      "Discover our state-of-the-art academic facilities and innovative learning programs",
    icon: "🎓",
    link: "/academics",
    buttonText: "Explore Academics →",
    features: [
      "Smart Classrooms",
      "Advanced Science Labs",
      "Research Facilities",
    ],
  },
  {
    title: "Residential Life",
    description: "Experience our comfortable and secure hostel facilities",
    icon: "🏠",
    link: "/hostel",
    buttonText: "Explore Hostels →",
    features: ["AC Accommodation", "Nutritious Meals", "24/7 Security"],
  },
  {
    title: "Transport Facilities",
    description: "Safe and reliable school transport service for students",
    icon: "🚌",
    link: "/transport",
    buttonText: "Explore Transport →",
    features: ["GPS Tracking", "Trained Drivers", "Hygienic & Safe Buses"],
  },
];

const fadeIn = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const FacilitiesSection = () => {
  return (
    <motion.div variants={fadeIn} className="sm:py-16 py-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
        Explore Our Key Facilities
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {facilities.map((facility, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-xl shadow-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-50 opacity-10"></div>
            <div className="relative">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{facility.icon}</span>
                <h3 className="text-2xl font-bold text-blue-900">
                  {facility.title}
                </h3>
              </div>
              <p className="text-gray-700 mb-6">{facility.description}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                {facility.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <Link href={facility.link}>
                <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
                  {facility.buttonText}
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FacilitiesSection;
