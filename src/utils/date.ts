export function getTodayYMD() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}
export function formatDateYMD(date: Date) {
  return date.toISOString().slice(0, 10);
}
export function isToday(date: Date) {
  return formatDateYMD(date) === getTodayYMD();
}
export function getMonthDays(year: number, month: number) {
  // Returns an array of {date: Date, inMonth: boolean}
  const start = new Date(year, month, 1);
  const end = new Date(year, month + 1, 0);
  const days = [];
  const firstDay = start.getDay();
  let d = new Date(year, month, 1 - firstDay);
  for (let i = 0; i < 42; i++) {
    days.push({ date: new Date(d), inMonth: d.getMonth() === month });
    d.setDate(d.getDate() + 1);
  }
  return days;
}
