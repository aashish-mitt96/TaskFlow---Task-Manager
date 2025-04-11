import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.marginTop = "300px";  
    } else {
      document.body.style.marginTop = "0";  
    }

    return () => {
      document.body.style.marginTop = "0";
    };
  }, [isOpen]);

  const handleScroll = (percentage) => {
    const scrollPosition = (document.documentElement.scrollHeight - window.innerHeight) * (percentage / 100);
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth", 
    });
  };

  return (
    <header className="w-full fixed top-3 z-50 flex justify-center">
      <div className="w-[90%] md:w-[85%] backdrop-blur-md shadow-lg rounded-full px-6 py-4 flex items-center justify-between transition-all duration-300">

        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-auto transform transition duration-300 hover:scale-105 hover:brightness-110" 
          />
          <div className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent transform transition duration-300 hover:scale-105 hover:text-indigo-600">
            TaskFlow
          </div>
        </div>

        <nav className="hidden md:flex gap-6 text-indigo-600 font-semibold">
          <a
            href="/"
            className="relative group text-lg"
            onClick={(e) => {
              e.preventDefault();
              handleScroll(0); 
            }}
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="/features"
            className="relative group text-lg"
            onClick={(e) => {
              e.preventDefault();
              handleScroll(70); 
            }}
          >
            Features
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="/about"
            className="relative group text-lg"
            onClick={(e) => {
              e.preventDefault();
              handleScroll(100);
            }}
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="/login"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-base px-6 py-3 text-center me-2 mb-2"
          >
            Login
          </a>
          <a
            href="/register"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-base px-6 py-3 text-center me-2 mb-2"
          >
            Register
          </a>
        </div>

        <div className="md:hidden">
          <button className="text-gray-700" onClick={toggleMenu}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-[72px] w-[90%] md:hidden bg-white/90 backdrop-blur-md rounded-2xl shadow-lg py-4 px-6 animate-slideDown">
          <nav className="flex flex-col gap-4 text-gray-700 font-medium">
            <a
              href="/"
              className="hover:text-indigo-600 transition"
              onClick={(e) => {
                e.preventDefault();
                handleScroll(0);
              }}
            >
              Home
            </a>
            <a
              href="/features"
              className="hover:text-indigo-600 transition"
              onClick={(e) => {
                e.preventDefault();
                handleScroll(70);
              }}
            >
              Features
            </a>
            <a
              href="/about"
              className="hover:text-indigo-600 transition"
              onClick={(e) => {
                e.preventDefault();
                handleScroll(100); 
              }}
            >
              About
            </a>
            <a
              href="/login"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-base px-6 py-3 text-center me-2 mb-2"
            >
              Login
            </a>
            <a
              href="/register"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-base px-6 py-3 text-center me-2 mb-2 "
            >
              Register
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
