import { motion, AnimatePresence } from "framer-motion";

type StepFormProps = {
  step: number;
  form: {
    name: string;
    phone: string;
    email: string;
    address: string;
    state: string;
    lga: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

export default function StepForm({ step, form, handleChange }: StepFormProps) {
  const inputClass =
    "peer w-full border border-gray-300 px-4 pt-5 pb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 relative";

  const labelClass =
    "absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500";

  return (
    <AnimatePresence mode="wait">
      {step === 1 && (
        <motion.div
          key="step1"
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {[
            { name: "name", type: "text", label: "Full Name" },
            { name: "phone", type: "text", label: "Phone Number" },
            { name: "email", type: "email", label: "Email Address" },
          ].map(({ name, type, label }) => (
            <div key={name} className="relative">
              <input
                id={name}
                name={name}
                type={type}
                value={form[name as keyof typeof form] as string}
                onChange={handleChange}
                placeholder=" "
                className={inputClass}
                required
              />
              <label htmlFor={name} className={labelClass}>
                {label}
              </label>
            </div>
          ))}
        </motion.div>
      )}

      {step === 2 && (
        <motion.div
          key="step2"
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          <div className="relative">
            <input
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder=" "
              className={inputClass}
              required
            />
            <label htmlFor="address" className={labelClass}>
              Address
            </label>
          </div>

          <div className="relative">
            <select
              id="state"
              name="state"
              value={form.state}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select State</option>
              <option value="Katsina">Katsina</option>
            </select>
          </div>

          <div className="relative">
            <select
              id="lga"
              name="lga"
              value={form.lga}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Local Government</option>
              <option value="Kudu 2">Kudu 2</option>
            </select>
          </div>
        </motion.div>
      )}

      {step === 3 && (
        <motion.div
          key="step3"
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {[
            { name: "password", label: "Password" },
            { name: "confirmPassword", label: "Confirm Password" },
          ].map(({ name, label }) => (
            <div key={name} className="relative">
              <input
                id={name}
                name={name}
                type="password"
                value={form[name as keyof typeof form] as string}
                onChange={handleChange}
                placeholder=" "
                className={inputClass}
                required
              />
              <label htmlFor={name} className={labelClass}>
                {label}
              </label>
            </div>
          ))}

          <label className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              name="terms"
              checked={form.terms}
              onChange={handleChange}
              className="accent-blue-600"
            />
            <span>I agree to the terms and conditions</span>
          </label>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
