import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const monthlyStats = [
  { month: "Jan", messages: 120, crimes: 45 },
  { month: "Feb", messages: 98, crimes: 38 },
  { month: "Mar", messages: 130, crimes: 50 },
  { month: "Apr", messages: 110, crimes: 42 },
  { month: "May", messages: 140, crimes: 55 },
  { month: "Jun", messages: 125, crimes: 48 },
  { month: "Jul", messages: 150, crimes: 60 },
  { month: "Aug", messages: 135, crimes: 52 },
  { month: "Sep", messages: 145, crimes: 58 },
  { month: "Oct", messages: 160, crimes: 65 },
  { month: "Nov", messages: 155, crimes: 62 },
  { month: "Dec", messages: 170, crimes: 70 },
];

const complaintResolution = [
  { name: "Resolved", value: 65 },
  { name: "Pending", value: 22 },
];

const crimeTypes = [
  { type: "Theft", count: 28 },
  { type: "Assault", count: 18 },
  { type: "Fraud", count: 12 },
  { type: "Vandalism", count: 9 },
  { type: "Other", count: 18 },
];

const COLORS = ["#0a1f44", "#f59e0b", "#10b981", "#ef4444", "#6366f1"];

export default function Dashboard() {
  return (
    <div className="p-6 bg-[#f5f7fa] min-h-screen">
      <h1 className="text-3xl font-bold text-[#0a1f44] mb-4">
        Police Department Dashboard
      </h1>
      <p className="text-gray-700 mb-8">
        Welcome back, Inspector Musa. Here's your monthly overview of police
        activity and case resolution.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded shadow text-[#0a1f44]">
          <h2 className="text-lg font-semibold">Total Complaints</h2>
          <p className="text-2xl font-bold mt-2">87</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-green-700">
          <h2 className="text-lg font-semibold">Resolved Cases</h2>
          <p className="text-2xl font-bold mt-2">65</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-red-600">
          <h2 className="text-lg font-semibold">Pending Cases</h2>
          <p className="text-2xl font-bold mt-2">22</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Monthly Activity Bar Chart */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold text-[#0a1f44] mb-4">
            Monthly Activity
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={monthlyStats}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="messages" fill="#0a1f44" name="Messages" />
              <Bar dataKey="crimes" fill="#f59e0b" name="Crimes" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Complaint Resolution Pie Chart */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold text-[#0a1f44] mb-4">
            Complaint Resolution
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={complaintResolution}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {complaintResolution.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Crime Type Distribution */}
      <div className="bg-white p-4 rounded shadow mb-8">
        <h2 className="text-lg font-semibold text-[#0a1f44] mb-4">
          Crime Type Distribution
        </h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={crimeTypes}
              dataKey="count"
              nameKey="type"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {crimeTypes.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activity Feed */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold text-[#0a1f44] mb-4">
          Recent Activity
        </h2>
        <ul className="text-gray-700 space-y-2">
          <li>
            Complaint from <strong>Zainab Bello</strong> resolved
          </li>
          <li>
            New crime report filed by <strong>Officer Kabir</strong>
          </li>
          <li>
            Message received from <strong>Fatima Umar</strong>
          </li>
          <li>
            Theft reported by <strong>Abdullahi Sani</strong>
          </li>
          <li>
            Fraud case submitted by <strong>Inspector Amina</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}
