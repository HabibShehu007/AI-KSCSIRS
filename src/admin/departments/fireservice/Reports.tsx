import { useState } from "react";

const fireReports = [
  {
    id: 1,
    location: "Kankia Market",
    type: "Warehouse Fire",
    date: "2025-11-01",
    status: "Resolved",
    severity: "High",
  },
  {
    id: 2,
    location: "Funtua Highway",
    type: "Vehicle Fire",
    date: "2025-11-03",
    status: "Pending",
    severity: "Medium",
  },
  {
    id: 3,
    location: "Dutsin-Ma Junction",
    type: "Residential Fire",
    date: "2025-10-28",
    status: "Resolved",
    severity: "Low",
  },
  {
    id: 4,
    location: "Kofar Sauri",
    type: "Electrical Fire",
    date: "2025-11-05",
    status: "Pending",
    severity: "High",
  },
];

export default function Reports() {
  const [filter, setFilter] = useState("All");

  const filteredReports =
    filter === "All"
      ? fireReports
      : fireReports.filter((r) => r.status === filter);

  const total = fireReports.length;
  const resolved = fireReports.filter((r) => r.status === "Resolved").length;
  const pending = fireReports.filter((r) => r.status === "Pending").length;

  return (
    <div className="p-6 bg-[#f5f7fa] min-h-screen">
      <h2 className="text-3xl font-bold text-[#0a1f44] mb-4">Fire Reports</h2>
      <p className="text-gray-700 mb-6">
        View and manage reported fire incidents across Katsina State.
      </p>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded shadow text-[#0a1f44]">
          <h3 className="text-lg font-semibold">Total Reports</h3>
          <p className="text-2xl font-bold mt-2">{total}</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-green-700">
          <h3 className="text-lg font-semibold">Resolved</h3>
          <p className="text-2xl font-bold mt-2">{resolved}</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-red-600">
          <h3 className="text-lg font-semibold">Pending</h3>
          <p className="text-2xl font-bold mt-2">{pending}</p>
        </div>
      </div>

      {/* Filter */}
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700 mr-2">
          Filter by status:
        </label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-3 py-2 border rounded"
        >
          <option value="All">All</option>
          <option value="Resolved">Resolved</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      {/* Report Table */}
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-[#0a1f44] text-white">
            <tr>
              <th className="px-4 py-2 text-left">Location</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Severity</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.map((report) => (
              <tr key={report.id} className="border-b">
                <td className="px-4 py-2">{report.location}</td>
                <td className="px-4 py-2">{report.type}</td>
                <td className="px-4 py-2">{report.date}</td>
                <td
                  className={`px-4 py-2 font-semibold ${
                    report.status === "Resolved"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {report.status}
                </td>
                <td className="px-4 py-2">{report.severity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
