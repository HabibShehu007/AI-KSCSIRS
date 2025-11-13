import { useEffect, useRef, useState } from "react";

type Props = {
  complaintCount: number;
};

export default function AlertSound({ complaintCount }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(() => {
    return localStorage.getItem("police-muted") === "true";
  });

  const toggleMute = () => {
    const newState = !isMuted;
    setIsMuted(newState);
    localStorage.setItem("police-muted", String(newState));
  };

  useEffect(() => {
    const lastCount = Number(
      localStorage.getItem("police-complaint-count") || "0"
    );

    if (complaintCount > lastCount && !isMuted && audioRef.current) {
      audioRef.current
        .play()
        .catch((err) => console.error("Playback failed:", err));
    }

    localStorage.setItem("police-complaint-count", String(complaintCount));
  }, [complaintCount, isMuted]);

  return (
    <div className="flex justify-end items-center gap-4 mb-4">
      <audio ref={audioRef} src="/your-ringtone.mp3" preload="auto" />
      <button
        onClick={toggleMute}
        className={`px-4 py-2 rounded-full font-semibold text-sm ${
          isMuted ? "bg-gray-400 text-white" : "bg-red-600 text-white"
        }`}
      >
        {isMuted ? "Unmute Alerts" : "Mute Alerts"}
      </button>
    </div>
  );
}
