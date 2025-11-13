type Props = {
  report: any;
  onClose: () => void;
};

export default function ReportModal({ report, onClose }: Props) {
  if (!report) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl max-w-md w-full shadow-lg">
        <h3 className="text-xl font-bold text-[#0a1f44] mb-2">
          {report.subject}
        </h3>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Department:</strong> {report.department}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Status:</strong> {report.status}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Location:</strong> {report.address}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Submitted:</strong>{" "}
          {new Date(report.timestamp).toLocaleString()}
        </p>
        <p className="text-sm text-gray-700 mt-3">{report.message}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-[#0a1f44] text-white rounded-md hover:bg-blue-800"
        >
          Close
        </button>
      </div>
    </div>
  );
}
