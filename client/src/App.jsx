import {  Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserInterface from "./pages/UserInterface";
import HomePage from "./pages/HomePage";
import MyTasks from "./components/MyTasks";
import Dashboard from "./components/Dashboard"

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/user" element={<PrivateRoute><UserInterface /></PrivateRoute>}>
          <Route path="my-tasks" element={<MyTasks />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
  );
}

