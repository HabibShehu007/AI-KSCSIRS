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

const fireIncidents = [
  { month: "Jan", incidents: 12 },
  { month: "Feb", incidents: 9 },
  { month: "Mar", incidents: 15 },
  { month: "Apr", incidents: 11 },
  { month: "May", incidents: 18 },
  { month: "Jun", incidents: 14 },
  { month: "Jul", incidents: 20 },
  { month: "Aug", incidents: 17 },
  { month: "Sep", incidents: 19 },
  { month: "Oct", incidents: 22 },
  { month: "Nov", incidents: 21 },
  { month: "Dec", incidents: 25 },
];

const responseTimes = [
  { month: "Jan", minutes: 8 },
  { month: "Feb", minutes: 7 },
  { month: "Mar", minutes: 9 },
  { month: "Apr", minutes: 8 },
  { month: "May", minutes: 10 },
  { month: "Jun", minutes: 9 },
  { month: "Jul", minutes: 11 },
  { month: "Aug", minutes: 10 },
  { month: "Sep", minutes: 9 },
  { month: "Oct", minutes: 12 },
  { month: "Nov", minutes: 11 },
  { month: "Dec", minutes: 13 },
];

const equipmentStatus = [
  { name: "Operational", value: 75 },
  { name: "Under Maintenance", value: 25 },
];

const COLORS = ["#0a1f44", "#f59e0b"];

export default function Dashboard() {
  return (
    <div className="p-6 bg-[#f5f7fa] min-h-screen">
      <h2 className="text-3xl font-bold text-[#0a1f44] mb-4">
        Fire Service Dashboard
      </h2>
      <p className="text-gray-700 mb-8">
        Welcome to the Fire Service Department portal. Here's your monthly
        overview of fire incidents, response times, and equipment status.
      </p>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Fire Incidents Bar Chart */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold text-[#0a1f44] mb-4">
            Monthly Fire Incidents
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={fireIncidents}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="incidents" fill="#0a1f44" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Equipment Readiness Pie Chart */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold text-[#0a1f44] mb-4">
            Equipment Readiness
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={equipmentStatus}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {equipmentStatus.map((entry, index) => (
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

      {/* Response Time Line Chart */}
      <div className="bg-white p-4 rounded shadow mb-8">
        <h3 className="text-lg font-semibold text-[#0a1f44] mb-4">
          Response Time Tracker (Minutes)
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={responseTimes}>
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
          Recent Fire Activity
        </h3>
        <ul className="text-gray-700 space-y-2">
          <li>
            Fire outbreak reported near <strong>Kankia Market</strong>
          </li>
          <li>
            Team dispatched to <strong>Funtua Warehouse</strong>
          </li>
          <li>
            Equipment maintenance scheduled for <strong>Unit 3</strong>
          </li>
          <li>
            Voice alert received from <strong>Border Post</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}
