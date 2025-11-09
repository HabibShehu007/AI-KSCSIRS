export default function PoliceTopBar() {
  return (
    <div className="bg-[#0a1f44] text-white px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between shadow">
      <div>
        <h1 className="text-2xl font-bold">Katsina State Police Department</h1>
        <p className="text-sm text-gray-200">
          Upholding law and order, protecting lives, and serving the community
          with integrity.
        </p>
      </div>

      <div className="mt-4 md:mt-0 flex items-center gap-4">
        <span className="text-sm">👮 Logged in as: Inspector Musa</span>
        <button className="bg-white text-[#0a1f44] px-3 py-1 rounded hover:bg-gray-100 transition">
          Logout
        </button>
      </div>
    </div>
  );
}
