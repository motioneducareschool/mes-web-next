"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const fadeIn = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const faqCategories = [
    {
      title: "Admissions",
      icon: "📝",
      questions: [
        {
          question: "What is the admission process?",
          answer:
            "Admissions are open from January-March. Process includes application submission, entrance test (for grades IV-X), and parent interaction.",
        },
        {
          question: "What documents are required?",
          answer:
            "Birth certificate, previous year report card, address proof, 4 passport photos, and transfer certificate (if applicable).",
        },
      ],
    },
    {
      title: "Academics",
      icon: "📚",
      questions: [
        {
          question: "Which curriculum do you follow?",
          answer:
            "We follow the CBSE curriculum with enhanced focus on STEM education and competitive exam preparation.",
        },
        {
          question: "Do you provide competitive exam coaching?",
          answer:
            "Yes, we offer integrated coaching for JEE/NEET/NTSE/Olympiads through our specialized academic program.",
        },
      ],
    },
    {
      title: "Facilities",
      icon: "🏫",
      questions: [
        {
          question: "What sports facilities are available?",
          answer:
            "Basketball court, football field, table tennis, badminton, yoga studio, and indoor games room.",
        },
        {
          question: "Is hostel accommodation available?",
          answer:
            "Yes, we offer separate AC hostels for boys and girls with 24/7 security and medical facilities.",
        },
      ],
    },
    {
      title: "Fees & Payments",
      icon: "💳",
      questions: [
        {
          question: "What payment methods are accepted?",
          answer:
            "We accept online payments (UPI/Net Banking), cheques, and demand drafts. Installment plans available.",
        },
        {
          question: "Are scholarships available?",
          answer:
            "Merit-based scholarships offered to top 5% students in entrance tests and annual exams.",
        },
      ],
    },
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
          <h1 className="text-4xl font-bold mb-4">FAQs</h1>
          <p className="text-xl">Frequently Asked Questions</p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Search Bar */}
        {/* <motion.div variants={fadeIn} className="mb-8">
          <div className="bg-white p-2 rounded-xl shadow-md">
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full p-4 text-lg border-none rounded-xl focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </motion.div> */}

        {/* FAQ Categories */}
        {faqCategories.map((category, catIndex) => (
          <motion.div key={catIndex} variants={fadeIn} className="mb-8">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-4">{category.icon}</span>
              <h2 className="text-2xl font-bold text-blue-900">
                {category.title}
              </h2>
            </div>

            {/* Questions Accordion */}
            <div className="space-y-4">
              {category.questions.map((item, index) => {
                const uniqueIndex = `${catIndex}-${index}`;
                return (
                  <motion.div
                    key={uniqueIndex}
                    variants={fadeIn}
                    className="bg-white rounded-xl shadow-sm"
                  >
                    <button
                      onClick={() =>
                        setActiveIndex(
                          //@ts-ignore
                          activeIndex === uniqueIndex ? null : uniqueIndex
                        )
                      }
                      className="flex justify-between items-center w-full p-6 text-left"
                    >
                      <h3 className="text-lg font-medium text-blue-900">
                        {item.question}
                      </h3>
                      <motion.div
                        animate={{
                          rotate: activeIndex === uniqueIndex ? 180 : 0,
                        }}
                        className="ml-4"
                      >
                        ▼
                      </motion.div>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: activeIndex === uniqueIndex ? "auto" : 0,
                        opacity: activeIndex === uniqueIndex ? 1 : 0,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t border-blue-50">
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}

        {/* Contact CTA */}
        <motion.div
          variants={fadeIn}
          className="mt-16 text-center bg-blue-800 text-white p-8 rounded-2xl"
        >
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-lg mb-6">
            Contact our support team:
            <br />
            📞 +91 74610 38138
            <br />
            📧 motioneducareschool@gmail.com
          </p>
          <button className="bg-white text-blue-800 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
            Ask a Question
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FAQPage;
