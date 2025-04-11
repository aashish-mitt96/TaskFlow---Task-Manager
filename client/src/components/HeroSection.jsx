import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleStartNowClick = () => {
    navigate("/register");
  };

  return (
    <section className="pt-20 backdrop-blur-md bg-gradient-to-r text-transparent pb-10 px-4 md:px-8 lg:px-16 text-center relative z-10">
      <div
        className="max-w-[92%] mx-auto bg-white/40 backdrop-blur-md border border-white/30 shadow-xl rounded-3xl p-10 md:p-16 transition-all"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 20%)"
        }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold -mt-0.5 leading-tight text-gray-800 mb-6">
          Supercharge Your Productivity <br />
          with{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            TaskFlow
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Plan smarter, not harder. Stay focused, manage your time, and achieve
          more with intuitive task tracking and smart reminders.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={handleStartNowClick}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            ✨ Start Now
          </button>
          <button className="bg-white/80 backdrop-blur-sm border border-indigo-400 text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-50 hover:scale-105 transition-all duration-300">
            💡 Explore Features
          </button>
        </div>

        {/* Social Proof */}
        <p className="text-sm text-gray-500 mt-8 -mb-3">
          ⭐️⭐️⭐️⭐️⭐️ Rated <span className="font-semibold text-indigo-600">4.9/5</span> by 2,000+ users worldwide
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
