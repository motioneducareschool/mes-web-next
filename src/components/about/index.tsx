"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white"
    >
      {/* Hero Section */}
      <div className="py-16 bg-blue-600 text-white">
        <motion.div
          variants={itemVariants}
          className="container mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl">{`Nurturing Tomorrow's Leaders Since 2021`}</p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* School Introduction */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Welcome to Our School
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {`Established in 2021, Motion Educare School has quickly emerged as
              a premier educational institution offering quality education from
              Class I to X. Our progressive approach combines academic
              excellence with holistic development, preparing students to thrive
              in a rapidly evolving world.`}
            </p>
          </motion.div>

          {/* Mission and Vision */}
          <motion.div variants={itemVariants}>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 mb-6">
                {`To empower students with knowledge, skills, and values that
                foster intellectual curiosity, critical thinking, and social
                responsibility.`}
              </p>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700">
                {`To be a nurturing ground for young minds where innovation meets
                tradition, creating global citizens rooted in ethical values.`}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-4 gap-8 mt-16"
        >
          {[
            {
              icon: "🎓",
              title: "Academic Excellence",
              text: "CBSE-affiliated curriculum with innovative teaching methods",
            },
            {
              icon: "🏫",
              title: "Modern Infrastructure",
              text: "Smart classrooms & well-equipped labs",
            },
            {
              icon: "🏆",
              title: "Holistic Development",
              text: "Sports, arts, and leadership programs",
            },
            {
              icon: "👩🏫",
              title: "Expert Faculty",
              text: "Dedicated and qualified teaching staff",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold text-blue-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-700">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Principal's Message */}
        <motion.div
          variants={itemVariants}
          className="mt-16 bg-blue-50 p-8 rounded-lg"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            {`Principal's Message`}
          </h2>
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <Image
                src="/images/principal.jpeg"
                alt="Principal"
                width={200}
                height={200}
                className="w-32 h-32 bg-blue-200 rounded-full"
              />
            </div>
            <p className="text-gray-700 italic leading-relaxed">
              {`"At Motion Educare, we believe every child is unique. Our
              committed faculty strives to create a stimulating environment
              where students can discover their potential and develop into
              confident, compassionate individuals. We emphasize both academic
              rigor and character building to prepare our students for the
              challenges of the 21st century."`}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
