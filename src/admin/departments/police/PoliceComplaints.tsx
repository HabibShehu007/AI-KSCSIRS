import { useState } from "react";
import {
  FiUser,
  FiMapPin,
  FiClock,
  FiPhone,
  FiMail,
  FiEye,
} from "react-icons/fi";
import ComplaintFilters from "./ComplaintFilters";
import ComplaintModal from "./ComplaintModal";
import Pagination from "./Pagination";
import type { Complaint } from "./data/types";

export default function PoliceComplaints() {
  const [showModal, setShowModal] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(
    null
  );
  const [filters, setFilters] = useState({ search: "", status: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const storedComplaints = JSON.parse(
    localStorage.getItem("complaints-police") || "[]"
  ) as Complaint[];

  const filteredComplaints = storedComplaints.filter((c) => {
    const matchesSearch =
      (c.user?.toLowerCase() || "").includes(filters.search.toLowerCase()) ||
      (c.subject?.toLowerCase() || "").includes(filters.search.toLowerCase());

    const matchesStatus = filters.status === "" || c.status === filters.status;

    return matchesSearch && matchesStatus;
  });

  const paginatedComplaints = filteredComplaints.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
    <div className="p-6 bg-[#f5f7fa] min-h-screen">
      <h1 className="text-3xl font-bold text-[#0a1f44] mb-6">
        Police Complaint Management
      </h1>

      <ComplaintFilters onFilterChange={setFilters} />

      {filteredComplaints.length === 0 ? (
        <p className="text-center text-gray-500 font-medium mt-6">
          No complaints found for the Police department.
        </p>
      ) : (
        <>
          <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedComplaints.map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-xl shadow border border-blue-200 p-5 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#0a1f44] font-bold text-lg">
                    <FiUser /> {c.user || "Unknown User"}
                  </div>
                  <div className="text-sm text-gray-600 flex items-center gap-2">
                    <FiPhone /> {c.phone || "No phone"}
                  </div>
                  {c.email && (
                    <div className="text-sm text-gray-600 flex items-center gap-2">
                      <FiMail /> {c.email}
                    </div>
                  )}
                  <div className="text-sm text-gray-600 flex items-center gap-2">
                    <FiMapPin /> {c.address || "No address"}
                  </div>
                  <div className="text-sm text-gray-600 flex items-center gap-2">
                    <FiClock /> {new Date(c.timestamp).toLocaleString()}
                  </div>
                  <div className="mt-2 font-semibold text-[#0a1f44]">
                    Subject: {c.subject || "No subject"}
                  </div>
                  <div className="text-sm text-gray-700">
                    {c.message || c.description || "No description provided."}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusStyle(
                      c.status || "Pending"
                    )}`}
                  >
                    {c.status || "Pending"}
                  </span>
                  <button
                    onClick={() => {
                      setSelectedComplaint(c);
                      setShowModal(true);
                    }}
                    className="text-blue-700 hover:text-blue-900 font-semibold flex items-center gap-1"
                  >
                    <FiEye /> View
                  </button>
                </div>
              </div>
            ))}
          </div>

          <Pagination
            totalItems={filteredComplaints.length}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
          />
        </>
      )}

      {showModal && selectedComplaint && (
        <ComplaintModal
          complaint={selectedComplaint}
          onClose={() => {
            setShowModal(false);
            setSelectedComplaint(null);
          }}
        />
      )}
    </div>
  );
}
