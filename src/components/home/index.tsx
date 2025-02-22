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

export default function HomePage() {
  const stats = [
    { label: "Years of Excellence", value: 5, color: "bg-blue-100" },
    { label: "Student Success Rate", value: 100, color: "bg-green-100" },
    { label: "Qualified Teachers", value: 50, color: "bg-pink-100" },
    { label: "Total Students", value: 500, color: "bg-purple-100" },
  ];

  //   const demo=[
  //     { title: "STEM Labs", icon: "🔬", color: "bg-blue-100" },
  //     { title: "Sports Academy", icon: "⚽", color: "bg-green-100" },
  //     { title: "Art Studio", icon: "🎨", color: "bg-pink-100" },
  //     { title: "Auditorium", icon: "🎭", color: "bg-purple-100" },
  //   ]
  return (
    <div className="bg-gray-50">
      <HeroCarousel />

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <PrincipalMessage />
          <NoticeBoard />
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20 bg-gradient-to-br from-blue-100 to-cyan-100">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Academic Spectrum"
            subtitle="Comprehensive programs for all age groups"
          />

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                age: "2-5 Years",
                program: "Play School",
                link: "/school/play-school",
                color: "bg-pink-500",
              },
              {
                age: "6-10 Years",
                program: "Primary School",
                link: "/school/primary-school",
                color: "bg-blue-500",
              },
              {
                age: "11-14 Years",
                program: "Middle School",
                link: "/school/middle-school",
                color: "bg-green-500",
              },
              {
                age: "15-18 Years",
                program: "Senior School",
                link: "/school/senior-school",
                color: "bg-purple-500",
              },
            ].map((item, i) => (
              <Link href={item.link} key={i + "program12"}>
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className={`${item.color} text-white p-8 rounded-2xl text-center shadow-lg`}
                >
                  <h3 className="text-2xl font-bold mb-2">{item.program}</h3>
                  <p className="opacity-90">{item.age}</p>
                  <div className="mt-4 text-4xl">
                    {["🎨", "📚", "🔬", "🎓"][i]}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Why Choose Us?"
            subtitle="Discover our unique approach to modern education"
          />

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon="🎯"
              title="Exam Excellence"
              desc="Specialized coaching for Sainik, Navodaya, and competitive exams"
              color="bg-orange-500"
            />
            <FeatureCard
              icon="🏠"
              title="Premium Hostels"
              desc="Safe & modern residential facilities with 24/7 care "
              color="bg-teal-500"
            />
            <FeatureCard
              icon="💡"
              title="Smart Learning"
              desc="Technology-integrated classrooms with AI-assisted learning"
              color="bg-purple-500"
            />
          </div>
        </div>
      </section>

      <NavigationGrid />
      {/* Campus Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our World-Class Campus"
            subtitle="Where learning meets innovation"
          />

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ rotate: -2 }}
              className="relative h-96 rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/our-campus.jpeg"
                alt="Campus View"
                fill
                className="object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">Our Campus</h3>
              </div> */}
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 0.95, rotate: 2 }}
                  className={`${stat.color} p-6 rounded-2xl justify-center items-center text-center flex flex-col`}
                >
                  <div className="text-3xl font-bold ¥ mb-2">
                    <NumberTicker value={stat.value} /> {"+"}
                  </div>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            {/* <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <h3 className="text-3xl font-bold text-green-600 mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      <VideoGallery />

      {/* Testimonials */}
      <section className="py-20 bg-cyan-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Parent & Student Voices"
            subtitle="Hear what our community says"
          />

          <Marquee pauseOnHover className="[--duration:30s]">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="bg-white p-2 rounded-2xl max-w-[350px] border-[1px] border-sky-100"
              >
                <div className="flex items-center gap-4 mb-1">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    {["👩", "👨", "👩"][i - 1]}
                  </div>
                  <div>
                    <h4 className="font-bold">Mrs. Sharma</h4>
                    <p className="text-sm text-gray-500">
                      Parent of Class VIII Student
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {` The residential program transformed my child into a confident
                  individual. The Sainik School preparation helped secure
                  admission effortlessly.`}
                </p>
              </motion.div>
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:30s]">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="bg-white p-2 rounded-2xl max-w-[350px] border-[1px] border-sky-100"
              >
                <div className="flex items-center gap-4 mb-1">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    {["👩", "👨", "👩"][i - 1]}
                  </div>
                  <div>
                    <h4 className="font-bold">Mrs. Sharma</h4>
                    <p className="text-sm text-gray-500">
                      Parent of Class VIII Student
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {` The residential program transformed my child into a confident
                  individual. The Sainik School preparation helped secure
                  admission effortlessly.`}
                </p>
              </motion.div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="text-4xl font-bold mb-6"
          >
            Ready for Educational Excellence?
          </motion.h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our family of 2000+ successful students and embark on a
            transformative learning journey
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            {/* <Button variant="secondary" size="lg" className="rounded-full px-8">
              Apply Now
            </Button> */}
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8 border-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
