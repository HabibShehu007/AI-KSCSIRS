import { useParams } from "react-router-dom";
import ComplaintForm from "./ComplaintForm";

export default function MessagePage() {
  const { agency } = useParams();

  if (!agency) {
    return (
      <div className="p-6 text-red-600">
        <h2 className="text-xl font-bold">No department selected.</h2>
        <p>Please go back and choose a department to report to.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-[#0a1f44] mb-4">
        Report to {agency.toUpperCase()}
      </h2>
      <ComplaintForm department={agency} />
    </div>
  );
}
