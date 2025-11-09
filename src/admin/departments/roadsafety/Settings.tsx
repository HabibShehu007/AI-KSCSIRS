import { useState } from "react";

const officers = [
  { id: 1, name: "Officer Ibrahim", role: "Supervisor", active: true },
  { id: 2, name: "Officer Amina", role: "Responder", active: true },
  { id: 3, name: "Officer Kabir", role: "Analyst", active: false },
];

export default function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [responseThreshold, setResponseThreshold] = useState(15);

  return (
    <div className="p-6 bg-[#f5f7fa] min-h-screen">
      <h2 className="text-3xl font-bold text-[#0a1f44] mb-4">Settings</h2>
      <p className="text-gray-700 mb-6">
        Manage department preferences and officer access.
      </p>

      {/* Preferences */}
      <div className="bg-white p-4 rounded shadow mb-8">
        <h3 className="text-lg font-semibold text-[#0a1f44] mb-4">
          Department Preferences
        </h3>

        <div className="mb-4">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={() => setNotificationsEnabled(!notificationsEnabled)}
              className="w-5 h-5"
            />
            <span className="text-gray-700">Enable Email Notifications</span>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Default Response Time Threshold (minutes)
          </label>
          <input
            type="number"
            value={responseThreshold}
            onChange={(e) => setResponseThreshold(Number(e.target.value))}
            className="border px-3 py-2 rounded w-32"
          />
        </div>
      </div>

      {/* Officer Access */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold text-[#0a1f44] mb-4">
          Officer Access Control
        </h3>
        <table className="min-w-full table-auto">
          <thead className="bg-[#0a1f44] text-white">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {officers.map((officer) => (
              <tr key={officer.id} className="border-b">
                <td className="px-4 py-2">{officer.name}</td>
                <td className="px-4 py-2">{officer.role}</td>
                <td
                  className={`px-4 py-2 font-semibold ${
                    officer.active ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {officer.active ? "Active" : "Inactive"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
