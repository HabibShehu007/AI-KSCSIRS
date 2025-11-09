import Sidebar from "./Sidebar";
import FireServiceTopBar from "./FireServiceTopBar";
import { Outlet } from "react-router-dom";

export default function FireServiceLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <FireServiceTopBar />
        <div className="p-6 flex-1 bg-[#f5f7fa]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
