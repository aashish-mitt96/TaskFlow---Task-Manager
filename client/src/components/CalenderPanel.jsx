import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarPanel({ onClose }) {
  const [value, setValue] = useState(new Date());

  return (
    <div className="fixed top-16 right-0 w-80 bg-white shadow-2xl p-4 border-l z-50 h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Calendar</h2>
        <button
          onClick={onClose}
          className="text-red-500 text-sm hover:underline"
        >
          Close
        </button>
      </div>
      <Calendar onChange={setValue} value={value} />
      <p className="mt-4 text-sm text-gray-600 text-center">
        Selected Date: <strong>{value.toDateString()}</strong>
      </p>
    </div>
  );
}
