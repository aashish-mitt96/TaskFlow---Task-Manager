import React from "react";
import { motion } from "framer-motion";
import { FaRegStar, FaUsers, FaAward, FaGlobeAmericas } from "react-icons/fa"; // Import icons

const AboutSection = () => {
  return (
    <section className="py-20 -mt-85 text-gray-800 relative z-10">
      <div
        className="max-w-[83%] mx-auto border border-white/30 shadow-xl rounded-3xl p-12 md:p-16 backdrop-blur-md bg-white/40 transition-all"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 20%)",
        }}
      >
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h2>

        <div className="lg:flex lg:gap-16 items-center justify-between">
          <div className="lg:w-1/2">
            <motion.p
              className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome to our platform! We provide innovative solutions to enhance
              productivity and streamline your daily tasks. Our mission is to make
              your life easier with smart, intuitive, and user-friendly tools that
              help you stay organized, efficient, and productive.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              We aim to empower individuals and businesses alike by offering
              tailored features that cater to your needs. Join us and experience the
              future of productivity today!
            </motion.p>
          </div>

          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div
                className="flex items-center justify-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FaRegStar className="text-4xl text-yellow-500 mr-6" />
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800">Trusted by Users</h4>
                  <p className="text-sm text-gray-600">Over 10,000 active users</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center justify-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FaUsers className="text-4xl text-indigo-500 mr-6" />
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800">Team of Experts</h4>
                  <p className="text-sm text-gray-600">Meet our dedicated team</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center justify-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FaAward className="text-4xl text-purple-500 mr-6" />
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800">Award-Winning</h4>
                  <p className="text-sm text-gray-600">Recognized for excellence</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center justify-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FaGlobeAmericas className="text-4xl text-blue-500 mr-6" />
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800">Global Reach</h4>
                  <p className="text-sm text-gray-600">Serving clients across 50+ countries</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
