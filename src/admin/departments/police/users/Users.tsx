import { useState } from "react";

type User = {
  id: string;
  name: string;
  role: string;
  email: string;
};

const mockUsers: User[] = [
  {
    id: "u001",
    name: "Inspector Musa",
    role: "Officer",
    email: "musa@police.gov.ng",
  },
  {
    id: "u002",
    name: "Sergeant Amina",
    role: "Investigator",
    email: "amina@police.gov.ng",
  },
  {
    id: "u003",
    name: "DPO Kabir",
    role: "Admin",
    email: "kabir@police.gov.ng",
  },
];

export default function Users() {
  const [search, setSearch] = useState("");

  const filteredUsers = mockUsers.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-[#f5f7fa] min-h-screen">
      <h1 className="text-3xl font-bold text-[#0a1f44] mb-6">
        Police User Management
      </h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name or email"
        className="px-4 py-2 border rounded-md mb-4 w-full md:w-1/3"
      />

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-[#0a1f44] text-white">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:underline">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
