type Contact = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  department: string;
  createdAt: string;
};

interface ContactTableProps {
  onSelect: (contact: Contact) => void;
}

const dummyContacts: Contact[] = [
  {
    id: 1,
    name: "Fatima",
    email: "fatima@example.com",
    subject: "Passport Inquiry",
    message: "I need help with my passport application.",
    department: "Immigration",
    createdAt: "2025-11-07T10:00:00Z",
  },
  {
    id: 2,
    name: "Aliyu",
    email: "aliyu@example.com",
    subject: "Fire Safety Concern",
    message: "There’s a blocked fire exit in my building.",
    department: "Fire Service",
    createdAt: "2025-11-08T09:30:00Z",
  },
];

export default function ContactTable({ onSelect }: ContactTableProps) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <table className="w-full text-left">
        <thead>
          <tr className="text-[#0a1f44]">
            <th>Name</th>
            <th>Subject</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dummyContacts.map((c) => (
            <tr key={c.id} className="border-t">
              <td>{c.name}</td>
              <td>{c.subject}</td>
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
