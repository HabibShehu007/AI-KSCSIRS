import type { Complaint } from "./types";
import { FiEye } from "react-icons/fi";

type Props = {
  complaints: Complaint[];
  onView: (complaint: Complaint) => void;
};

export default function ComplaintTable({ complaints, onView }: Props) {
  return (
    <div className="bg-white rounded shadow overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead className="bg-[#0a1f44] text-white">
          <tr>
            <th className="px-4 py-2 text-left">User</th>
            <th className="px-4 py-2 text-left">Subject</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((c) => (
            <tr key={c.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{c.user}</td>
              <td className="px-4 py-2">{c.subject}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    c.status.toLowerCase() === "resolved"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {c.status}
                </span>
              </td>
              <td className="px-4 py-2">{c.date}</td>
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
