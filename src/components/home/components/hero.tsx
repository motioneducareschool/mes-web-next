"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const carouselData = [
  {
    id: 1,
    image: "/images/hero1.jpeg",
  },
  {
    id: 2,
    image: "/images/hero2.jpeg",
  },
  {
    id: 3,
    image: "/images/hero3.jpeg",
  },
  {
    id: 4,
    image: "/images/hero4.jpeg",
  },
  // Add more items as needed
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length
    );
  };

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[40vh] overflow-hidden bg-gray-900 container m-auto">
      {/* Main carousel container */}
      <div className="relative w-full h-full">
        {carouselData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
              index === currentSlide ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <Image
              src={slide.image}
              layout="fill"
              objectFit="cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}

        {/* Navigation buttons */}
        <div
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-10 w-10" />
        </div>

        <div
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20"
          onClick={nextSlide}
        >
          <ChevronRight className="h-10 w-10" />
        </div>

        {/* Slide indicators */}
        {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {carouselData.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default HeroCarousel;
