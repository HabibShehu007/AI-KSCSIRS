import { useState, useRef, useEffect } from "react";
import { departmentOffenses } from "./data";
import { saveComplaint } from "./storage";
import Modal from "./Modal";
import MediaUpload from "./MediaUpload";
import { FiSend } from "react-icons/fi";

type Props = {
  department: string;
};

export default function ComplaintForm({ department }: Props) {
  const offenses = departmentOffenses[department] || [];

  const [user, setUser] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [recording, setRecording] = useState(false);
  const [recordTime, setRecordTime] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  // ✅ Auto-fill user info from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("userInfo");
    if (stored) {
      const { name, phone, email } = JSON.parse(stored);
      setUser(name);
      setPhone(phone);
      setEmail(email);
    }
  }, []);

  useEffect(() => {
    let timer: number;
    if (recording) {
      timer = setInterval(() => setRecordTime((t) => t + 1), 1000);
    } else {
      setRecordTime(0);
    }
    return () => clearInterval(timer);
  }, [recording]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        audioChunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
      };

      mediaRecorder.start();
      setRecording(true);
    } catch (error) {
      console.error("Recording failed:", error);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      id: Date.now(),
      user,
      phone,
      email,
      subject: title,
      message: description,
      address,
      files: files ? Array.from(files).map((f) => f.name) : [],
      voiceNote: audioURL ?? undefined,
      timestamp: new Date().toISOString(),
      status: "Pending" as const,
      department,
    };

    setTimeout(() => {
      saveComplaint(department, payload);
      setShowModal(true);
      setTitle("");
      setDescription("");
      setAddress("");
      setFiles(null);
      setAudioURL(null);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-8 bg-white p-8 rounded-2xl shadow-2xl border border-blue-100 max-w-2xl w-full mx-auto"
      >
        <div className="grid gap-6">
          {/* Full Name & Phone in one row on md+ screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={user}
                readOnly
                className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md border border-gray-300 shadow-sm cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                value={phone}
                readOnly
                className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md border border-gray-300 shadow-sm cursor-not-allowed"
              />
            </div>
          </div>

          {/* Email on its own row */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="text"
              value={email}
              readOnly
              className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md border border-gray-300 shadow-sm cursor-not-allowed"
            />
          </div>

          {/* Offense selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Offense Type
            </label>
            <select
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              required
            >
              <option value="">Select Offense</option>
              {offenses.map((offense) => (
                <option key={offense} value={offense}>
                  {offense}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the issue clearly and briefly..."
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Location of Incident
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter address or landmark"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              required
            />
          </div>
        </div>

        {/* Media Upload */}
        <MediaUpload
          files={files}
          audioURL={audioURL}
          recording={recording}
          recordTime={recordTime}
          onStartRecording={startRecording}
          onStopRecording={stopRecording}
          onFileChange={setFiles}
        />

        {/* Submit Button */}
        <div className="text-center pt-6">
          <button
            type="submit"
            disabled={loading}
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-lg shadow-md transition-all duration-300 ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-700 hover:bg-blue-800 text-white"
            }`}
          >
            {loading ? (
              <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
            ) : (
              <>
                <FiSend className="text-xl" /> Submit Complaint
              </>
            )}
          </button>
        </div>
      </form>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Complaint Submitted"
        message="Your report has been successfully recorded. Thank you for speaking up!"
      />
    </>
  );
}
