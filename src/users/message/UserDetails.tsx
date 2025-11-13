import {
  FiUser,
  FiPhone,
  FiMail,
  FiList,
  FiEdit2,
  FiMapPin,
} from "react-icons/fi";

type Props = {
  user: string;
  phone: string;
  email: string;
  title: string;
  description: string;
  address: string;
  offenses: string[];
  onChange: (field: string, value: string) => void;
};

export default function UserDetails({
  user,
  phone,
  email,
  title,
  description,
  address,
  offenses,
  onChange,
}: Props) {
  return (
    <div className="space-y-6">
      {/* Auto-filled User Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 mb-1">
            <FiUser /> Full Name
          </label>
          <input
            type="text"
            value={user}
            readOnly
            placeholder="Auto-filled from signup"
            className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md cursor-not-allowed"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 mb-1">
            <FiPhone /> Phone
          </label>
          <input
            type="tel"
            value={phone}
            readOnly
            placeholder="Auto-filled from signup"
            className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md cursor-not-allowed"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 mb-1">
            <FiMail /> Email
          </label>
          <input
            type="email"
            value={email}
            readOnly
            placeholder="Auto-filled from signup"
            className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md cursor-not-allowed"
          />
        </div>
      </div>

      {/* Offense Type */}
      <div>
        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 mb-1">
          <FiList /> Offense Type
        </label>
        <select
          value={title}
          onChange={(e) => onChange("title", e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select an offense</option>
          {offenses.map((off, i) => (
            <option key={i} value={off}>
              {off}
            </option>
          ))}
        </select>
      </div>

      {/* Description */}
      <div>
        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 mb-1">
          <FiEdit2 /> Description
        </label>
        <textarea
          value={description}
          onChange={(e) => onChange("description", e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          placeholder="Describe the incident clearly..."
          required
        />
      </div>

      {/* Location */}
      <div>
        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 mb-1">
          <FiMapPin /> Location
        </label>
        <input
          type="text"
          value={address}
          onChange={(e) => onChange("address", e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter address or location"
          required
        />
      </div>
    </div>
  );
}
