"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import { socialLinks } from "@/constant/social-links";
import Image from "next/image";
import { ShineBorder } from "../magicui/shine-border";

const LaunchPage = () => {
  const runConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  useEffect(() => {
    runConfetti();
  }, []);

  return (
    <div className="absolute top-0 z-50  w-full min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900 text-white overflow-hidden">
      {/* Animated Background Particles */}

      <div className="container mx-auto px-2  py-4 sm:py-16 flex flex-col items-center justify-center min-h-screen relative z-10">
        <AnimatePresence>
          {/* Animated School Logo */}
          <motion.div
            initial={{ rotateY: 180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            whileHover={{ scale: 0.95, rotate: 2 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center border-2  shadow-lg shadow-cyan-500/20">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full blur opacity-50 group-hover:opacity-70 transition duration-500"></div>
              <Image
                src="/images/logo.jpeg"
                alt="logo"
                className="absolute object-cover inset-0 rounded-full"
                fill
                // width={50}
                // height={50}
              />
            </div>
          </motion.div>

          {/* School Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-center"
          >
            <div className="flex gap-2 justify-center items-center">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400">
                Motion Educare School
              </h1>
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="hidden sm:text-3xl md:text-5xl"
              >
                🚀
              </motion.span>
            </div>

            <p className="text-cyan-200 text-lg mt-2 font-light">
              Redefining Education Since 2021
            </p>
          </motion.div>

          {/* Launch Card */}
          <motion.div
            onClick={runConfetti}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative mb-12 cursor-pointer"
          >
            {/* <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-green-500 rounded-2xl blur transition duration-500"></div> */}

            <ShineBorder
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="mb-4 text-4xl"
                >
                  ⏳
                </motion.div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Launching Soon!
                </h2>
                <div className="mt-4 flex items-center gap-4">
                  <span className="text-cyan-300 text-xl">🎯 March 2025</span>
                </div>
              </div>
            </ShineBorder>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid md:grid-cols-3 gap-8 mb-12 w-full max-w-5xl"
          >
            {[
              {
                icon: "🏫",
                title: "Stay Connected",
                text: "Bridging the gap between parents, students, and teachers through digital updates.",
              },
              {
                icon: "📢",
                title: "Important School Updates",
                text: "Get notified about holidays, exam schedules, and fee reminders instantly.",
              },
              {
                icon: "🎓",
                title: "Future Ready Education",
                text: "Preparing for a seamless transition to smart classrooms and e-learning resources.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all"
              >
                <div className="text-4xl mb-4 animate-bounce">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Animated Progress Ribbon */}
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent absolute hidden md:block bottom-20"
          />
        </AnimatePresence>

        {/* Floating Social Links */}
        <motion.div
          className="fixed right-1 sm:right-6 bottom-6 flex flex-col gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {socialLinks.map((social, i) => (
            <Link href={social.link} target="_blank" key={i}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/20 cursor-pointer shadow-lg hover:shadow-cyan-400/20"
              >
                <span className="text-2xl">{social.icon}</span>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LaunchPage;
