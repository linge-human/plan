import React from "react";
import { Link } from "react-router-dom";
import { getTodayYMD } from "../utils/date";

const HomePage: React.FC = () => {
  const today = getTodayYMD();
  return (
    <section className="flex flex-col items-center justify-center gap-8 mt-10">
      <h1 className="text-2xl font-bold text-foreground mb-2">Plan</h1>
      <p className="text-secondary text-center max-w-md">
        Minimalist, dark, and focused. Plan helps you manage daily tasks and goals with a clean calendar and zero distractions.
      </p>
      <div className="flex gap-4 mt-4">
        <Link
          to={`/day/${today}`}
          className="px-6 py-3 bg-accent text-foreground rounded border border-border hover:bg-foreground hover:text-background transition"
        >
          Today
        </Link>
        <Link
          to="/calendar"
          className="px-6 py-3 bg-accent text-foreground rounded border border-border hover:bg-foreground hover:text-background transition"
        >
          Calendar
        </Link>
        <Link
          to="/goals"
          className="px-6 py-3 bg-accent text-foreground rounded border border-border hover:bg-foreground hover:text-background transition"
        >
          Goals
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
