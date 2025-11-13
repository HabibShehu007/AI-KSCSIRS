import { useEffect, useState } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiGlobe,
  FiEdit3,
} from "react-icons/fi";

type UserInfo = {
  name: string;
  email: string;
  phone: string;
  state?: string;
  lga?: string;
  location?: string;
};

export default function Profile() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    email: "",
    phone: "",
    state: "",
    lga: "",
    location: "",
  });

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("userInfo");
    if (stored) {
      setUserInfo(JSON.parse(stored));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    setEditing(false);
  };

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-xl">
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-2xl font-bold shadow-md">
            {getInitials(userInfo.name)}
          </div>
          <h2 className="text-2xl font-extrabold text-[#0a1f44] mt-3">
            My Profile
          </h2>
          <p className="text-sm text-gray-500">
            Manage your personal information
          </p>
        </div>

        <div className="space-y-5 text-gray-800">
          {/* Name */}
          <div className="flex items-center gap-3">
            <FiUser className="text-blue-600 text-xl" />
            {editing ? (
              <input
                name="name"
                value={userInfo.name}
                onChange={handleChange}
                className="border px-3 py-2 rounded-md w-full font-semibold"
              />
            ) : (
              <span className="text-base font-semibold">{userInfo.name}</span>
            )}
          </div>

          {/* Email (read-only) */}
          <div className="flex items-center gap-3">
            <FiMail className="text-blue-600 text-xl" />
            <span className="text-base font-semibold">{userInfo.email}</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <FiPhone className="text-blue-600 text-xl" />
            {editing ? (
              <input
                name="phone"
                value={userInfo.phone}
                onChange={handleChange}
                className="border px-3 py-2 rounded-md w-full font-semibold"
              />
            ) : (
              <span className="text-base font-semibold">{userInfo.phone}</span>
            )}
          </div>

          {/* State */}
          <div className="flex items-center gap-3">
            <FiGlobe className="text-blue-600 text-xl" />
            {editing ? (
              <input
                name="state"
                value={userInfo.state}
                onChange={handleChange}
                className="border px-3 py-2 rounded-md w-full font-semibold"
                placeholder="Enter your state"
              />
            ) : (
              <span className="text-base font-semibold">{userInfo.state}</span>
            )}
          </div>

          {/* LGA */}
          <div className="flex items-center gap-3">
            <FiMapPin className="text-blue-600 text-xl" />
            {editing ? (
              <input
                name="lga"
                value={userInfo.lga}
                onChange={handleChange}
                className="border px-3 py-2 rounded-md w-full font-semibold"
                placeholder="Enter your local government"
              />
            ) : (
              <span className="text-base font-semibold">{userInfo.lga}</span>
            )}
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <FiMapPin className="text-blue-600 text-xl" />
            {editing ? (
              <input
                name="location"
                value={userInfo.location}
                onChange={handleChange}
                className="border px-3 py-2 rounded-md w-full font-semibold"
                placeholder="Enter your location"
              />
            ) : (
              <span className="text-base font-semibold">
                {userInfo.location}
              </span>
            )}
          </div>

          {/* Action Button */}
          <div className="text-center pt-4">
            {editing ? (
              <button
                onClick={handleSave}
                className="px-5 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 font-semibold shadow-md"
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={() => setEditing(true)}
                className="px-5 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 flex items-center justify-center gap-2 font-semibold shadow-sm"
              >
                <FiEdit3 /> Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
