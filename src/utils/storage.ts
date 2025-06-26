export interface Task {
  id: string;
  text: string;
  done: boolean;
  goalId: string;
}
export interface Goal {
  id: string;
  title: string;
  description?: string;
  tags?: string[];
}
export function getDayTasks(ymd: string): Task[] {
  return JSON.parse(localStorage.getItem(`tasks-${ymd}`) || "[]");
}
export function setDayTasks(ymd: string, tasks: Task[]) {
  localStorage.setItem(`tasks-${ymd}`, JSON.stringify(tasks));
}
export function getGoals(): Goal[] {
  return JSON.parse(localStorage.getItem("goals") || "[]");
}
export function setGoals(goals: Goal[]) {
  localStorage.setItem("goals", JSON.stringify(goals));
}
export function useSettings() {
  return { checkboxStyle: "rounded" };
}
