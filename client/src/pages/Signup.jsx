import { useState } from "react";
import axios from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import image from "../assets/sigup.png";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("/auth/register", form);
    localStorage.setItem("token", data.token);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#d8effb]">
      <div className="flex w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl bg-white">
        <div className="w-full md:w-1/2 p-10 relative z-10 bg-white flex flex-col justify-center">
          <button
            onClick={() => navigate("/")}
            className="text-sm text-indigo-600 hover:text-indigo-700 font-semibold mb-4"
          >
            ← Back to Home
          </button>
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl font-semibold text-indigo-600 text-center mb-8">Sign Up</h2>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full p-5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full p-5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                className="w-full p-5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            >
              Sign Up
            </button>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-indigo-600 hover:text-indigo-700 font-semibold"
                >
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="w-1/2 hidden md:block bg-indigo-100">
          <img
            src={image}
            alt="Signup Visual"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
