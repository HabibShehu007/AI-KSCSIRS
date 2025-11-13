import { useState } from "react";
import type { Complaint } from "./data/types";
import {
  FiMic,
  FiFileText,
  FiUser,
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

type Props = {
  complaint: Complaint | null;
  onClose: () => void;
};

export default function ComplaintModal({ complaint, onClose }: Props) {
  const [reply, setReply] = useState("");

  if (!complaint) return null;

  const handleReply = () => {
    if (!reply.trim()) {
      alert("Reply cannot be empty");
      return;
    }

    const stored = JSON.parse(
      localStorage.getItem("complaints-police") || "[]"
    ) as Complaint[];

    const updated = stored.map((c) =>
      c.id === complaint.id ? { ...c, reply } : c
    );

    localStorage.setItem("complaints-police", JSON.stringify(updated));
    alert("Reply sent successfully!");
    onClose();
  };

  const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case "resolved":
        return "bg-green-100 text-green-700";
      case "investigating":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-2xl border border-blue-100">
        <h2 className="text-2xl font-extrabold text-[#0a1f44] mb-4">
          Complaint Details
        </h2>

        <div className="space-y-3 text-sm text-gray-700 font-medium">
          <div className="flex items-center gap-2">
            <FiUser /> <strong>User:</strong> {complaint.user || "Unknown"}
          </div>
          {complaint.phone && (
            <div className="flex items-center gap-2">
              <FiPhone /> <strong>Phone:</strong> {complaint.phone}
            </div>
          )}
          {complaint.email && (
            <div className="flex items-center gap-2">
              <FiMail /> <strong>Email:</strong> {complaint.email}
            </div>
          )}
          <div className="flex items-center gap-2">
            <FiMapPin /> <strong>Location:</strong> {complaint.address || "N/A"}
          </div>
          <div className="flex items-center gap-2">
            <FiClock /> <strong>Submitted:</strong>{" "}
            {new Date(complaint.timestamp).toLocaleString()}
          </div>
          <div className="flex items-center gap-2">
            <FiCheckCircle /> <strong>Status:</strong>{" "}
            <span
              className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusStyle(
                complaint.status || "Pending"
              )}`}
            >
              {complaint.status || "Pending"}
            </span>
          </div>
          <div>
            <strong>Subject:</strong> {complaint.subject || "No subject"}
          </div>
          <div>
            <strong>Message:</strong>{" "}
            {complaint.message || complaint.description || "No description"}
          </div>

          {/* ✅ Voice Note */}
          {complaint.voiceNote && (
            <div className="mt-2 flex items-center gap-2">
              <FiMic className="text-red-600" />
              <audio controls src={complaint.voiceNote} className="w-full" />
            </div>
          )}

          {/* ✅ Attached Files */}
          {Array.isArray(complaint.files) && complaint.files.length > 0 ? (
            <div className="mt-2 space-y-1">
              <p className="font-semibold text-[#0a1f44]">Attached Files:</p>
              {complaint.files.map((file, index) => (
                <a
                  key={index}
                  href={file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline text-sm"
                >
                  <FiFileText /> View File {index + 1}
                </a>
              ))}
            </div>
          ) : (
            <p className="mt-2 text-sm text-gray-500 italic">
              No files attached.
            </p>
          )}

          {/* ✅ Existing Reply */}
          {complaint.reply && (
            <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
              <p className="text-sm text-blue-800 font-semibold">
                Staff Reply:
              </p>
              <p className="text-sm text-blue-700">{complaint.reply}</p>
            </div>
          )}
        </div>

        {/* ✅ Reply Box */}
        {!complaint.reply && (
          <>
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
          </>
        )}

        {/* ✅ Close Only if Already Replied */}
        {complaint.reply && (
          <div className="flex justify-end mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 border rounded hover:bg-gray-100 transition"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
