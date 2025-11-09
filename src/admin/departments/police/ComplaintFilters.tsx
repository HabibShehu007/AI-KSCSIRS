import { useState } from "react";

type Props = {
  onFilterChange: (filters: { search: string; status: string }) => void;
};

export default function ComplaintFilters({ onFilterChange }: Props) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    onFilterChange({ search: value, status });
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setStatus(value);
    onFilterChange({ search, status: value });
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search by user or subject"
        className="px-4 py-2 border rounded-md w-full md:w-1/3"
      />
      <select
        value={status}
        onChange={handleStatusChange}
        className="px-4 py-2 border rounded-md"
      >
        <option value="">All Status</option>
        <option value="Pending">Pending</option>
        <option value="Resolved">Resolved</option>
      </select>
    </div>
  );
}
