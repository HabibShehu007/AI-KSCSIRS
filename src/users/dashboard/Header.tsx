import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiHome,
  FiFileText,
  FiUser,
  FiLogOut,
} from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/user/dashboard", label: "Home", icon: <FiHome /> },
    { to: "/user/reports", label: "My Reports", icon: <FiFileText /> },
    { to: "/user/profile", label: "Profile", icon: <FiUser /> },
    { to: "/logout", label: "Logout", icon: <FiLogOut /> },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:flex justify-between items-center px-8 py-4 bg-[#0a1f44] text-white shadow-lg">
        <h1 className="text-2xl font-extrabold tracking-wide">
          KSCSIRS Dashboard
        </h1>
        <nav className="flex items-center space-x-8 text-sm font-medium">
          {navLinks.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-blue-600 transition"
            >
              <span className="text-lg">{icon}</span>
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </header>

      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-[#0a1f44] text-white shadow-md">
        <h1 className="text-lg font-bold tracking-wide">KSCSIRS</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition"
        >
          {isOpen ? (
            <FiX className="text-xl" />
          ) : (
            <FiMenu className="text-xl" />
          )}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#0a1f44] text-white transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="p-6 space-y-6">
          <h2 className="text-xl font-bold">Menu</h2>
          <nav className="flex flex-col space-y-4 text-base">
            {navLinks.map(({ to, label, icon }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-600 transition"
              >
                <span className="text-lg">{icon}</span>
                <span>{label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
