import React, { useState } from "react";
import { PlusCircle, Trash2 } from "lucide-react";
import { useOutletContext } from "react-router-dom";

const MyTasks = () => {
  const {
    tasks,
    form,
    setForm,
    handleSubmit,
    handleDelete,
    handleEdit,
    toggleComplete,
    editId,
  } = useOutletContext();

  const [showForm, setShowForm] = useState(false);
  const latestTasks = [...tasks].reverse();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
    setShowForm(false);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-500";
      case "Medium":
        return "bg-yellow-400";
      default:
        return "bg-green-500";
    }
  };

  return (
    <div className="bg-blue-50 w-full min-h-screen p-12 max-w-7xl mx-auto font-sans relative">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">👋</span>
          <h2 className="text-2xl font-bold text-gray-800">My Tasks</h2>
        </div>
        <button
          onClick={() => {
            setShowForm(!showForm);
            if (!showForm) {
              setForm({
                title: "",
                description: "",
                dueDate: "",
                labels: "",
                priority: "Low",
                status: "todo",
                reminder: "",
              });
            }
          }}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
        >
          <PlusCircle className="w-5 h-5" />
          {showForm ? "Cancel" : "Add Task"}
        </button>
      </div>
      {showForm && (
        <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-8 mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            {editId ? "Update Your Task" : "Create a New Task"}
          </h3>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">Title</label>
                <input
                  type="text"
                  placeholder="Enter task title"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">Due Date</label>
                <input
                  type="date"
                  value={form.dueDate}
                  onChange={(e) =>
                    setForm({ ...form, dueDate: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">Labels</label>
                <input
                  type="text"
                  placeholder="E.g. Work, Personal"
                  value={form.labels}
                  onChange={(e) => setForm({ ...form, labels: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">Reminder</label>
                <input
                  type="datetime-local"
                  value={form.reminder}
                  onChange={(e) =>
                    setForm({ ...form, reminder: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Description</label>
              <textarea
                placeholder="Brief description about the task..."
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">Priority</label>
                <select
                  value={form.priority}
                  onChange={(e) =>
                    setForm({ ...form, priority: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">Status</label>
                <select
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                >
                  <option value="todo">To Do</option>
                  <option value="inprogress">In Progress</option>
                  <option value="done">Done</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition"
            >
              {editId ? "Update Task" : "Add Task"}
            </button>
          </form>
        </div>
      )}

      <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-5 mb-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Today's Task
        </h3>
        {latestTasks.length === 0 ? (
          <p className="text-gray-500">No recent tasks.</p>
        ) : (
          <ul className="space-y-3">
            {latestTasks.map((task) => (
              <li
                key={task._id}
                className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 p-3 rounded-lg transition"
              >
                <div className="flex items-start gap-3 w-1/3">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task)}
                    className="mt-1 h-5 w-5 accent-green-500"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                      <p className="font-medium text-gray-800">{task.title}</p>
                      <div className="text-xs text-gray-500 flex gap-2 items-center">
                        <span>Due: {task.dueDate?.substring(0, 10)}</span>
                        <span
                          className={`w-3 h-3 rounded-full ${getPriorityColor(
                            task.priority
                          )}`}
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 text-center w-1/3">
                  <p className="font-medium">
                    {new Date(task.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex gap-2 w-1/3 justify-end">
                  <button
                    onClick={() => {
                      handleEdit(task);
                      setShowForm(true);
                    }}
                    className="text-sm bg-yellow-500 text-white font-semibold px-3 py-1 rounded-full"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="text-xs bg-red-500 text-white p-1.5 rounded-full"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Task Overview
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6 text-center">
          <div className="bg-blue-100 text-blue-800 rounded-xl py-4">
            <p className="text-2xl font-bold">{tasks.length}</p>
            <p className="text-sm font-medium">Total Tasks</p>
          </div>
          <div className="bg-yellow-100 text-yellow-800 rounded-xl py-4">
            <p className="text-2xl font-bold">
              {tasks.filter((t) => !t.completed).length}
            </p>
            <p className="text-sm font-medium">Pending Tasks</p>
          </div>
          <div className="bg-green-100 text-green-800 rounded-xl py-4">
            <p className="text-2xl font-bold">
              {tasks.filter((t) => t.completed).length}
            </p>
            <p className="text-sm font-medium">Completed Tasks</p>
          </div>
        </div>

        <div className="w-full">
          <p className="text-sm text-gray-600 mb-1">
            Completion:{" "}
            {tasks.length > 0
              ? `${Math.round(
                  (tasks.filter((t) => t.completed).length / tasks.length) * 100
                )}%`
              : "0%"}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className="bg-green-500 h-4 rounded-full transition-all duration-300"
              style={{
                width:
                  tasks.length > 0
                    ? `${
                        (tasks.filter((t) => t.completed).length /
                          tasks.length) *
                        100
                      }%`
                    : "0%",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTasks;
