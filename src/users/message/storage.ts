// Define the shape of a complaint
export type Complaint = {
  id: number;
  user: string;
  phone?: string;
  email?: string;
  subject: string; // ✅ used by Police Admin
  message?: string; // ✅ used by Police Admin
  address?: string;
  timestamp: string;
  status: "Pending" | "Investigating" | "Resolved";
  department: string;
  files?: string[];
  voiceNote?: string;
  reply?: string;
};

// Save a complaint to localStorage under the department key
export function saveComplaint(department: string, data: Complaint): void {
  const key = `complaints-${department}`;
  const existing: Complaint[] = JSON.parse(localStorage.getItem(key) || "[]");
  existing.push(data);
  localStorage.setItem(key, JSON.stringify(existing));
}

// Retrieve all complaints for a department
export function getComplaints(department: string): Complaint[] {
  const key = `complaints-${department}`;
  return JSON.parse(localStorage.getItem(key) || "[]");
}
