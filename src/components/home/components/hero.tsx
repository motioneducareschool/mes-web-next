"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const slides = [
    {
      title: "Motion Educare School",
      subtitle: "Holistic Education",
      description:
        "Nurturing young minds from Playgroup to Class XII with CBSE excellence",
      link: "/academics",
      ctaText: "Explore Academics",
      image: "/images/hero-main.jpeg",
      emblem: "🎓",
      bgGradient: "from-blue-900/90 to-emerald-900/50",
    },
    {
      title: "Residential Excellence",
      subtitle: "Home Away From Home",
      description: "Secure hostel facilities with modern amenities & 24/7 care",
      link: "/hostel",
      ctaText: "View Hostels",
      image: "/images/hero-dev.jpeg",
      emblem: "🏡",
      bgGradient: "from-amber-900/90 to-rose-900/50",
    },
    {
      title: "Competitive Edge",
      subtitle: "Exam Preparation",
      description: "Specialized coaching for Sainik, Navodaya, and NTSE exams",
      link: "/careers",
      ctaText: "See Programs",
      image: "/images/hero-comp.jpeg",
      emblem: "🎯",
      bgGradient: "from-green-900/90 to-cyan-900/50",
    },
    {
      title: "Expert Faculty",
      subtitle: "Qualified Mentors",
      description: "25+ experienced educators with proven track records",
      ctaText: "Meet Faculty",
      link: "/about",
      image: "/images/hero-faculty.jpeg",
      emblem: "👩🏫",
      bgGradient: "from-purple-900/90 to-pink-900/50",
    },
    {
      title: "All Round Development",
      subtitle: "Beyond Academics",
      description: "Sports, arts, and leadership programs for holistic growth",
      link: "/facilities",
      ctaText: "View Facilities",
      image: "/images/hero-all.jpeg",
      emblem: "🏆",
      bgGradient: "from-red-900/90 to-orange-900/50",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentSlide(
      (prev) => (prev + newDirection + slides.length) % slides.length
    );
  };

  return (
    <div className="relative md:min-h-[93vh] min-h-[83vh] overflow-hidden">
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="relative h-full">
            <div
              className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgGradient} z-10`}
            />
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="max-w-2xl text-white space-y-2"
                >
                  <div className="text-6xl mb-4">
                    {slides[currentSlide].emblem}
                  </div>
                  <h1 className="text-3xl md:text-6xl font-bold leading-tight">
                    {slides[currentSlide].title}
                  </h1>
                  <motion.div
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                    className="text-xl md:text-2xl text-orange-300 font-semibold"
                  >
                    {slides[currentSlide].subtitle}
                  </motion.div>
                  <p className="text-base md:text-xl leading-relaxed max-w-xl">
                    {slides[currentSlide].description}
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href={slides[currentSlide].link}>
                      <Button
                        size="lg"
                        className="bg-orange-500 hover:bg-orange-600 text-white md:text-lg px-4 py-2 rounded-full shadow-lg"
                      >
                        {slides[currentSlide].ctaText}
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            whileHover={{ scale: 1.2 }}
            className={`w-4 h-4 rounded-full transition-all ${
              currentSlide === index
                ? "bg-orange-500 scale-125 shadow-lg"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      {/* <motion.button
        onClick={() => navigate(-1)}
        whileHover={{ scale: 1.1 }}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm"
      >
        <ChevronLeft size={40} className="text-white/90 hover:text-white" />
      </motion.button>
      <motion.button
        onClick={() => navigate(1)}
        whileHover={{ scale: 1.1 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm"
      >
        <ChevronRight size={40} className="text-white/90 hover:text-white" />
      </motion.button> */}
    </div>
  );
};

export default HeroCarousel;
