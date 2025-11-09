export type Complaint = {
  id: number;
  user: string;
  subject: string;
  message: string;
  status: "Pending" | "Resolved";
  date: string;
  department: string;
};
