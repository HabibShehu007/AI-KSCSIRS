const mockMessages = [
  {
    id: 1,
    sender: "Border Post",
    text: "Fire outbreak reported near Kankia.",
    attachment: "fire_report.pdf",
    voiceNote: "voice_note_1.mp3",
    time: "2025-11-07 14:32",
  },
  {
    id: 2,
    sender: "Officer Yusuf",
    text: "Received. Dispatching team now.",
    attachment: null,
    voiceNote: null,
    time: "2025-11-07 14:35",
  },
  {
    id: 3,
    sender: "Border Post",
    text: "Sending voice update.",
    attachment: null,
    voiceNote: "voice_note_2.mp3",
    time: "2025-11-07 14:40",
  },
];

export default function Messages() {
  return (
    <div className="p-6 bg-[#f5f7fa] min-h-screen">
      <h2 className="text-3xl font-bold text-[#0a1f44] mb-4">Messages</h2>
      <p className="text-gray-700 mb-6">
        View and respond to fire-related messages, including attachments and
        voice notes.
      </p>

      <div className="space-y-4">
        {mockMessages.map((msg) => (
          <div key={msg.id} className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-[#0a1f44]">{msg.sender}</span>
              <span className="text-sm text-gray-500">{msg.time}</span>
            </div>
            <p className="text-gray-800 mb-2">{msg.text}</p>

            {msg.attachment && (
              <div className="text-sm text-blue-600">
                📎 Attachment:{" "}
                <span className="underline">{msg.attachment}</span>
              </div>
            )}

            {msg.voiceNote && (
              <div className="mt-2">
                🔊 Voice Note:
                <audio controls className="mt-1 w-full">
                  <source src={`/${msg.voiceNote}`} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
