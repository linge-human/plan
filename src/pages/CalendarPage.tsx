import React, { useState } from "react";
import Calendar from "../components/Calendar";
import { getTodayYMD } from "../utils/date";

const today = new Date();
const CalendarPage: React.FC = () => {
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setMonth(m => (m === 0 ? 11 : m - 1))}
          className="px-2 py-1 rounded bg-accent border border-border"
        >
          &lt;
        </button>
        <h2 className="text-xl font-bold text-foreground">
          {today.toLocaleString("default", { month: "long" })} {year}
        </h2>
        <button
          onClick={() => setMonth(m => (m === 11 ? 0 : m + 1))}
          className="px-2 py-1 rounded bg-accent border border-border"
        >
          &gt;
        </button>
      </div>
      <Calendar year={year} month={month} />
    </section>
  );
};

export default CalendarPage;
