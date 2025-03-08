"use client";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function FeeStructure() {
  const schoolFees = {
    oneTime: [
      { name: "Registration Fees", amount: 100 },
      { name: "Admission Fees", amount: 2000 },
      { name: "Miscellaneous Fees", amount: 1000 },
      { name: "Examination Fees", amount: 2000 },
      { name: "Tie, Belt, Diary, ID Card & Blood Testing", amount: 400 },
    ],
    monthly: [
      { class: "Nursery", amount: 500 },
      { class: "L.K.G", amount: 600 },
      { class: "U.K.G", amount: 700 },
      { class: "I", amount: 800 },
      { class: "II", amount: 800 },
      { class: "III", amount: 900 },
      { class: "IV", amount: 900 },
      { class: "V", amount: 1000 },
      { class: "VI", amount: 1000 },
      { class: "VII", amount: 1100 },
      { class: "VIII", amount: 1100 },
      { class: "IX", amount: 1200 },
      { class: "X", amount: 1200 },
    ],
    transport: [
      { distance: "0-3 km", amount: 400 },
      { distance: "3-5 km", amount: 500 },
      { distance: "5-7 km", amount: 600 },
    ],
  };

  const hostelFees = {
    admission: 2000,
    monthly: 5000,
    security: 2500,
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12 px-4 font-medium sm:text-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">
            Fee Structure 2024-25
          </h1>

          <Tabs defaultValue="school" className="w-full">
            <TabsList className="grid grid-cols-2 w-full max-w-xs mx-auto mb-8 ">
              <TabsTrigger value="school" className="sm:text-lg">
                School Fees
              </TabsTrigger>
              <TabsTrigger value="hostel" className="sm:text-lg">
                Hostel Fees
              </TabsTrigger>
            </TabsList>

            {/* School Fees Tab */}
            <TabsContent value="school">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8"
              >
                {/* One-time Charges */}
                <motion.div
                  initial={{ x: -50 }}
                  animate={{ x: 0 }}
                  className="bg-white rounded-2xl  p-6"
                >
                  <h2 className="text-2xl font-bold mb-4 text-blue-900">
                    One-time Charges (Play Group to X)
                  </h2>
                  <div className="space-y-3">
                    {schoolFees.oneTime.map((fee, index) => (
                      <motion.div
                        key={fee.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex justify-between items-center bg-blue-50 p-4 rounded-lg"
                      >
                        <span>{fee.name}</span>
                        <span className="font-semibold">₹{fee.amount}</span>
                      </motion.div>
                    ))}
                    <div className="flex justify-between items-center bg-blue-900 text-white p-4 rounded-lg">
                      <span className="font-bold">Total</span>
                      <span className="font-bold">₹5,500</span>
                    </div>
                  </div>
                </motion.div>

                {/* Monthly Fees */}
                <motion.div
                  initial={{ x: 50 }}
                  animate={{ x: 0 }}
                  className="bg-white rounded-2xl  p-6"
                >
                  <h2 className="text-2xl font-bold mb-4 text-blue-900">
                    Monthly Tuition Fees
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {schoolFees.monthly.map((fee, index) => (
                      <motion.div
                        key={fee.class}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-blue-50 p-4 rounded-lg text-center"
                      >
                        <div className="font-semibold">Class {fee.class}</div>
                        <div className="text-blue-600">₹{fee.amount}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Transport Fees */}
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  className="bg-white rounded-2xl  p-6"
                >
                  <h2 className="text-2xl font-bold mb-4 text-blue-900">
                    Transportation Fees
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {schoolFees.transport.map((fee, index) => (
                      <motion.div
                        key={fee.distance}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-blue-50 p-4 rounded-lg text-center"
                      >
                        <div className="font-semibold">{fee.distance}</div>
                        <div className="text-blue-600">₹{fee.amount}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>

            {/* Hostel Fees Tab */}
            <TabsContent value="hostel">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-2xl  p-6 space-y-6"
              >
                <motion.div
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  className="bg-teal-50 p-6 rounded-xl"
                >
                  <h2 className="text-2xl font-bold mb-4 text-teal-900">
                    Hostel Admission Fees
                  </h2>
                  <div className="text-3xl font-bold text-teal-600">
                    ₹{hostelFees.admission.toLocaleString()}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  className="bg-teal-50 p-6 rounded-xl"
                >
                  <h2 className="text-2xl font-bold mb-4 text-teal-900">
                    Monthly Hostel Fees
                  </h2>
                  <div className="text-3xl font-bold text-teal-600">
                    ₹{hostelFees.monthly.toLocaleString()}
                  </div>
                  <p className="text-gray-600 mt-2">
                    (Includes meals, accommodation, and laundry services)
                  </p>
                </motion.div>

                <motion.div
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  className="bg-teal-50 p-6 rounded-xl"
                >
                  <h2 className="text-2xl font-bold mb-4 text-teal-900">
                    Security Deposit
                  </h2>
                  <div className="text-3xl font-bold text-teal-600">
                    ₹{hostelFees.security.toLocaleString()}
                  </div>
                  <p className="text-gray-600 mt-2">
                    (Refundable at the time of withdrawal)
                  </p>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8"
          >
            {/* <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Download Complete Fee Structure
            </Button> */}
            <p className="text-gray-600 mt-4">
              For payment plans or queries, contact:
              <br />
              motioneducareschool@gmail.com | +91 74610 38138
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
