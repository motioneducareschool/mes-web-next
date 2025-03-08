"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroCarousel from "@/components/home/components/hero";
import { NumberTicker } from "@/components/magicui/number-ticker";
import Link from "next/link";
import { NoticeBoard } from "@/components/notice";
import { PrincipalMessage } from "@/components/home/components/principalMessage";
import NavigationGrid from "@/components/navigation";
import { Marquee } from "@/components/magicui/marquee";
import { VideoGallery } from "@/components/youtubeVideo";
import { reviewsData } from "@/constant/reviews";

const FeatureCard = ({
  title,
  desc,
  icon,
  color,
}: {
  title: string;
  desc: string;
  icon: string;
  color: string;
}) => (
  <motion.div
    whileHover={{ y: -10 }}
    className={`p-8 rounded-2xl ${color} text-white shadow-xl`}
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="opacity-90">{desc}</p>
  </motion.div>
);

const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <div className="text-center mb-8">
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-4xl font-bold text-gray-800 mb-4"
    >
      {title}
    </motion.h2>
    <p className="text-gray-600 text-lg">{subtitle}</p>
  </div>
);

export default function AcademicProgram() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-100 to-cyan-100">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Academic Spectrum"
          subtitle="Comprehensive programs for all age groups"
        />

        <div className="grid md:grid-cols-4 gap-6 ">
          {[
            {
              age: "2-5 Years",
              program: "Play School",
              link: "/academics/play-school",
              color: "bg-pink-500",
            },
            {
              age: "6-10 Years",
              program: "Primary School",
              link: "/academics/primary-school",
              color: "bg-blue-500",
            },
            {
              age: "11-14 Years",
              program: "Middle School",
              link: "/academics/middle-school",
              color: "bg-green-500",
            },
            {
              age: "15-18 Years",
              program: "Senior School",
              link: "/academics/senior-school",
              color: "bg-purple-500",
            },
          ].map((item, i) => (
            <Link href={item.link} key={i + "program12"}>
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`${item.color} text-white p-8 rounded-2xl text-center shadow-lg`}
              >
                <div className="mt-4 text-4xl">
                  {["🎨", "📚", "🔬", "🎓"][i]}
                </div>
                <p className="opacity-90">{item.age}</p>
                <h3 className="text-2xl font-bold mb-2">{item.program}</h3>

                <Button variant={"outline"} className="mt-4 text-black">
                  Explore More
                </Button>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
