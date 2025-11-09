import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import CentralLoginForm from "./CentralLoginForm";
import DepartmentLoginForm from "./DepartmentLoginForm";

export default function AdminLogin() {
  const [activeTab, setActiveTab] = useState("central");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const isCentral =
      activeTab === "central" &&
      email === "admin@example.com" &&
      password === "admin123";

    const isDepartment =
      activeTab === "department" &&
      email === "dept@example.com" &&
      password === "dept123" &&
      department !== "";

    if (isCentral) {
      localStorage.setItem("adminAuth", "true");
      localStorage.setItem("adminRole", "central");
      setShowModal(true);
      setTimeout(() => navigate("/admin/central"), 2000);
    } else if (isDepartment) {
      localStorage.setItem("adminAuth", "true");
      localStorage.setItem("adminRole", "department");
      localStorage.setItem("adminDepartment", department);
      setShowModal(true);
      setTimeout(() => navigate(`/admin/${department}`), 2000);
    } else {
      alert("Invalid credentials or missing fields");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a1f44]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Admin Logo" className="h-20" />
        </div>

        {/* Tabs */}
        <div className="relative mb-6">
          <div className="flex justify-between bg-gray-100 rounded-t overflow-hidden">
            <button
              onClick={() => setActiveTab("central")}
              className={`w-1/2 py-3 text-center font-semibold transition-all duration-300 ${
                activeTab === "central" ? "text-[#0a1f44]" : "text-gray-500"
              }`}
            >
              Central Admin
            </button>
            <button
              onClick={() => setActiveTab("department")}
              className={`w-1/2 py-3 text-center font-semibold transition-all duration-300 ${
                activeTab === "department" ? "text-[#0a1f44]" : "text-gray-500"
              }`}
            >
              Department Admin
            </button>
          </div>

          {/* Animated Tab Indicator */}
          <div
            className={`absolute bottom-0 left-0 h-1 bg-[#0a1f44] transition-all duration-300 ${
              activeTab === "central"
                ? "w-1/2 translate-x-0"
                : "w-1/2 translate-x-full"
            }`}
          />
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {activeTab === "central" ? (
            <CentralLoginForm
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
            />
          ) : (
            <DepartmentLoginForm
              email={email}
              password={password}
              department={department}
              setEmail={setEmail}
              setPassword={setPassword}
              setDepartment={setDepartment}
            />
          )}

          <button
            type="submit"
            className="w-full bg-[#0a1f44] text-white py-2 rounded-md hover:bg-[#09203b] transition"
          >
            Login
          </button>
        </form>

        {/* Modal */}
        {showModal && (
          <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center rounded-lg animate-fadeIn">
            <div className="text-center">
              <h3 className="text-xl font-bold text-[#0a1f44] mb-2">
                Login Successful
              </h3>
              <p className="text-gray-600">Redirecting to dashboard...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
