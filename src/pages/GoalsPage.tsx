import React, { useState } from "react";
import { getGoals, setGoals, getDayTasks } from "../utils/storage";
import GoalList from "../components/GoalList";

const GoalsPage: React.FC = () => {
  const [goals, setGoalsState] = useState(getGoals());

  const handleDelete = (id: string) => {
    const newGoals = goals.filter(g => g.id !== id);
    setGoals(newGoals);
    setGoalsState(newGoals);
  };

  const countTasks = (goalId: string) =>
    Object.keys(localStorage)
      .filter(key => key.startsWith("tasks-"))
      .reduce((sum, key) => {
        const tasks = getDayTasks(key.replace("tasks-", ""));
        return sum + tasks.filter((t: any) => t.goalId === goalId).length;
      }, 0);

  return (
    <section>
      <GoalList goals={goals} title="Your Goals" onDelete={handleDelete} taskCount={countTasks} />
    </section>
  );
};

export default GoalsPage;
