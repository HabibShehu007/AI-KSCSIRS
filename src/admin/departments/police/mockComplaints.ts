import type { Complaint } from "./types";

const complaints: Complaint[] = [
  {
    id: 1,
    user: "Aliyu Musa",
    subject: "Login issue",
    message: "I can't log into my account.",
    status: "Pending",
    date: "2025-11-01",
    department: "police", // ✅ Add this
  },
  {
    id: 2,
    user: "Zainab Bello",
    subject: "Payment failed",
    message: "My payment didn’t go through.",
    status: "Resolved",
    date: "2025-10-28",
    department: "police", // ✅ Add this
  },
];

export default complaints;
