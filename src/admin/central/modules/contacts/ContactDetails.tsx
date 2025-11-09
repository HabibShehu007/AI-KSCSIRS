type Contact = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  department: string;
  createdAt: string;
};

interface ContactDetailsProps {
  contact: Contact;
  onClose: () => void;
}

export default function ContactDetails({
  contact,
  onClose,
}: ContactDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h2 className="text-xl font-bold text-[#0a1f44] mb-4">
          {contact.subject}
        </h2>
        <p>
          <strong>Name:</strong> {contact.name}
        </p>
        <p>
          <strong>Email:</strong> {contact.email}
        </p>
        <p>
          <strong>Department:</strong> {contact.department}
        </p>
        <p>
          <strong>Submitted:</strong>{" "}
          {new Date(contact.createdAt).toLocaleString()}
        </p>
        <p className="mt-4 text-gray-700">{contact.message}</p>
        <button
          onClick={onClose}
          className="mt-6 bg-[#0a1f44] text-white px-4 py-2 rounded hover:bg-[#09203b]"
        >
          Close
        </button>
      </div>
    </div>
  );
}
