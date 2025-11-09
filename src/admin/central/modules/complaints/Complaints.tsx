import ComplaintFilter from "./ComplaintFilter";
import ComplaintTable from "./ComplaintTable";
import ComplaintDetails from "./ComplaintDetails";

import { useState } from "react";

type Complaint = {
  id: number;
  subject: string;
  status: string;
  department: string;
};

export default function Complaints() {
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(
    null
  );

  return (
    <div className="p-6 bg-[#f5f7fa] min-h-screen space-y-6">
      <h1 className="text-3xl font-bold text-[#0a1f44]">Complaints</h1>
      <ComplaintFilter />
      <ComplaintTable onSelect={setSelectedComplaint} />
      {selectedComplaint && (
        <ComplaintDetails
          complaint={selectedComplaint}
          onClose={() => setSelectedComplaint(null)}
        />
      )}
    </div>
  );
}
