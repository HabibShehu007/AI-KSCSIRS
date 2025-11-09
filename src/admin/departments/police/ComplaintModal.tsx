import { useState } from "react";
import type { Complaint } from "./types";

type Props = {
  complaint: Complaint | null;
  onClose: () => void;
};

export default function ComplaintModal({ complaint, onClose }: Props) {
  const [reply, setReply] = useState("");

  const handleReply = () => {
    if (!reply.trim()) {
      alert("Reply cannot be empty");
      return;
    }

    // Simulate saving reply (e.g., localStorage or mock update)
    console.log("Reply sent:", reply);
    alert("Reply sent successfully!");

    onClose(); // Close modal after reply
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold text-[#0a1f44] mb-4">
          Complaint Details
        </h2>

        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <strong>User:</strong> {complaint?.user}
          </p>
          <p>
            <strong>Subject:</strong> {complaint?.subject}
          </p>
          <p>
            <strong>Message:</strong> {complaint?.message}
          </p>
          <p>
            <strong>Status:</strong> {complaint?.status}
          </p>
          <p>
            <strong>Date:</strong> {complaint?.date}
          </p>
          <p className="text-xs text-gray-500">
            <strong>Handled by:</strong> Police Department
          </p>
        </div>

        <textarea
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="Reply to complaint..."
          className="w-full mt-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#0a1f44]"
        />

        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded hover:bg-gray-100 transition"
          >
            Close
          </button>
          <button
            onClick={handleReply}
            className="px-4 py-2 bg-[#0a1f44] text-white rounded hover:bg-[#09203b] transition"
          >
            Send Reply
          </button>
        </div>
      </div>
    </div>
  );
}
