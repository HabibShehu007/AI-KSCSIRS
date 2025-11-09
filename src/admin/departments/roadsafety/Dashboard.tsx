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

const incidentData = [
  { month: "Jan", incidents: 45 },
  { month: "Feb", incidents: 38 },
  { month: "Mar", incidents: 50 },
  { month: "Apr", incidents: 42 },
  { month: "May", incidents: 55 },
  { month: "Jun", incidents: 48 },
  { month: "Jul", incidents: 60 },
  { month: "Aug", incidents: 52 },
  { month: "Sep", incidents: 58 },
  { month: "Oct", incidents: 65 },
  { month: "Nov", incidents: 62 },
  { month: "Dec", incidents: 70 },
];

const violationData = [
  { name: "Speeding", value: 120 },
  { name: "DUI", value: 45 },
  { name: "No Seatbelt", value: 80 },
  { name: "Reckless Driving", value: 60 },
];

const responseTimeData = [
  { month: "Jan", minutes: 12 },
  { month: "Feb", minutes: 10 },
  { month: "Mar", minutes: 14 },
  { month: "Apr", minutes: 11 },
  { month: "May", minutes: 13 },
  { month: "Jun", minutes: 12 },
  { month: "Jul", minutes: 15 },
  { month: "Aug", minutes: 14 },
  { month: "Sep", minutes: 13 },
  { month: "Oct", minutes: 16 },
  { month: "Nov", minutes: 15 },
  { month: "Dec", minutes: 17 },
];

const COLORS = ["#0a1f44", "#f59e0b", "#10b981", "#ef4444"];

export default function Dashboard() {
  return (
    <div className="p-6 bg-[#f5f7fa] min-h-screen">
      <h2 className="text-3xl font-bold text-[#0a1f44] mb-4">
        Road Safety Dashboard
      </h2>
      <p className="text-gray-700 mb-8">
        Welcome to the Road Safety Department portal. Here's your monthly
        overview of traffic incidents, violations, and emergency response.
      </p>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Traffic Incidents Bar Chart */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold text-[#0a1f44] mb-4">
            Monthly Traffic Incidents
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={incidentData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="incidents" fill="#0a1f44" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Driver Violation Pie Chart */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold text-[#0a1f44] mb-4">
            Driver Violation Breakdown
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={violationData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {violationData.map((entry, index) => (
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

      {/* Emergency Response Time */}
      <div className="bg-white p-4 rounded shadow mb-8">
        <h3 className="text-lg font-semibold text-[#0a1f44] mb-4">
          Emergency Response Time (Minutes)
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={responseTimeData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="minutes"
              stroke="#f59e0b"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activity Feed */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold text-[#0a1f44] mb-4">
          Recent Safety Activity
        </h3>
        <ul className="text-gray-700 space-y-2">
          <li>
            Incident reported near <strong>Kofar Sauri</strong>
          </li>
          <li>
            Speeding violation logged for <strong>Driver ID 1023</strong>
          </li>
          <li>
            Emergency response dispatched to <strong>Funtua Highway</strong>
          </li>
          <li>
            DUI case filed by <strong>Officer Musa</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}
