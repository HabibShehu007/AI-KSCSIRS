export const formatTimestamp = (raw: string): string => {
  const date = new Date(raw);
  return date.toLocaleString("en-NG", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};
