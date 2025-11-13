import { useEffect, useState } from "react";
import AgencyCard from "./AgencyCard";
import {
  FiShield,
  FiUsers,
  FiMessageSquare,
  FiTruck,
  FiAlertCircle,
  FiEye,
  FiLock,
  FiBriefcase,
} from "react-icons/fi";
import type { IconType } from "react-icons";

type Department = {
  name: string;
  slug: string;
  icon: IconType;
  description: string;
};

const departments: Department[] = [
  {
    name: "Police",
    slug: "police",
    icon: FiShield,
    description: "Report criminal activity or request police assistance.",
  },
  {
    name: "DSS",
    slug: "dss",
    icon: FiLock,
    description:
      "Report intelligence-related threats or suspicious covert activity.",
  },

  {
    name: "Civil Defence",
    slug: "civildefence",
    icon: FiAlertCircle,
    description:
      "Report threats to national assets or request protective services.",
  },

  {
    name: "Vigilante (See Watch)",
    slug: "vigilante",
    icon: FiEye,
    description:
      "Report local disturbances or request community watch support.",
  },

  {
    name: "Road Safety",
    slug: "roadsafety",
    icon: FiTruck,
    description: "Report traffic incidents or unsafe road conditions.",
  },

  {
    name: "Fire Service",
    slug: "fireservice",
    icon: FiMessageSquare,
    description: "Report fire hazards or request emergency response.",
  },

  {
    name: "Immigration",
    slug: "immigration",
    icon: FiUsers,
    description: "Get help with travel documents and border issues.",
  },

  {
    name: "EFCC",
    slug: "efcc",
    icon: FiBriefcase,
    description: "Report financial crimes, fraud, or corruption cases.",
  },
];

export default function UserDashboard() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("userInfo");
    if (stored) {
      const { name } = JSON.parse(stored);
      setUserName(name);
    }
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="p-6">
      <div className="bg-[#0a1f44] text-white py-5 px-6 rounded-lg shadow-md mb-6 max-w-md mx-auto text-center">
        <h2 className="text-xl font-semibold">
          {getGreeting()}, {userName}
        </h2>
        <p className="text-sm text-gray-300 mt-1">
          Welcome to your civic dashboard.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-[#0a1f44]">
        Choose a Department to Report To
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {departments.map((dept) => (
          <AgencyCard key={dept.slug} {...dept} />
        ))}
      </div>
    </div>
  );
}
