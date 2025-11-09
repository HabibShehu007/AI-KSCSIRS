import { FiBell, FiUser, FiChevronDown } from "react-icons/fi";
import { useState } from "react";

export default function Topbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 shadow-sm border-b">
      {/* Left: Page Title */}
      <h1 className="text-xl font-semibold text-[#0a1f44]">Dashboard</h1>

      {/* Right: Icons and Avatar */}
      <div className="flex items-center gap-6 relative">
        {/* Notifications */}
        <div className="relative cursor-pointer">
          <FiBell className="text-3xl text-[#0a1f44]" />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
            3
          </span>
        </div>

        {/* User Avatar */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        >
          <FiUser className="text-3xl text-[#0a1f44]" />
          <span className="text-sm text-[#0a1f44] font-medium">Admin</span>
          <FiChevronDown className="text-[#0a1f44]" />
        </div>

        {/* Dropdown Menu */}
        {showMenu && (
          <div className="absolute top-14 right-0 bg-white border rounded-md shadow-md w-40 z-10">
            <ul className="text-sm text-[#0a1f44]">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Profile
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Settings
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
