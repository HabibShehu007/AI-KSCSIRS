import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiFileText,
  FiUser,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";

export default function MobileNavbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { to: "/user/dashboard", icon: <FiHome />, label: "Home" },
    { to: "/user/reports", icon: <FiFileText />, label: "Reports" },
    { to: "/user/profile", icon: <FiUser />, label: "Profile" },
    { to: "/logout", icon: <FiLogOut />, label: "Logout" },
  ];

  // ✅ Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed bottom-16 right-4 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition"
        >
          {isOpen ? (
            <FiX className="text-xl" />
          ) : (
            <FiMenu className="text-xl" />
          )}
        </button>
      </div>

      {/* Wrapper for backdrop + nav */}
      <div
        ref={wrapperRef}
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-100 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black bg-opacity-30" />

        {/* Nav Panel */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-white border-t shadow-xl transform transition-transform ${
            isOpen ? "translate-y-0" : "translate-y-full"
          } duration-300`}
        >
          <nav className="grid grid-cols-4 gap-2 px-4 py-3 text-center">
            {navItems.map(({ to, icon, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={`flex flex-col items-center justify-center gap-1 text-sm font-medium rounded-md py-2 transition ${
                  pathname === to
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <span className="text-xl">{icon}</span>
                <span>{label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
