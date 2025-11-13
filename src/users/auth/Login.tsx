import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// ✅ Define types
type LogPayload = {
  email: string;
};

type LogEntry = {
  action: "login";
  payload: LogPayload;
  timestamp: string;
};

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // ✅ Typed logToAdmin function
  const logToAdmin = (action: "login", payload: LogPayload) => {
    const logs: LogEntry[] = JSON.parse(
      localStorage.getItem("adminLogs") || "[]"
    );
    logs.push({
      action,
      payload,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("adminLogs", JSON.stringify(logs));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Log login attempt
    logToAdmin("login", {
      email: form.email,
    });

    // ✅ Try to find matching signup data
    const logs = JSON.parse(localStorage.getItem("adminLogs") || "[]");
    const signupEntry = logs.find(
      (entry: any) =>
        entry.action === "signup" && entry.payload.email === form.email
    );

    if (signupEntry) {
      const { name, phone, email } = signupEntry.payload;

      // ✅ Store real user info from signup
      localStorage.setItem("userInfo", JSON.stringify({ name, phone, email }));

      navigate("/user/dashboard");
    } else {
      alert("No user found with this email. Please sign up first.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-[#0a1f44] mb-2">
          Welcome Back
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Login to continue
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800"
          >
            Login
          </button>
        </form>

        {/* Optional Admin Portal Link */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/admin/login")}
            className="text-sm text-blue-700 underline hover:text-blue-900"
          >
            Go to Admin Portal
          </button>
        </div>
      </motion.div>
    </div>
  );
}
