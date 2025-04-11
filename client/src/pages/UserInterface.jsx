import { useEffect, useState } from "react";
import axios from "../utils/axiosInstance";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";

export default function UserInterface() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
    labels: "",
    status: "todo",
    reminder: "",
  });
  const [editId, setEditId] = useState(null);
  const [user, setUser] = useState({
    name: "Guest",
    email: "",
    profilePic: "",
  });

  const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get("/tasks");
      setTasks(data);
    } catch (error) {
      console.error(
        "Error fetching tasks:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    fetchTasks();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser({
        name: storedUser.name,
        email: storedUser.email,
        profilePic:
          "https://img.freepik.com/premium-vector/boy-with-blue-hoodie-blue-background-with-picture-man-with-brown-hair_1230457-46924.jpg",
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...form,
        labels: form.labels.split(",").map((label) => label.trim()),
      };

      if (editId) {
        await axios.put(`/tasks/${editId}`, payload);
      } else {
        await axios.post("/tasks", payload);
        navigate("/user/my-tasks");
      }

      setForm({
        title: "",
        description: "",
        priority: "Medium",
        dueDate: "",
        labels: "",
        status: "todo",
        reminder: "",
      });
      setEditId(null);
      fetchTasks();
    } catch (error) {
      console.error(
        "Error saving task:",
        error.response?.data || error.message
      );
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error(
        "Error deleting task:",
        error.response?.data || error.message
      );
    }
  };

  const handleEdit = (task) => {
    setForm({
      title: task.title,
      description: task.description,
      priority: task.priority || "Medium",
      dueDate: task.dueDate ? task.dueDate.substring(0, 10) : "",
      labels: task.labels?.join(", ") || "",
      status: task.status || "todo",
      reminder: task.reminder ? task.reminder.substring(0, 16) : "",
    });
    setEditId(task._id);
  };

  const toggleComplete = async (task) => {
    try {
      await axios.put(`/tasks/${task._id}`, {
        ...task,
        completed: !task.completed,
      });
      fetchTasks();
    } catch (error) {
      console.error(
        "Error updating status:",
        error.response?.data || error.message
      );
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/5">
          <Sidebar user={user} handleLogout={handleLogout} />
        </div>
        <div className="w-full md:w-4/5 pt-8 bg-blue-50 px-4">
          <Outlet
            context={{
              tasks,
              form,
              user,
              editId,
              setForm,
              handleSubmit,
              handleDelete,
              handleEdit,
              toggleComplete,
              handleLogout,
            }}
          />
        </div>
      </div>
    </div>
  );
}
