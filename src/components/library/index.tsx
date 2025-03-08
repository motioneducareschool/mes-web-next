"use client";
import { motion } from "framer-motion";

const LibraryPage = () => {
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
          <h1 className="text-4xl font-bold mb-4">School Library</h1>
          <p className="text-xl">Gateway to Knowledge & Imagination</p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Key Stats */}
        <motion.div
          variants={stagger}
          className="grid sm:grid-cols-2 gap-6 mb-16"
        >
          {[
            { icon: "📚", title: "25,000+", subtitle: "Books" },
            // { icon: "💻", title: "15+", subtitle: "Online Databases" },
            // { icon: "📖", title: "500+", subtitle: "e-Journals" },
            { icon: "🕒", title: "8 AM - 6 PM", subtitle: "Daily Hours" },
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

        {/* Featured Collections */}
        <motion.div variants={fadeIn} className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Featured Collections
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "Academic Resources",
                items: [
                  "Reference Books",
                  "Competitive Exam",
                  "Research Papers",
                ],
                icon: "🎓",
              },
              {
                category: "Fiction",
                items: ["Classic Literature", "Young Adult", "Award Winners"],
                icon: "📖",
              },
              //   {
              //     category: "Digital Library",
              //     items: ["e-Books", "Online Journals", "Audiobooks"],
              //     icon: "💻",
              //   },
            ].map((collection, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="text-4xl mb-4">{collection.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  {collection.category}
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {collection.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Digital Resources */}
        {/* <motion.div
          variants={fadeIn}
          className="bg-blue-50 p-8 rounded-2xl mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Digital Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Online Access
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="mr-2">🌐</span>
                    <a href="#" className="text-blue-600 hover:underline">
                      Digital Library Portal
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">🔑</span>
                    Remote Access Available
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Research Tools
                </h3>
                <ul className="space-y-3">
                  <li>Plagiarism Checker</li>
                  <li>Citation Generator</li>
                  <li>Research Methodology Guides</li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Popular Databases
              </h3>
              <div className="space-y-4">
                {[
                  "JSTOR Academic Archive",
                  "National Digital Library",
                  "ScienceDirect",
                  "ProQuest Education",
                ].map((db, i) => (
                  <div key={i} className="flex items-center">
                    <span className="mr-2">📘</span>
                    {db}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div> */}

        {/* Borrowing Info */}
        <motion.div
          variants={fadeIn}
          className="bg-white p-8 rounded-2xl shadow-lg mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Borrowing Policy
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-50">
                <tr>
                  <th className="p-3 text-left">Member Type</th>
                  <th className="p-3">Books Allowed</th>
                  <th className="p-3">Loan Period</th>
                  <th className="p-3">Renewals</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: "Students",
                    books: 3,
                    period: "14 Days",
                    renewals: 1,
                  },
                  {
                    type: "Teachers",
                    books: 10,
                    period: "30 Days",
                    renewals: 3,
                  },
                  { type: "Staff", books: 5, period: "21 Days", renewals: 2 },
                ].map((policy, i) => (
                  <tr key={i} className="border-b border-blue-50">
                    <td className="p-3 font-medium">{policy.type}</td>
                    <td className="p-3 text-center">{policy.books}</td>
                    <td className="p-3 text-center">{policy.period}</td>
                    <td className="p-3 text-center">{policy.renewals}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Library Events */}
        <motion.div variants={fadeIn} className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                date: "15 Apr",
                title: "Book Fair",
                desc: "Annual used book exchange",
              },
              {
                date: "23 Apr",
                title: "Author Talk",
                desc: "Meet award-winning author",
              },
              {
                date: "2 May",
                title: "Reading Challenge",
                desc: "Summer reading kickoff",
              },
            ].map((event, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {event.date}
                </div>
                <h4 className="text-xl font-bold mb-2">{event.title}</h4>
                <p className="text-gray-600">{event.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gallery & Search */}
        {/* <motion.div variants={fadeIn} className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Library Search
            </h3>
            <input
              type="text"
              placeholder="Search our catalog..."
              className="w-full p-3 border border-blue-200 rounded-lg mb-4"
            />
            <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
              Search
            </button>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Library Gallery
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="aspect-square bg-blue-100 rounded-lg"
                ></div>
              ))}
            </div>
          </div>
        </motion.div> */}
      </div>
    </motion.div>
  );
};

export default LibraryPage;
