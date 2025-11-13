import type { Complaint } from "./data/types";
import { FiEye } from "react-icons/fi";

type Props = {
  complaints: Complaint[];
  onView: (complaint: Complaint) => void;
};

export default function ComplaintTable({ complaints, onView }: Props) {
  const handleStatusChange = (id: number, newStatus: string) => {
    const stored = JSON.parse(
      localStorage.getItem("complaints-police") || "[]"
    ) as Complaint[];
    const updated = stored.map((c) =>
      c.id === id ? { ...c, status: newStatus } : c
    );
    localStorage.setItem("complaints-police", JSON.stringify(updated));
    window.location.reload();
  };

  const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case "resolved":
        return "bg-green-100 text-green-700";
      case "investigating":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <div className="bg-white rounded shadow overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead className="bg-[#0a1f44] text-white">
          <tr>
            <th className="px-4 py-2 text-left">User</th>
            <th className="px-4 py-2 text-left">Subject</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Submitted</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((c) => (
            <tr key={c.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{c.user || "Unknown"}</td>
              <td className="px-4 py-2">{c.subject || "No subject"}</td>
              <td className="px-4 py-2">
                <select
                  value={c.status || "Pending"}
                  onChange={(e) => handleStatusChange(c.id, e.target.value)}
                  className={`px-2 py-1 rounded text-xs font-semibold focus:outline-none ${getStatusStyle(
                    c.status || "Pending"
                  )}`}
                >
                  <option value="Pending">Pending</option>
                  <option value="Investigating">Investigating</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </td>
              <td className="px-4 py-2">
                {c.timestamp
                  ? new Date(c.timestamp).toLocaleString()
                  : "No timestamp"}
              </td>
              <td className="px-4 py-2">
                <button
                  onClick={() => onView(c)}
                  className="text-[#0a1f44] hover:text-blue-600 transition"
                  title="View Details"
                >
                  <FiEye />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
