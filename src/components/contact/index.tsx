"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Add form submission logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Animated Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-96 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-cyan-700/80">
          <img
            src="/contact-bg.jpg"
            alt="Contact Background"
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <div className="space-y-4">
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="text-4xl md:text-6xl font-bold text-white"
            >
              {` Let's Connect`}
            </motion.h1>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
              {`Reach out to us for admissions, inquiries, or any questions about
              our programs.`}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Interactive Form Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-white rounded-2xl  p-8 border border-blue-100"
          >
            <div className="mb-8">
              <div className="bg-blue-100 w-fit p-4 rounded-xl mb-4">
                <Send className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Send Your Message
              </h2>
              <p className="text-gray-600">
                We typically respond within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <Input
                    {...register("name", { required: true })}
                    className="peer h-14"
                    placeholder="Full Name * "
                  />
                  {/* <label className="absolute left-4 top-3.5 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-focus:top-3.5 peer-focus:text-blue-600">
                    Full Name *
                  </label> */}
                  {errors.name && (
                    <span className="text-red-500 text-sm">Required field</span>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <Input
                      {...register("email", { required: true })}
                      className="peer h-14"
                      placeholder="Email Address * "
                      type="email"
                    />
                    {/* <label className="absolute left-4 top-3.5 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-focus:top-3.5 peer-focus:text-blue-600">
                      Email Address *
                    </label> */}
                  </div>

                  <div className="relative">
                    <Input
                      {...register("phone")}
                      className="peer h-14"
                      placeholder="Phone Number "
                    />
                    {/* <label className="absolute left-4 top-3.5 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-focus:top-3.5 peer-focus:text-blue-600">
                      Phone Number
                    </label> */}
                  </div>
                </div>

                <div className="relative">
                  <select
                    {...register("inquiryType", { required: true })}
                    className="w-full p-4 border rounded-xl appearance-none h-14 bg-white"
                  >
                    <option value="">Select Inquiry Type *</option>
                    <option value="admission">Admission Inquiry</option>
                    <option value="academic">Academic Programs</option>
                    <option value="hostel">Hostel Facilities</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-4 top-4 text-gray-400">▼</div>
                </div>

                <div className="relative">
                  <Textarea
                    {...register("message", { required: true })}
                    className="peer h-32 pt-4"
                    placeholder=" Your Message * "
                  />
                  {/* <label className="absolute left-4 top-3.5 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-focus:top-3.5 peer-focus:text-blue-600">
                    Your Message *
                  </label> */}
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full h-14 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-lg rounded-xl"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Information Section */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <div className="bg-white p-6 rounded-2xl border border-blue-100 hover:border-blue-200 transition-all">
                <div className=" w-fit rounded-lg mb-1 flex justify-center items-center gap-1">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold">Our Campus</h3>
                </div>
                <p className="text-gray-600">
                  Kaila Benar More
                  <br />
                  Bihar - 803107
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl  border border-blue-100 hover:border-blue-200 transition-all">
                <div className="w-fit rounded-lg mb-1 flex justify-center items-center gap-1">
                  <Clock className="w-6 h-6 text-cyan-600" />
                  <h3 className="text-xl font-semibold ">Office Hours</h3>
                </div>
                <p className="text-gray-600">
                  Mon-Sat: 8 AM - 6 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </motion.div>

            {/* Live Map Section */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="h-96 rounded-2xl overflow-hidden border-2 border-white"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.125850274466!2d77.49023331507805!3d28.450414582483273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea64d8f258a5%3A0x6e67546e9a6650f8!2sKnowledge%20Park%20III%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201310!5e0!3m2!1sen!2sin!4v1625645678900!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen
                loading="lazy"
              />
            </motion.div>

            {/* Quick Contact Section */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-blue-900 text-white rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-2">Direct Connections</h3>
              <div className="space-y-4 grid lg:grid-cols-2">
                <Link
                  href="tel:+911234567890"
                  className="flex items-center gap-4 group"
                >
                  <div className="bg-white/10 p-3 rounded-lg group-hover:bg-white/20 transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Admission Helpline</p>
                    <p>+91 12345 67890</p>
                  </div>
                </Link>

                <Link
                  href="mailto:motioneducareschool@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="bg-white/10 p-3 rounded-lg group-hover:bg-white/20 transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">General Inquiry</p>
                    <p>motioneducareschool@gmail.com</p>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {[
            { number: "5+", label: "Years Experience" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "24h", label: "Response Time" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl  text-center ">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
