import React from "react";
import { CalendarDays, Mail, UserCircle } from "lucide-react";

export default function UserProfile({ user }) {
  const formattedDate = new Date(user.createdAt).toLocaleDateString();

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-50 to-white py-10 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">
        <div className="flex flex-col items-center text-center mb-8">
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-indigo-200 shadow-md"
          />
          <h1 className="text-2xl font-bold mt-4 text-gray-800">{user.name}</h1>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
          <ProfileField
            icon={<Mail size={18} className="text-indigo-500" />}
            label="Email"
            value={user.email}
          />
          <ProfileField
            icon={<UserCircle size={18} className="text-indigo-500" />}
            label="Full Name"
            value={user.name}
          />
          <ProfileField
            icon={<CalendarDays size={18} className="text-indigo-500" />}
            label="Account Created"
            value={formattedDate}
          />
          <ProfileField
            icon={<UserCircle size={18} className="text-indigo-500" />}
            label="Role"
            value={user.role || "User"}
          />
          <ProfileField
            icon={<UserCircle size={18} className="text-indigo-500" />}
            label="Phone"
            value={user.phone || "Not provided"}
          />
          <ProfileField
            icon={<UserCircle size={18} className="text-indigo-500" />}
            label="Location"
            value={user.location || "Not specified"}
          />
        </div>

        <div className="mt-8 text-center">
          <button className="px-5 py-2 bg-indigo-600 text-white text-sm rounded-lg shadow hover:bg-indigo-700 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

function ProfileField({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3 bg-indigo-50 rounded-lg px-4 py-3 shadow-sm">
      <div className="mt-1">{icon}</div>
      <div>
        <div className="text-xs text-gray-500">{label}</div>
        <div className="font-medium text-gray-800">{value}</div>
      </div>
    </div>
  );
}
