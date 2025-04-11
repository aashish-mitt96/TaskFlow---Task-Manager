import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import {
  Lock, Star,
  Sparkles,
  BarChart3,
  PlusCircle,
  Edit,
  Trash2,
} from "lucide-react";

const features = [
  {
    icon: <PlusCircle className="w-16 h-16 text-green-500" />,
    title: "Create Tasks",
    description: "Easily create tasks and assign them to workflows.",
  },
  {
    icon: <BarChart3 className="w-16 h-16 text-blue-500" />,
    title: "View Workflows",
    description: "Get a comprehensive view of your workflows and tasks.",
  },
  {
    icon: <Edit className="w-16 h-16 text-yellow-500" />,
    title: "Update Tasks",
    description: "Modify task details and update progress as needed.",
  },
  {
    icon: <Trash2 className="w-16 h-16 text-red-500" />,
    title: "Delete Tasks",
    description: "Remove completed or outdated tasks to keep things clean.",
  },
  {
    icon: <Sparkles className="w-16 h-16 text-pink-500" />,
    title: "Minimal Design",
    description: "Clean, distraction-free layout for max productivity.",
  },
  {
    icon: <Star className="w-16 h-16 text-orange-500" />,
    title: "Priority-Wise Task Display",
    description: "Easily sort and view tasks based on priority levels.",
  },
  {
    icon: <Lock className="w-16 h-16 text-teal-500" />,
    title: "Authentication",
    description: "Secure login and user management for task access.",
  },
];

const FeatureSection = () => {
  return (
    <section className="relative -mt-44 h-screen overflow-hidden px-4 md:px-8 lg:px-8 flex items-center justify-center z-10">
      <div
        className="max-w-[86%] w-full bg-white/40 backdrop-blur-md border border-white/30 shadow-xl rounded-3xl p-8 md:p-12 transition-all"
        style={{
          WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 25%)",
          maskImage: "linear-gradient(to top, transparent 0%, black 25%)",
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-8">
          Powerful Features to Boost Your Productivity
        </h2>

        <Marquee gradient={false} speed={60} pauseOnHover={true} className="overflow-hidden">
          <div className="flex gap-12 py-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="min-w-[280px] bg-white/90 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-base text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </Marquee>
      </div>

    </section>
  );
};

export default FeatureSection;
