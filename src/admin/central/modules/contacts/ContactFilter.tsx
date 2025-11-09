export default function ContactFilter() {
  return (
    <div className="bg-white p-4 rounded shadow flex flex-wrap gap-4">
      <input
        type="text"
        placeholder="Search by name or subject"
        className="border px-3 py-2 rounded w-full md:w-1/3"
      />
      <select className="border px-3 py-2 rounded w-full md:w-1/4">
        <option>Department: All</option>
        <option>Police</option>
        <option>Immigration</option>
        <option>Fire Service</option>
      </select>
      <button className="bg-[#0a1f44] text-white px-4 py-2 rounded hover:bg-[#09203b]">
        Filter
      </button>
    </div>
  );
}
