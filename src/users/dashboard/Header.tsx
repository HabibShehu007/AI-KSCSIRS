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

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:flex justify-between items-center px-6 py-4 bg-[#0a1f44] text-white shadow-md">
        <h1 className="text-xl font-bold">KSCSIRS Dashboard</h1>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            to="/user/dashboard"
            className="flex items-center gap-2 hover:underline"
          >
            <FiHome /> Home
          </Link>
          <Link
            to="/user/reports"
            className="flex items-center gap-2 hover:underline"
          >
            <FiFileText /> My Reports
          </Link>
          <Link
            to="/user/profile"
            className="flex items-center gap-2 hover:underline"
          >
            <FiUser /> Profile
          </Link>
          <Link
            to="/logout"
            className="flex items-center gap-2 hover:underline"
          >
            <FiLogOut /> Logout
          </Link>
        </nav>
      </header>

      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-[#0a1f44] text-white shadow-md">
        <h1 className="text-lg font-bold">KSCSIRS</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FiX className="text-2xl" />
          ) : (
            <FiMenu className="text-2xl" />
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
            <Link
              to="/user/dashboard"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 hover:underline"
            >
              <FiHome /> Home
            </Link>
            <Link
              to="/user/reports"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 hover:underline"
            >
              <FiFileText /> My Reports
            </Link>
            <Link
              to="/user/profile"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 hover:underline"
            >
              <FiUser /> Profile
            </Link>
            <Link
              to="/logout"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 hover:underline"
            >
              <FiLogOut /> Logout
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
