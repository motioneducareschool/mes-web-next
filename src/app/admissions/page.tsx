"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function AdmissionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Admissions 2024-25
          </h1>
          <p className="text-xl text-gray-600">
            {` Begin your child's journey towards excellence`}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Admission Process Section */}
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Admission Process
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-lg">1</div>
                <div>
                  <h3 className="font-semibold">Registration</h3>
                  <p className="text-gray-600">Submit inquiry form below</p>
                </div>
              </div>
              {/* Add more steps similarly */}
            </div>

            <h3 className="text-xl font-bold mt-6 mb-4 text-blue-900">
              Documents Required
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Birth Certificate</li>
              <li>Previous School Report Card</li>
              <li>Transfer Certificate</li>
              <li>4 Passport-size Photographs</li>
              <li>Aadhar Card Copy</li>
            </ul>
          </motion.div>

          {/* Fee Summary Section */}
          <motion.div
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Admission Fee Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Registration Fee</span>
                <span className="font-semibold">₹100</span>
              </div>
              {/* Add other fee items */}
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>₹5,500</span>
                </div>
              </div>
            </div>
            <Link href="/fees">
              <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                View Complete Fee Structure
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Inquiry Form */}
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            className="rounded-2xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Admission Inquiry Form
            </h2>
            <form className="grid md:grid-cols-2 gap-6">
              <Input
                // label="Parent's Name"
                placeholder="Enter parent's full name"
                required
              />
              <Input
                // label="Email Address"
                type="email"
                placeholder="Enter email"
                required
              />
              <Input
                // label="Phone Number"
                placeholder="Enter phone number"
                required
              />
              <Input
                // label="Child's Name"
                placeholder="Enter child's name"
                required
              />
              <Input
                //   label="Date of Birth"
                type="date"
                required
              />
              <Input
                // label="Previous School"
                placeholder="Name of previous school"
              />
              <div className="md:col-span-2">
                <Textarea
                  //   label="Additional Information"
                  placeholder="Any special requirements or notes"
                  rows={4}
                />
              </div>
              <Button
                type="submit"
                className="md:col-span-2 bg-blue-600 hover:bg-blue-700"
              >
                Submit Inquiry
              </Button>
            </form>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className=" bg-blue-900 text-white rounded-2xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4">Contact Admissions</h2>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-blue-400" />
                  <address className="not-italic">
                    Kaila - Benar More Asthawan, Nalanda Bihar 803107
                  </address>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <a href="tel:+917461038138" className="hover:text-blue-400">
                    +91 74610 38138
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a
                    href="mailto:motioneducareschool@gmail.com"
                    className="hover:text-blue-400"
                  >
                    motioneducareschool@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 bg-white rounded-2xl shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Important Information
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Age Criteria</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Play Group: 2+ years</li>
                <li>Nursery: 3+ years</li>
                {/* Add more age criteria */}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Office Hours</h3>
              <p>
                Mon-Sat: 8:30 AM - 4:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
