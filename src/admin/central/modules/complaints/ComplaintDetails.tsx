type Complaint = {
  id: number;
  subject: string;
  status: string;
  department: string;
};

interface ComplaintDetailsProps {
  complaint: Complaint;
  onClose: () => void;
}

export default function ComplaintDetails({
  complaint,
  onClose,
}: ComplaintDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h2 className="text-xl font-bold text-[#0a1f44] mb-4">
          {complaint.subject}
        </h2>
        <p>
          <strong>Status:</strong> {complaint.status}
        </p>
        <p>
          <strong>Department:</strong> {complaint.department}
        </p>
        <p className="mt-4 text-sm text-gray-600">
          This is a placeholder for full complaint details.
        </p>
        <button
          onClick={onClose}
          className="mt-6 bg-[#0a1f44] text-white px-4 py-2 rounded hover:bg-[#09203b]"
        >
          Close
        </button>
      </div>
    </div>
  );
}
