import { NavLink } from "react-router-dom";
import { FiHome, FiMessageSquare, FiSettings } from "react-icons/fi";

export default function Sidebar() {
  const linkClass =
    "flex items-center gap-4 px-4 py-3 text-white hover:bg-[#09203b] transition rounded-md";
  const activeClass = "bg-[#09203b]";

  return (
    <aside className="w-64 bg-[#0a1f44] text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-8 text-center">Immigration</h2>
      <nav className="flex flex-col space-y-2">
        <NavLink
          to="/admin/immigration/dashboard"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          <FiHome className="text-xl" />
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/immigration/messages"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          <FiMessageSquare className="text-xl" />
          Messages
        </NavLink>

        <NavLink
          to="/admin/immigration/settings"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          <FiSettings className="text-xl" />
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}
