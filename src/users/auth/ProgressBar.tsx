import { motion } from "framer-motion";

type ProgressBarProps = {
  progress: number; // 0 to 100
};

export default function ProgressBar({ progress }: ProgressBarProps) {
  const getGradient = () => {
    if (progress < 40) return "bg-gradient-to-r from-red-500 to-red-400";
    if (progress < 80) return "bg-gradient-to-r from-yellow-400 to-yellow-300";
    return "bg-gradient-to-r from-green-500 to-green-400";
  };

  return (
    <div className="relative w-full h-4 bg-gray-300 rounded-full mb-6 overflow-hidden">
      {/* Animated Fill */}
      <motion.div
        className={`absolute top-0 left-0 h-full ${getGradient()} rounded-full`}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Glowing Dot with Percentage */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white border-2 border-gray-400 rounded-full shadow-lg flex items-center justify-center text-xs font-bold text-gray-700"
        animate={{ left: `calc(${progress}% - 16px)` }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {progress}%
      </motion.div>
    </div>
  );
}
