import React from "react";
import { useParams } from "react-router-dom";
import { getDayTasks, setDayTasks, getGoals } from "../utils/storage";
import TaskList from "../components/TaskList";

const DailyPage: React.FC = () => {
  const { date } = useParams<{ date: string }>();
  const tasks = getDayTasks(date!);
  const goals = getGoals();

  const handleTasksChange = (newTasks: any) => {
    setDayTasks(date!, newTasks);
  };

  return (
    <section>
      <h2 className="text-xl font-bold mb-4 text-foreground">
        Tasks for {date}
      </h2>
      <TaskList initialTasks={tasks} onChange={handleTasksChange} goals={goals} />
    </section>
  );
};

export default DailyPage;
