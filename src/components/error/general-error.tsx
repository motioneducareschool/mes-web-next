"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="md:min-h-[93vh] min-h-[83vh] bg-gradient-to-br from-purple-100 to-indigo-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="max-w-2xl text-center"
      >
        {/* Animated School Elements */}
        <div className="relative mb-6">
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="md:text-8xl text-6xl mb-4"
          >
            📚
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-0 left-20 text-4xl"
          >
            🛠️
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-0 right-20 text-4xl"
          >
            🏫
          </motion.div>
        </div>

        {/* Main Content */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl md:text-8xl font-bold text-purple-900 mb-2"
        >
          Oops!
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-700 mb-4"
        >
          {` We’re currently updating the page you’re looking for. It’s like the
            homework that’s just not ready yet! 📚📝`}
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <div className="flex justify-center gap-4 mb-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="text-4xl"
            >
              🎒
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-4xl"
            >
              🎨
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-4xl"
            >
              ✏️
            </motion.div>
          </div>

          <p className="text-gray-600 mb-8">
            {` Looks like we’re in the middle of a school project... We’ll be back in
          class soon! 🏫💻`}
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button asChild variant="default" className="text-lg">
              <Link href="/" className="flex items-center gap-2">
                {`🏠 Return to Home Page`}
              </Link>
            </Button>

            {/* <Button asChild variant="outline" className="text-lg">
              <Link href="/contact" className="flex items-center gap-2">
                📞 Contact Us for Assistance
              </Link>
            </Button> */}
          </div>
        </motion.div>

        {/* Hidden Easter Egg */}
        {/* <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-8 text-sm text-gray-500 cursor-pointer"
          onClick={() =>
            alert(
              "🎉 Bonus points for finding the secret! Let's get you back to learning!"
            )
          }
        >
          Pssst... Click here for a surprise!
        </motion.div> */}
      </motion.div>
    </div>
  );
}
