import React from 'react';
import { motion } from "motion/react";
import { Link } from 'react-router';

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen relative overflow-hidden flex items-center justify-center px-4 lg:px-20">
      
      {/* Floating Background Circles */}
      <motion.div
        className="absolute w-72 h-72 bg-indigo-200 rounded-full top-[-50px] left-[-50px] opacity-30"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-60 h-60 bg-purple-200 rounded-full bottom-[-50px] right-[-50px] opacity-30"
        animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      <div className="flex flex-col lg:flex-row items-center w-full relative z-10 gap-10">
        
        {/* Text Part */}
        <motion.div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
          <motion.h1
            className="text-5xl font-bold mb-2"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Learn New Skills Today!
          </motion.h1>

          <motion.h2
            className="text-2xl font-medium text-indigo-700"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Unlock Your Potential with Expert-Led Courses
          </motion.h2>

          <motion.p
            className="py-4 text-gray-700 text-lg max-w-md mx-auto lg:mx-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Explore top courses curated by industry experts. Learn at your own pace and gain hands-on experience to boost your career.
          </motion.p>

          {/* Features List */}
          <motion.ul
            className="list-disc list-inside text-gray-700 space-y-1 max-w-md mx-auto lg:mx-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <li>Flexible Learning Schedule</li>
            <li>Expert Guidance & Mentorship</li>
            <li>Certificate on Completion</li>
          </motion.ul>

          {/* CTA Buttons */}
          <motion.div
            className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
           
            <Link to='./all-course'>
            
            <motion.button
              className="btn btn-outline btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Courses
            </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated Floating Image */}
        <motion.div className="w-full lg:w-1/2 flex justify-center">
          <motion.img
            src="https://i.postimg.cc/RhJSVyCP/4893415.jpg"
            className="rounded-lg border-s-5 border-b-5 shadow-2xl w-3/5 max-w-md"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          />
        </motion.div>

      </div>
    </div>
  );
};

export default Banner;
