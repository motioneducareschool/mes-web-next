// components/QuickLinksGrid.tsx
import Link from "next/link";
import { motion } from "framer-motion";

const quickLinks = [
  { title: "About Us", icon: "🏫", link: "/about", color: "text-blue-600" },
  {
    title: "Admissions",
    icon: "🎓",
    link: "/admissions",
    color: "text-purple-600",
  },
  {
    title: "Academics",
    icon: "📚",
    link: "/academics",
    color: "text-green-600",
  },
  { title: "Hostel", icon: "🏠", link: "/hostel", color: "text-orange-600" },
  { title: "Fees", icon: "💰", link: "/fees", color: "text-amber-600" },
  { title: "Careers", icon: "👩💼", link: "/careers", color: "text-cyan-600" },
  {
    title: "Transport",
    icon: "🚌",
    link: "/transport",
    color: "text-lime-600",
  },
  { title: "Gallery", icon: "📸", link: "/gallery", color: "text-pink-600" },
  { title: "Results", icon: "📈", link: "/results", color: "text-emerald-600" },
  {
    title: "Timetables",
    icon: "⏱️",
    link: "/timetables",
    color: "text-indigo-600",
  },
  { title: "Calendar", icon: "📅", link: "/calendar", color: "text-red-600" },
  { title: "Contact", icon: "📞", link: "/contact", color: "text-rose-600" },
  // { title: "Alumni", icon: "👨🎓", link: "/alumni", color: "text-violet-600" },
  {
    title: "Facilities",
    icon: "🌳🚌",
    link: "/facilities",
    color: "text-amber-600",
  },
  { title: "Library", icon: "📖", link: "/library", color: "text-sky-600" },
  // { title: "Events", icon: "🎪", link: "/events", color: "text-fuchsia-600" },
  { title: "Labs", icon: "🔬", link: "/labs", color: "text-fuchsia-600" },
];

export default function NavigationGrid() {
  return (
    <section className="bg-gradient-to-r px-4 py-12 from-blue-500/50 to-emerald-300/30">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Explore More
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need in one place
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {quickLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -5,
                scale: 1.05,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={link.link}
                className="group h-full flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-transparent relative overflow-hidden"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Animated Underline */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />

                <span
                  className={`text-4xl mb-3 transition-transform ${link.color} group-hover:scale-110`}
                >
                  {link.icon}
                </span>
                <h3 className="text-lg font-semibold text-gray-800 text-center group-hover:scale-110">
                  {link.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional Quick Action Bar */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          {[
            // { title: "Downloads", icon: "📥", link: "/downloads" },
            // { title: "Parent Portal", icon: "👨👩👧", link: "/parents" },
            { title: "Frequently Asked Questions", icon: "❓", link: "/faqs" },
          ].map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <Link href={link.link} className="flex items-center gap-2">
                <span className="text-2xl">{link.icon}</span>
                <span className="font-medium text-gray-700">{link.title}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
