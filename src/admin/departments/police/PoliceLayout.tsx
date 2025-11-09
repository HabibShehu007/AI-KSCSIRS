import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import PoliceTopBar from "./PoliceTopBar";

export default function PoliceLayout() {
  return (
    <div className="flex min-h-screen bg-[#f5f7fa]">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        <PoliceTopBar />

        <div className="p-6 flex-1 overflow-y-auto">
          <Outlet /> {/* ✅ This renders the nested route content */}
        </div>
      </div>
    </div>
  );
}
