import { useEffect, useState } from "react";
import ReportCard from "./ReportCard";
import ReportFilter from "./ReportFilter";
import ReportModal from "./ReportModal";

export default function UserReports() {
  const [reports, setReports] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [userEmail, setUserEmail] = useState("");
  const [status, setStatus] = useState("");
  const [department, setDepartment] = useState("");
  const [selectedReport, setSelectedReport] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) {
      const { email } = JSON.parse(storedUser);
      setUserEmail(email);
    }

    const allReports: any[] = [];
    const departments = ["police", "immigration", "fireservice", "roadsafety"];

    departments.forEach((dept) => {
      const deptReports = JSON.parse(
        localStorage.getItem(`complaints_${dept}`) || "[]"
      );
      allReports.push(...deptReports);
    });

    const userReports = allReports.filter((r) => r.email === email);
    setReports(userReports);
  }, []);

  useEffect(() => {
    let filteredReports = [...reports];
    if (status)
      filteredReports = filteredReports.filter((r) => r.status === status);
    if (department)
      filteredReports = filteredReports.filter(
        (r) => r.department === department
      );
    setFiltered(filteredReports);
  }, [status, department, reports]);

  const handleFilterChange = (field: string, value: string) => {
    if (field === "status") setStatus(value);
    if (field === "department") setDepartment(value);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-[#0a1f44] mb-4">My Reports</h2>

      <ReportFilter
        status={status}
        department={department}
        onFilterChange={handleFilterChange}
      />

      {filtered.length === 0 ? (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center text-gray-700 shadow-sm">
          <p className="text-lg font-medium">No reports match your filters.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((report) => (
            <ReportCard
              key={report.id}
              report={report}
              onView={() => setSelectedReport(report)}
            />
          ))}
        </div>
      )}

      <ReportModal
        report={selectedReport}
        onClose={() => setSelectedReport(null)}
      />
    </div>
  );
}
