type Complaint = {
  id: number;
  subject: string;
  status: string;
  department: string;
};

interface ComplaintTableProps {
  onSelect: (complaint: Complaint) => void;
}

const dummyComplaints: Complaint[] = [
  {
    id: 1,
    subject: "Noise Complaint",
    status: "Pending",
    department: "Police",
  },
  {
    id: 2,
    subject: "Passport Delay",
    status: "Resolved",
    department: "Immigration",
  },
];

export default function ComplaintTable({ onSelect }: ComplaintTableProps) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <table className="w-full text-left">
        <thead>
          <tr className="text-[#0a1f44]">
            <th className="py-2">Subject</th>
            <th>Status</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dummyComplaints.map((c) => (
            <tr key={c.id} className="border-t">
              <td className="py-2">{c.subject}</td>
              <td>{c.status}</td>
              <td>{c.department}</td>
              <td>
                <button
                  onClick={() => onSelect(c)}
                  className="text-blue-600 hover:underline"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
