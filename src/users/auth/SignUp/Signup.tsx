import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";
import StepPersonalInfo from "./StepPersonalInfo";
import StepContactInfo from "./StepContactInfo";
import StepSecurity from "./StepSecurity";

type LogPayload = {
  name?: string;
  email: string;
  phone?: string;
  address?: string;
  state?: string;
  lga?: string;
};

type LogEntry = {
  action: "signup";
  payload: LogPayload;
  timestamp: string;
};

export default function Signup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    nin: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    state: "",
    lga: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [isNINValidated, setIsNINValidated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const logToAdmin = (action: "signup", payload: LogPayload) => {
    const logs: LogEntry[] = JSON.parse(
      localStorage.getItem("adminLogs") || "[]"
    );
    logs.push({ action, payload, timestamp: new Date().toISOString() });
    localStorage.setItem("adminLogs", JSON.stringify(logs));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword)
      return alert("Passwords do not match");
    if (!form.terms) return alert("You must accept the terms");

    logToAdmin("signup", {
      name: form.name,
      email: form.email,
      phone: form.phone,
      address: form.address,
      state: form.state,
      lga: form.lga,
    });

    localStorage.setItem(
      "userInfo",
      JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
      })
    );

    setShowSuccess(true);
    setTimeout(() => navigate("/user/auth/login"), 3000);
  };

  const isStepValid = () => {
    if (step === 1)
      return isNINValidated && form.name && form.phone && form.email;
    if (step === 2) return form.address && form.state && form.lga;
    if (step === 3) return form.password && form.confirmPassword && form.terms;
    return false;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] w-full max-w-lg relative"
      >
        <h2 className="text-3xl font-extrabold text-center text-blue-900 mb-2 tracking-tight">
          Create Your Account
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Step {step} of 3 — Let’s get you started
        </p>

        <ProgressBar step={step} />
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {step === 1 && (
            <StepPersonalInfo
              form={form}
              handleChange={handleChange}
              isValidated={isNINValidated}
              onValidated={() => setIsNINValidated(true)}
            />
          )}
          {step === 2 && (
            <StepContactInfo form={form} handleChange={handleChange} />
          )}
          {step === 3 && (
            <StepSecurity form={form} handleChange={handleChange} />
          )}

          <div className="flex justify-between pt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-5 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
              >
                Back
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={!isStepValid()}
                className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                  isStepValid()
                    ? "bg-blue-700 text-white hover:bg-blue-800"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                Submit
              </button>
            )}
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/user/auth/login")}
              className="text-blue-700 underline hover:text-blue-900"
            >
              Login here
            </button>
          </p>
        </div>

        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center p-6 rounded-lg shadow-lg"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-green-600 text-5xl mb-4"
            >
              ✅
            </motion.div>
            <h2 className="text-2xl font-bold mb-2">Signup Successful!</h2>
            <p className="text-base text-gray-700">Redirecting to login...</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
