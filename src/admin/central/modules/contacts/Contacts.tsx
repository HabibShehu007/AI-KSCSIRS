import ContactFilter from "./ContactFilter";
import ContactTable from "./ContactTable";
import ContactDetails from "./ContactDetails";
import { useState } from "react";

type Contact = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  department: string;
  createdAt: string;
};

export default function Contacts() {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  return (
    <div className="p-6 bg-[#f5f7fa] min-h-screen space-y-6">
      <h1 className="text-3xl font-bold text-[#0a1f44]">Contact Messages</h1>
      <ContactFilter />
      <ContactTable onSelect={setSelectedContact} />
      {selectedContact && (
        <ContactDetails
          contact={selectedContact}
          onClose={() => setSelectedContact(null)}
        />
      )}
    </div>
  );
}
