"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="md:min-h-[93vh] min-h-[83vh] bg-gradient-to-br from-green-100 to-teal-50 flex items-center justify-center p-4">
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
            className="absolute top-0 left-20 text-4xl"
          >
            🎓
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="absolute top-0 right-20 text-4xl"
          >
            🏫
          </motion.div>
        </div>

        {/* Main Content */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl md:text-8xl font-bold text-green-900 mb-2"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-700 mb-2"
        >
          {`Oh no! The page you're looking for has gone on a field trip! 🏃‍♂️💨`}
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
          <p className="text-gray-600 mb-4">
            {` It’s like the teacher is missing, and the classroom is locked! Don’t
            worry, we'll get it back soon. In the meantime, let's get you back
            on track:`}
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button asChild variant="default" className="text-lg">
              <Link href="/" className="flex items-center gap-2">
                {`🏠 Go to Home Page`}
              </Link>
            </Button>

            {/* <Button asChild variant="outline" className="text-lg">
              <Link href="/contact" className="flex items-center gap-2">
                📞 Contact Us for Help
              </Link>
            </Button> */}
          </div>
        </motion.div>

        {/* Floating School Elements
        <div className="mt-12 flex justify-center space-x-8">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="text-3xl"
          >
            ✏️
          </motion.div>

          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 8 }}
            className="text-3xl"
          >
            🎒
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-3xl"
          >
            🍎
          </motion.div>
        </div> */}

        {/* Hidden Easter Egg */}
        {/* <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-8 text-sm text-gray-500 cursor-pointer"
          onClick={() =>
            alert("🏆 You found the secret! Let's get back to learning!")
          }
        >
          Pssst... Click here for a little surprise!
        </motion.div> */}
      </motion.div>
    </div>
  );
}
