import { Link, useLocation } from "react-router-dom";
import { FiHome, FiFileText, FiUser, FiLogOut } from "react-icons/fi";

export default function MobileNavbar() {
  const { pathname } = useLocation();

  const navItems = [
    {
      to: "/user/dashboard",
      icon: <FiHome className="text-xl" />,
      label: "Home",
    },
    {
      to: "/user/reports",
      icon: <FiFileText className="text-xl" />,
      label: "Reports",
    },
    {
      to: "/user/profile",
      icon: <FiUser className="text-xl" />,
      label: "Profile",
    },
    {
      to: "/logout",
      icon: <FiLogOut className="text-xl" />,
      label: "Logout",
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around py-2 md:hidden">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`flex flex-col items-center text-xs ${
            pathname === item.to ? "text-blue-700" : "text-gray-600"
          }`}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
