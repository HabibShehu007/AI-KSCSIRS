import { useEffect, useState } from "react";
import UserLogsCard from "./UserLogsCard";
import type { LogEntry } from "./types";
import { AnimatePresence } from "framer-motion";

export default function UserLogs() {
  const [logs, setLogs] = useState<LogEntry[]>([]);

  useEffect(() => {
    const storedLogs: LogEntry[] = JSON.parse(
      localStorage.getItem("adminLogs") || "[]"
    );
    setLogs(storedLogs.reverse());
  }, []);

  const markAsRead = (index: number) => {
    const updatedLogs = [...logs];
    const actualIndex = logs.length - 1 - index;
    const originalLogs = JSON.parse(localStorage.getItem("adminLogs") || "[]");

    // Mark as read in localStorage
    originalLogs[actualIndex].read = true;
    localStorage.setItem("adminLogs", JSON.stringify(originalLogs));

    // Remove from UI
    updatedLogs.splice(index, 1);
    setLogs(updatedLogs);
  };

  const markAllAsRead = () => {
    const updatedLogs = logs.map((log) => ({ ...log, read: true }));
    const originalLogs = JSON.parse(
      localStorage.getItem("adminLogs") || "[]"
    ).map((log: LogEntry) => ({ ...log, read: true }));

    localStorage.setItem("adminLogs", JSON.stringify(originalLogs));
    setLogs(updatedLogs);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-[#0a1f44]">
          User Activity Logs
        </h2>
        {logs.length > 0 && (
          <button
            onClick={markAllAsRead}
            className="text-sm px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
          >
            Mark All as Read
          </button>
        )}
      </div>

      {logs.length === 0 ? (
        <p className="text-gray-500">No user activity recorded yet.</p>
      ) : (
        <AnimatePresence>
          {logs.map((log, index) => (
            <UserLogsCard
              key={index}
              log={log}
              onMarkAsRead={() => markAsRead(index)}
            />
          ))}
        </AnimatePresence>
      )}
    </div>
  );
}
