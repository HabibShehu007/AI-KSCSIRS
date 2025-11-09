import { motion } from "framer-motion";

type StepIndicatorProps = {
  currentStep: number;
};

const steps = ["Personal Info", "Location", "Security"];

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isActive = currentStep === stepNumber;
        const isCompleted = currentStep > stepNumber;

        return (
          <div
            key={label}
            className="flex-1 flex flex-col items-center relative"
          >
            {/* Step Circle */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                isCompleted
                  ? "bg-green-500 text-white"
                  : isActive
                  ? "bg-blue-700 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {isCompleted ? "✓" : stepNumber}
            </div>

            {/* Label */}
            <div
              className={`mt-2 text-xs text-center ${
                isActive ? "text-blue-700 font-semibold" : "text-gray-500"
              }`}
            >
              {label}
            </div>

            {/* Animated Underline */}
            {isActive && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-[-10px] w-10 h-1 bg-blue-700 rounded-full"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
