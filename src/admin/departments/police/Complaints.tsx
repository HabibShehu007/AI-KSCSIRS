import { useState } from "react";
import ComplaintFilters from "./ComplaintFilters";
import ComplaintTable from "./ComplaintTable";
import ComplaintModal from "./ComplaintModal";
import Pagination from "./Pagination";
import complaints from "./mockComplaints";
import type { Complaint } from "./types";

export default function Complaints() {
  const [showModal, setShowModal] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(
    null
  );
  const [filters, setFilters] = useState({ search: "", status: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter complaints for police department only
  const policeComplaints = complaints.filter((c) => c.department === "police");

  // Apply search and status filters
  const filteredComplaints = policeComplaints.filter((c) => {
    const matchesSearch =
      c.user.toLowerCase().includes(filters.search.toLowerCase()) ||
      c.subject.toLowerCase().includes(filters.search.toLowerCase());

    const matchesStatus = filters.status === "" || c.status === filters.status;

    return matchesSearch && matchesStatus;
  });

  // Paginate filtered complaints
  const paginatedComplaints = filteredComplaints.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 bg-[#f5f7fa] min-h-screen">
      <h1 className="text-3xl font-bold text-[#0a1f44] mb-6">
        Police Complaint Management
      </h1>

      <ComplaintFilters onFilterChange={setFilters} />

      <ComplaintTable
        complaints={paginatedComplaints}
        onView={(complaint) => {
          setSelectedComplaint(complaint);
          setShowModal(true);
        }}
      />

      <Pagination
        totalItems={filteredComplaints.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />

      {showModal && (
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
