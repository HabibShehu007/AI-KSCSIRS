import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

export default function PolicePortal() {
  return (
    <div className="flex min-h-screen bg-[#f5f7fa] dark:bg-navy">
      <Sidebar />
      <main className="flex-1 p-6">
        <Dashboard />
      </main>
    </div>
  );
}
