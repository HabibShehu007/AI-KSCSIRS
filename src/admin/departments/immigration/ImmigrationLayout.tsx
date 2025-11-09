import Sidebar from "./Sidebar";
import ImmigrationTopBar from "./ImmigrationTopBar";
import { Outlet } from "react-router-dom";

export default function ImmigrationLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <ImmigrationTopBar />
        <div className="p-6 flex-1 bg-[#f5f7fa]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
