import { useEffect, useState } from "react";

export default function Navbar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentTime.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const formattedTime = currentTime.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const hours = currentTime.getHours();
  const isDay = hours >= 6 && hours < 18;
  const dayNightIcon = isDay ? "☀️" : "🌙";

  return (
    <nav className="bg-blue-900 text-white px-32 py-2 rounded-t-3xl shadow-md flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <div className="text-lg font-semibold tracking-wide">TaskFlow</div>
      <div className="absolute left-1/2 transform -translate-x-1/2 text-sm text-gray-200">
        {formattedDate}
      </div>
      <div className="text-sm text-gray-200 flex items-center -mr-6 space-x-2">
        <span>{formattedTime}</span>
        <span>{dayNightIcon}</span>
      </div>
    </nav>
  );
}
