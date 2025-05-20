export function formatTo12HourTime(time24: string): string {
  if (!time24) return "";

  const [hourStr, minute] = time24.split(":");
  let hour = parseInt(hourStr, 10);
  const period = hour >= 12 ? "PM" : "AM";

  hour = hour % 12 || 12;

  return `${hour}:${minute} ${period}`;
}


export function isValid24Time(time: string): boolean {
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(time);
}

export function isValidAMPMTime(time: string): boolean {
  return /^(0[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/i.test(time);
}