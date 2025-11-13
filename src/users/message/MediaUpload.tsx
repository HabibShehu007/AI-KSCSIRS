import { FiFilePlus, FiMic, FiMicOff } from "react-icons/fi";

type Props = {
  files: FileList | null;
  audioURL: string | null;
  recording: boolean;
  recordTime: number;
  onStartRecording: () => void;
  onStopRecording: () => void;
  onFileChange: (files: FileList | null) => void;
};

export default function MediaUpload({
  files,
  audioURL,
  recording,
  recordTime,
  onStartRecording,
  onStopRecording,
  onFileChange,
}: Props) {
  return (
    <div className="space-y-6">
      {/* File Upload */}
      <div>
        <label
          htmlFor="file-upload"
          className="flex justify-between items-center bg-blue-50 border-2 border-blue-300 rounded-lg px-4 py-3 cursor-pointer hover:bg-blue-100 transition"
        >
          <span className="flex gap-2 items-center text-[#0a1f44] font-bold text-base">
            <FiFilePlus className="text-xl" /> Upload Supporting Files
          </span>
          <span className="text-sm text-blue-700 font-medium">
            Click to select files
          </span>
        </label>
        <input
          id="file-upload"
          type="file"
          multiple
          onChange={(e) => onFileChange(e.target.files)}
          className="hidden"
        />
        {files && files.length > 0 && (
          <ul className="mt-2 text-sm text-gray-700 font-semibold list-disc list-inside">
            {Array.from(files).map((file, idx) => (
              <li key={idx}>{file.name}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Voice Note */}
      <div>
        <label className="text-lg font-bold text-[#0a1f44] mb-2 flex gap-2 items-center">
          <FiMic /> Voice Note
        </label>
        <div className="flex flex-wrap gap-4 items-center">
          {!recording ? (
            <button
              type="button"
              onClick={onStartRecording}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 font-semibold"
            >
              <FiMic /> Start
            </button>
          ) : (
            <button
              type="button"
              onClick={onStopRecording}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 font-semibold"
            >
              <FiMicOff /> Stop
            </button>
          )}

          {recording && (
            <div className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-bold animate-pulse shadow-sm">
              <span className="h-3 w-3 bg-red-600 rounded-full animate-ping" />
              <span>Recording... {recordTime}s</span>
            </div>
          )}

          {audioURL && (
            <audio
              controls
              src={audioURL}
              className="mt-2 w-full max-w-xs rounded shadow"
            />
          )}
        </div>
      </div>
    </div>
  );
}
