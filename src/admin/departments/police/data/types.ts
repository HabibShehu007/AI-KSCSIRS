export type Complaint = {
  id: number;
  user: string;
  phone?: string;
  email?: string;
  subject: string;
  message?: string;
  description?: string;
  address?: string;
  timestamp: string;
  status: "Pending" | "Investigating" | "Resolved";
  department: string;
  files?: string[];
  voiceNote?: string;
  reply?: string;
};
