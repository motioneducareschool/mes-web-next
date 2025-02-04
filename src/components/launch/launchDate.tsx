// "use client";
// import { motion } from "framer-motion";
// import { FiArrowRight, FiCheckCircle, FiStar, FiClock } from "react-icons/fi";
// import confetti from "canvas-confetti";

// const LaunchPage = () => {
//   const runConfetti = () => {
//     confetti({
//       particleCount: 100,
//       spread: 70,
//       origin: { y: 0.6 },
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-white rounded-full"
//             initial={{
//               x: Math.random() * 100 + "%",
//               y: Math.random() * 100 + "%",
//               scale: 0,
//             }}
//             animate={{
//               scale: [0, 1, 0],
//               opacity: [0, 0.3, 0],
//               rotate: [0, 360],
//             }}
//             transition={{
//               duration: 2 + Math.random() * 5,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen relative z-10">
//         {/* Main Launch Content */}
//         <div className="text-center mb-12">
//           <motion.div
//             animate={{
//               scale: [1, 1.05, 1],
//               rotate: [0, 5, -5, 0],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//             }}
//             className="inline-block mb-8"
//           >
//             <div className="w-32 h-32 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center border-2 border-cyan-300 shadow-lg shadow-cyan-500/20">
//               <span className="text-5xl">🎉</span>
//             </div>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400"
//           >
//             We're Live!
//           </motion.h1>

//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             className="mb-8"
//           >
//             <h2 className="text-3xl md:text-5xl font-semibold mb-4">
//               Welcome to
//               <span className="block text-cyan-300 mt-2">
//                 Motion Educare School
//               </span>
//             </h2>
//             <motion.div
//               animate={{ rotate: [0, 15, -15, 0] }}
//               transition={{ repeat: Infinity, duration: 3 }}
//               className="inline-block text-3xl"
//             >
//               🚀
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Infinite Animation Grid */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="grid md:grid-cols-3 gap-8 mb-12 w-full max-w-6xl"
//         >
//           {[
//             {
//               icon: <FiStar />,
//               title: "Quality Education",
//               color: "bg-yellow-400",
//             },
//             {
//               icon: <FiCheckCircle />,
//               title: "Modern Platform",
//               color: "bg-green-400",
//             },
//             { icon: <FiClock />, title: "24/7 Access", color: "bg-blue-400" },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className={`p-6 rounded-2xl backdrop-blur-lg border border-white/20 ${item.color}/10 hover:${item.color}/20 transition-all`}
//             >
//               <motion.div
//                 animate={{ rotate: [0, 360] }}
//                 transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//                 className={`text-4xl mb-4 ${item.color} rounded-full p-4 w-16 h-16 flex items-center justify-center`}
//               >
//                 {item.icon}
//               </motion.div>
//               <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
//               <p className="text-gray-300">Experience the future of learning</p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="text-center"
//         >
//           <motion.button
//             onClick={runConfetti}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-2xl text-xl font-semibold flex items-center gap-2 mx-auto hover:shadow-xl hover:shadow-pink-500/20"
//           >
//             Explore Now <FiArrowRight />
//           </motion.button>

//           {/* Infinite Floating Text */}
//           <motion.div
//             animate={{ y: [0, -20, 0] }}
//             transition={{ duration: 3, repeat: Infinity }}
//             className="mt-8 text-cyan-300 flex items-center justify-center gap-2"
//           >
//             <FiStar className="animate-spin-slow" />
//             <span>Transforming Education Since 2021</span>
//             <FiStar className="animate-spin-slow" />
//           </motion.div>
//         </motion.div>

//         {/* Animated Slogan */}
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ type: "spring" }}
//           className="fixed bottom-8 left-0 right-0 text-center"
//         >
//           <div className="inline-block bg-white/10 backdrop-blur-lg px-8 py-3 rounded-full border border-cyan-400/30">
//             <motion.span
//               animate={{
//                 textShadow: [
//                   "0 0 10px rgba(34,211,238,0)",
//                   "0 0 10px rgba(34,211,238,0.5)",
//                   "0 0 20px rgba(34,211,238,0.3)",
//                 ],
//               }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="text-xl font-semibold text-cyan-300"
//             >
//               📚 Where Learning Meets Innovation! 🌟
//             </motion.span>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default LaunchPage;
