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

const passportData = [
  { month: "Jan", applications: 120 },
  { month: "Feb", applications: 98 },
  { month: "Mar", applications: 130 },
  { month: "Apr", applications: 110 },
  { month: "May", applications: 140 },
  { month: "Jun", applications: 125 },
  { month: "Jul", applications: 150 },
  { month: "Aug", applications: 135 },
  { month: "Sep", applications: 145 },
  { month: "Oct", applications: 160 },
  { month: "Nov", applications: 155 },
  { month: "Dec", applications: 170 },
];

const passportBacklog = [
  { month: "Jan", pending: 30 },
  { month: "Feb", pending: 22 },
  { month: "Mar", pending: 35 },
  { month: "Apr", pending: 28 },
  { month: "May", pending: 40 },
  { month: "Jun", pending: 33 },
  { month: "Jul", pending: 45 },
  { month: "Aug", pending: 38 },
  { month: "Sep", pending: 42 },
  { month: "Oct", pending: 50 },
  { month: "Nov", pending: 48 },
  { month: "Dec", pending: 55 },
];

const visaData = [
  { name: "Approved", value: 320 },
  { name: "Rejected", value: 80 },
];

const visaProcessingTime = [
  { month: "Jan", days: 12 },
  { month: "Feb", days: 10 },
  { month: "Mar", days: 14 },
  { month: "Apr", days: 11 },
  { month: "May", days: 13 },
  { month: "Jun", days: 12 },
  { month: "Jul", days: 15 },
  { month: "Aug", days: 14 },
  { month: "Sep", days: 13 },
  { month: "Oct", days: 16 },
  { month: "Nov", days: 15 },
  { month: "Dec", days: 17 },
];

const borderMessages = [
  { week: "Week 1", messages: 45 },
  { week: "Week 2", messages: 60 },
  { week: "Week 3", messages: 52 },
  { week: "Week 4", messages: 70 },
];

const COLORS = ["#0a1f44", "#f59e0b", "#10b981", "#ef4444", "#6366f1"];

export default function Dashboard() {
  return (
    <div className="p-6 bg-[#f5f7fa] min-h-screen">
      <h2 className="text-3xl font-bold text-[#0a1f44] mb-4">
        Immigration Dashboard
      </h2>
      <p className="text-gray-700 mb-8">
        Welcome to the Immigration Department portal. Here's your monthly
        overview of applications, approvals, and border activity.
      </p>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Passport Applications */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold text-[#0a1f44] mb-4">
            Monthly Passport Applications
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={passportData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="applications" fill="#0a1f44" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Visa Approval Rate */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold text-[#0a1f44] mb-4">
            Visa Approval Rate
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={visaData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {visaData.map((entry, index) => (
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

      {/* Additional Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Passport Backlog Tracker */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold text-[#0a1f44] mb-4">
            Passport Backlog Tracker
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={passportBacklog}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="pending" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Visa Processing Time */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold text-[#0a1f44] mb-4">
            Visa Processing Time (Days)
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={visaProcessingTime}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="days"
                stroke="#0a1f44"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Border Messages */}
      <div className="bg-white p-4 rounded shadow mb-8">
        <h3 className="text-lg font-semibold text-[#0a1f44] mb-4">
          Border Messages Volume
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={borderMessages}>
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="messages"
              stroke="#f59e0b"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold text-[#0a1f44] mb-4">
          Recent Immigration Activity
        </h3>
        <ul className="text-gray-700 space-y-2">
          <li>
            Passport application from <strong>Fatima Umar</strong> received
          </li>
          <li>
            Visa approved for <strong>Aliyu Musa</strong>
          </li>
          <li>
            Message from <strong>Jibia Border Post</strong> logged
          </li>
          <li>
            Backlog updated for <strong>October</strong>
          </li>
          <li>
            Visa processing time improved in <strong>November</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}
