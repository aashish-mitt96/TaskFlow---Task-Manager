import React, { useState } from "react";
import {
  Calendar as CalendarIcon,
  ListChecks,
  LayoutDashboard,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import CalendarPanel from "./CalenderPanel";

export default function Sidebar({ user, handleLogout }) {
  const location = useLocation();
  const [showCalendar, setShowCalendar] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // mobile sidebar toggle

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Button for small screens */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={toggleSidebar} className="p-2 bg-indigo-100 rounded-md shadow-md">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-40 bg-gradient-to-r from-indigo-50 via-[#f6f3ff] to-white shadow-xl p-6 flex flex-col justify-between min-h-screen fixed overflow-y-auto transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} w-[80%] sm:w-[60%] md:translate-x-0 md:w-[20%] pt-16`}
      >
        <div>
          <div className="flex flex-col items-center mb-6">
            <img
              src={user.profilePic}
              alt="Profile"
              className="w-20 h-20 rounded-full mb-3 border-4 border-indigo-200 shadow-sm object-cover"
            />
            <h2 className="text-lg font-semibold text-center text-gray-800">{user.name}</h2>
          </div>
          <nav className="flex flex-col gap-2 mt-4">
            <SidebarLink icon={<ListChecks size={18} />} text="My Tasks" to="/user/my-tasks" currentPath={location.pathname} />
            <SidebarLink icon={<LayoutDashboard size={18} />} text="Dashboard" to="/user/dashboard" currentPath={location.pathname} />
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className={`flex items-center gap-3 px-3 py-2 rounded text-sm transition ${
                showCalendar
                  ? "bg-indigo-100 text-indigo-600 font-semibold"
                  : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
              }`}
            >
              <CalendarIcon size={18} />
              Calendar
            </button>
            <button
              onClick={() => setShowSettingsMenu(!showSettingsMenu)}
              className={`flex items-center gap-3 px-3 py-2 rounded text-sm transition ${
                showSettingsMenu
                  ? "bg-indigo-100 text-indigo-600 font-semibold"
                  : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
              }`}
            >
              <Settings size={18} />
              Settings
            </button>
            {showSettingsMenu && (
              <div className="ml-6 flex flex-col gap-2 mt-1">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-sm text-red-500 hover:text-red-700 transition"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            )}
          </nav>
          <div className="mt-6 px-3 py-4 bg-indigo-50 rounded-lg shadow-sm">
            <h4 className="text-sm font-medium text-indigo-800 mb-2">Progress</h4>
            <div className="w-full bg-indigo-200 rounded-full h-2.5">
              <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: "60%" }}></div>
            </div>
            <p className="text-xs text-right text-indigo-600 mt-1">60% completed</p>
          </div>
        </div>
        <div className="text-xs text-gray-400 text-center mt-4">
          <div className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent transform transition duration-300 hover:scale-105 hover:text-indigo-600">
            TaskFlow
          </div>
          Tip: Stay focused. You've got this! 💪
          <div
            onClick={handleLogout}
            className="mt-6 flex items-center justify-between px-3 py-2 border rounded-lg hover:bg-red-100 cursor-pointer transition text-red-600"
          >
            <span className="text-sm font-medium">Logout</span>
            <LogOut size={18} />
          </div>
          <br />
          <span className="text-[10px] block mt-1">v1.0.0</span>
        </div>
      </div>

      {/* Calendar panel outside the sidebar */}
      {showCalendar && <CalendarPanel onClose={() => setShowCalendar(false)} />}
    </>
  );
}

function SidebarLink({ icon, text, to, currentPath }) {
  const isActive = currentPath === to;
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-3 py-2 rounded text-sm transition ${
        isActive
          ? "bg-indigo-100 text-indigo-600 font-semibold"
          : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
      }`}
    >
      {icon}
      {text}
    </Link>
  );
}
