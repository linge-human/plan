import React, { useState } from "react";
import { Task } from "../utils/storage";
import { useSettings } from "../utils/storage";

interface TaskListProps {
  initialTasks: Task[];
  onChange: (tasks: Task[]) => void;
  goals: { id: string; title: string }[];
}

const TaskList: React.FC<TaskListProps> = ({ initialTasks, onChange, goals }) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [input, setInput] = useState("");
  const settings = useSettings();

  const addTask = () => {
    if (!input.trim()) return;
    const newTask: Task = {
      id: Math.random().toString(36).slice(2, 12),
      text: input.trim(),
      done: false,
      goalId: "",
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    onChange(newTasks);
    setInput("");
  };

  const toggleDone = (i: number) => {
    const newTasks = tasks.map((t, idx) =>
      idx === i ? { ...t, done: !t.done } : t
    );
    setTasks(newTasks);
    onChange(newTasks);
  };

  const setGoal = (i: number, goalId: string) => {
    const newTasks = tasks.map((t, idx) =>
      idx === i ? { ...t, goalId } : t
    );
    setTasks(newTasks);
    onChange(newTasks);
  };

  const removeTask = (i: number) => {
    const newTasks = tasks.filter((_, idx) => idx !== i);
    setTasks(newTasks);
    onChange(newTasks);
  };

  const checkboxClass =
    settings.checkboxStyle === "square"
      ? "rounded-none"
      : "rounded";

  return (
    <div>
      <ul>
        {tasks.map((task, i) => (
          <li
            key={task.id}
            className="flex items-center justify-between py-2 border-b border-border"
          >
            <label className="flex items-center flex-1 space-x-2">
              <input
                type="checkbox"
                aria-label="Done"
                checked={task.done}
                onChange={() => toggleDone(i)}
                className={`w-5 h-5 bg-accent border border-border ${checkboxClass} focus:outline-none`}
              />
              <span
                className={`flex-1 ${
                  task.done ? "line-through text-secondary" : ""
                }`}
              >
                {task.text}
              </span>
            </label>
            <select
              className="bg-accent text-secondary text-xs px-2 py-0.5 border border-border rounded ml-2"
              value={task.goalId || ""}
              onChange={e => setGoal(i, e.target.value)}
              aria-label="Link to goal"
            >
              <option value="">No goal</option>
              {goals.map(goal => (
                <option key={goal.id} value={goal.id}>
                  {goal.title}
                </option>
              ))}
            </select>
            <button
              aria-label="Delete"
              onClick={() => removeTask(i)}
              className="ml-3 text-secondary hover:text-foreground"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
      <div className="flex items-center mt-4 space-x-2">
        <input
          type="text"
          placeholder="Add new task…"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && addTask()}
          className="flex-1 px-3 py-2 bg-accent border border-border rounded text-foreground placeholder:text-secondary"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-secondary text-background rounded border border-border hover:bg-foreground hover:text-background transition"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TaskList;
