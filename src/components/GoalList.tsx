import React from "react";
import { Goal } from "../utils/storage";

export interface GoalListProps {
  goals: Goal[];
  title: string;
  onDelete?: (id: string) => void;
  onEdit?: (id: string, goal: Goal) => void;
  taskCount?: (goalId: string) => number;
}

const GoalList: React.FC<GoalListProps> = ({
  goals,
  title,
  onDelete,
  onEdit,
  taskCount = () => 0
}) => {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold mb-2 text-foreground">{title}</h2>
      <ul>
        {goals.map(goal => (
          <li
            key={goal.id}
            className="flex flex-col border-b border-border py-2"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">
                {goal.title}
                <span className="ml-2 text-xs text-secondary">
                  ({taskCount(goal.id)} tasks)
                </span>
              </span>
              {onDelete && (
                <button
                  className="ml-2 text-xs text-secondary hover:text-foreground"
                  onClick={() => onDelete(goal.id)}
                  aria-label="Delete goal"
                >
                  ×
                </button>
              )}
            </div>
            {goal.description && (
              <div className="text-xs text-secondary mt-1">
                {goal.description}
              </div>
            )}
            {goal.tags && goal.tags.length > 0 && (
              <div className="text-xs mt-1 flex gap-2">
                {goal.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-accent text-secondary px-2 py-0.5 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GoalList;
