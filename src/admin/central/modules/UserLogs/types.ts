// src/admin/central/modules/UserLogs/types.ts

export type LogPayload = {
  name?: string;
  email: string;
  phone?: string;
  address?: string;
  state?: string;
  lga?: string;
};

export type LogEntry = {
  action: "signup" | "login";
  payload: LogPayload;
  timestamp: string;
  read?: boolean; // optional for backward compatibility
};
