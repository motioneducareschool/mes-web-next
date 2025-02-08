"use client";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const schoolFees = {
  admission: {
    playgroup: 15000,
    nursery: 14000,
    kg: 13000,
    "I-V": 12000,
    "VI-VIII": 11000,
    "IX-XII": 10000,
  },
  monthly: {
    playgroup: 8000,
    nursery: 7500,
    kg: 7000,
    "I-V": 6500,
    "VI-VIII": 6000,
    "IX-XII": 5500,
  },
  others: {
    uniform: 5000,
    books: 3000,
    activities: 2000,
  },
};

const hostelFees = {
  admission: 25000,
  monthly: 15000,
  security: 10000,
};

export default function FeeStructure() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">
          Fee Structure
        </h1>

        <Tabs defaultValue="school" className="w-full">
          <TabsList className="grid grid-cols-2 w-full max-w-xs mx-auto mb-8">
            <TabsTrigger value="school">School Fees</TabsTrigger>
            <TabsTrigger value="hostel">Hostel Fees</TabsTrigger>
          </TabsList>

          {/* School Fees Tab */}
          <TabsContent value="school">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {Object.entries(schoolFees).map(([category, fees], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-blue-50 p-6 rounded-xl"
                  >
                    <h2 className="text-2xl font-bold mb-4 text-blue-900 capitalize">
                      {category} Fees
                    </h2>
                    <div className="space-y-3">
                      {Object.entries(fees).map(([grade, amount]) => (
                        <div
                          key={grade}
                          className="flex justify-between items-center bg-white p-3 rounded-lg"
                        >
                          <span className="font-medium capitalize">
                            {grade}
                          </span>
                          <span className="text-blue-600">
                            ₹{amount.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Hostel Fees Tab */}
          <TabsContent value="hostel">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(hostelFees).map(([category, amount], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-teal-50 p-6 rounded-xl"
                  >
                    <h2 className="text-2xl font-bold mb-4 text-teal-900 capitalize">
                      {category} Fees
                    </h2>
                    <div className="text-3xl font-bold text-teal-600">
                      ₹{amount.toLocaleString()}
                    </div>
                    <p className="text-gray-600 mt-2">
                      {category === "security" && "Refundable security deposit"}
                      {category === "monthly" &&
                        "Includes food & accommodation"}
                      {category === "admission" &&
                        "One-time hostel admission fee"}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Download Full Fee Structure (PDF)
          </Button>
          <p className="text-gray-600 mt-4">
            Need help? Contact our admissions team
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
