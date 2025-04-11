import React from "react";
import { motion } from "framer-motion";
import { Sun, Briefcase, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <Sun className="text-4xl text-yellow-500" />,
    title: "Plan Your Day",
    description: "Start with clarity. Add tasks, set your focus areas, and prioritize effortlessly.",
  },
  {
    icon: <Briefcase className="text-4xl text-indigo-600" />,
    title: "Get Things Done",
    description: "Use focus mode to tackle tasks with minimal distractions and maximum productivity.",
  },
  {
    icon: <CheckCircle className="text-4xl text-green-600" />,
    title: "Reflect & Reset",
    description: "Review completed tasks, reflect on your progress, and prep for tomorrow.",
  },
];

const Timeline = () => {
  return (
    <section className="py-1 text-gray-900 mb-2">
      <div className="max-w-8xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black-600 mb-6">
          A Day with{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            TaskFlow
          </span>
        </h2>
        <div className="hidden md:flex justify-between items-center relative mt-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center w-1/3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg border-2 border-indigo-400">
                {step.icon}
              </div>
              <div className="w-40 text-center mt-3">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
              {index !== steps.length - 1 && (
                <div className="absolute top-8 left-1/2 transform -translate-x-0 w-full h-1 bg-indigo-400"></div>
              )}
            </motion.div>
          ))}
        </div>
        <div className="md:hidden flex flex-col gap-1 mt-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-center p-4 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="p-4 bg-gray-200 rounded-full">{step.icon}</div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Timeline;
