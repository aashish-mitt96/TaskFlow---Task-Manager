import React from "react";
import logo from "../assets/logo.png";

const SimpleNavbar = () => {
  return (
    <>
      <hr className="border-t border-gray-300 my-4" />

      <footer className="text-gray-800 flex justify-center items-center py-4 space-x-4">
        
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} TaskFlow. All rights reserved.</p>
        <p className="text-sm text-gray-500">Made with ❤️ in React + Vite</p>
      </footer>
    </>
  );
};

export default SimpleNavbar;
