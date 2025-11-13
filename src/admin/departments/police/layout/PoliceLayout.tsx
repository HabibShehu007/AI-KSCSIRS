import { useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import PoliceTopBar from "../PoliceTopBar";
import { FiAlertCircle } from "react-icons/fi";

export default function PoliceLayout() {
  const [alertActive, setAlertActive] = useState(false);
  const [isMuted, setIsMuted] = useState(() => {
    return localStorage.getItem("police-muted") === "true";
  });
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      const lastCount = Number(
        localStorage.getItem("police-complaint-count") || "0"
      );
      const current = JSON.parse(
        localStorage.getItem("complaints-police") || "[]"
      );
      const currentCount = current.length;

      if (currentCount > lastCount) {
        localStorage.setItem("police-complaint-count", String(currentCount));
        if (!isMuted && audioRef.current) {
          audioRef.current.play().catch(() => {});
        }
        setAlertActive(true);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [isMuted]);

  const toggleMute = () => {
    const newState = !isMuted;
    setIsMuted(newState);
    localStorage.setItem("police-muted", String(newState));
  };

  const handleEngage = () => {
    setAlertActive(false);
    navigate("complaints");
  };

  return (
    <div className="flex min-h-screen bg-[#f5f7fa] relative">
      {/* 🔊 Audio */}
      <audio ref={audioRef} src="/alert.mp3" preload="auto" />

      {/* 🚨 Full-screen Emergency Alert */}
      {alertActive && (
        <div className="fixed inset-0 bg-red-900 bg-opacity-90 z-50 flex flex-col items-center justify-center text-white animate-pulse">
          <FiAlertCircle className="text-6xl mb-4" />
          <h1 className="text-3xl font-extrabold mb-2">
            New Complaint Received
          </h1>
          <p className="text-lg font-medium mb-6">
            A user has submitted a report to the Police Department
          </p>
          <div className="flex gap-4">
            <button
              onClick={handleEngage}
              className="bg-white text-red-700 font-bold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              Engage
            </button>
            <button onClick={toggleMute} className="underline text-sm">
              {isMuted ? "Unmute Alerts" : "Mute Alerts"}
            </button>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col pt-10">
        <PoliceTopBar />
        <div className="p-6 flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
