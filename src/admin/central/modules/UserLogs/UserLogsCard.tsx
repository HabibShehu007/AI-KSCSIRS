import { motion } from "framer-motion";
import { formatTimestamp } from "./utils";
import type { LogEntry } from "./types";

type Props = {
  log: LogEntry;
  onMarkAsRead: () => void;
};

export default function UserLogsCard({ log, onMarkAsRead }: Props) {
  const { action, payload, timestamp } = log;

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      layout
      className="border p-4 rounded-md shadow-sm bg-white border-blue-500 hover:shadow-md transition-all"
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-700">
            <strong>{payload.name || payload.email}</strong> performed a{" "}
            <strong>{action}</strong> on{" "}
            <strong>{formatTimestamp(timestamp)}</strong>
          </p>
          {payload.email && (
            <p className="text-xs text-gray-500">Email: {payload.email}</p>
          )}
          {payload.phone && (
            <p className="text-xs text-gray-500">Phone: {payload.phone}</p>
          )}
        </div>
        <button
          onClick={onMarkAsRead}
          className="text-xs text-blue-600 hover:underline"
        >
          Mark as Read
        </button>
      </div>
    </motion.div>
  );
}
