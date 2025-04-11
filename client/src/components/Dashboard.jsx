import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useOutletContext } from "react-router-dom";

const COLORS = ["#34D399", "#FBBF24", "#EF4444"];

const Dashboard = () => {
  const { tasks } = useOutletContext();
  const completed = tasks.filter((t) => t.completed).length;
  const pending = tasks.filter((t) => !t.completed).length;
  const total = tasks.length;

  const pieData = [
    { name: "Completed", value: completed },
    { name: "Pending", value: pending },
    { name: "Total", value: total },
  ];

  const completionRate = total ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="w-full bg-blue-50 min-h-screen  p-10 font-sans max-w-7xl mx-auto">
      <div className="text-3xl font-bold text-gray-800 mb-6">📊 Dashboard Overview</div>

      <div className="grid md:grid-cols-2 gap-10 mb-10">
        <div className="bg-white p-6 rounded-3xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Task Breakdown
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {pieData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-md flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Completion Progress
          </h3>
          <div className="mb-2 text-lg text-gray-600">{completionRate}% Completed</div>
          <div className="w-full bg-gray-200 rounded-full h-5">
            <div
              className="bg-green-500 h-5 rounded-full transition-all duration-500"
              style={{ width: `${completionRate}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>{completed} Completed</span>
            <span>{pending} Pending</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-md">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Quick Stats
        </h3>
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          <div className="bg-blue-100 text-blue-800 rounded-xl py-4">
            <p className="text-3xl font-bold">{total}</p>
            <p className="text-sm font-medium">Total Tasks</p>
          </div>
          <div className="bg-yellow-100 text-yellow-800 rounded-xl py-4">
            <p className="text-3xl font-bold">{pending}</p>
            <p className="text-sm font-medium">Pending Tasks</p>
          </div>
          <div className="bg-green-100 text-green-800 rounded-xl py-4">
            <p className="text-3xl font-bold">{completed}</p>
            <p className="text-sm font-medium">Completed Tasks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
