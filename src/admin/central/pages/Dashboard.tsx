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
  LineChart,
  Line,
} from "recharts";

const userActivityData = [
  { day: "Mon", logins: 12 },
  { day: "Tue", logins: 18 },
  { day: "Wed", logins: 10 },
  { day: "Thu", logins: 22 },
  { day: "Fri", logins: 15 },
  { day: "Sat", logins: 9 },
  { day: "Sun", logins: 5 },
];

const complaintData = [
  { name: "Resolved", value: 65 },
  { name: "Pending", value: 35 },
];

const contactData = [
  { week: "Week 1", contacts: 20 },
  { week: "Week 2", contacts: 35 },
  { week: "Week 3", contacts: 25 },
  { week: "Week 4", contacts: 40 },
];

const COLORS = ["#0a1f44", "#f59e0b"];

export default function Dashboard() {
  return (
    <div className="p-6 bg-[#f5f7fa] min-h-screen">
      <h1 className="text-3xl font-bold text-[#0a1f44] mb-4">
        Admin Dashboard
      </h1>
      <p className="text-gray-700 mb-8">
        Welcome back, Habib! This is your central hub for managing users,
        reports, and system settings.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded shadow text-[#0a1f44]">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-2xl font-bold mt-2">1,245</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-[#0a1f44]">
          <h2 className="text-lg font-semibold">Complaints</h2>
          <p className="text-2xl font-bold mt-2">87</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-[#0a1f44]">
          <h2 className="text-lg font-semibold">Contacts</h2>
          <p className="text-2xl font-bold mt-2">312</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* User Activity Bar Chart */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold text-[#0a1f44] mb-4">
            User Activity
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={userActivityData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="logins" fill="#0a1f44" />
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
                data={complaintData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {complaintData.map((entry, index) => (
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

      {/* Contact Volume Line Chart */}
      <div className="bg-white p-4 rounded shadow mb-8">
        <h2 className="text-lg font-semibold text-[#0a1f44] mb-4">
          Contact Volume
        </h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={contactData}>
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="contacts"
              stroke="#0a1f44"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activity Feed */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold text-[#0a1f44] mb-4">
          Recent Activity
        </h2>
        <ul className="text-gray-700 space-y-2">
          <li>
            User <strong>Aliyu</strong> registered
          </li>
          <li>
            Complaint from <strong>Zainab</strong> resolved
          </li>
          <li>
            New contact message from <strong>Fatima</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}
