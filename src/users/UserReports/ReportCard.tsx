import {
  FiShield,
  FiUsers,
  FiMessageSquare,
  FiTruck,
  FiEye,
} from "react-icons/fi";

const icons: any = {
  police: FiShield,
  immigration: FiUsers,
  fireservice: FiMessageSquare,
  roadsafety: FiTruck,
};

type Props = {
  report: any;
  onView: () => void;
};

export default function ReportCard({ report, onView }: Props) {
  const Icon = icons[report.department];

  return (
    <div className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <Icon className="text-blue-700 text-xl" />
          <h3 className="font-bold text-[#0a1f44]">{report.subject}</h3>
        </div>
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${
            report.status === "Resolved"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {report.status}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-1">
        <strong>Department:</strong> {report.department}
      </p>
      <p className="text-sm text-gray-600 mb-1">
        <strong>Location:</strong> {report.address}
      </p>
      <p className="text-sm text-gray-600 mb-1">
        <strong>Submitted:</strong>{" "}
        {new Date(report.timestamp).toLocaleString()}
      </p>
      <p className="text-sm text-gray-700 mt-2">
        {report.message.slice(0, 100)}...
      </p>
      <button
        onClick={onView}
        className="mt-3 text-sm text-blue-700 hover:underline flex items-center gap-1"
      >
        <FiEye /> View Details
      </button>
    </div>
  );
}
