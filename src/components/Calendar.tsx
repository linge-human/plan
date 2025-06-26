import React from "react";
import { useNavigate } from "react-router-dom";
import { getMonthDays, formatDateYMD, isToday } from "../utils/date";
import { getDayTasks } from "../utils/storage";

interface CalendarProps {
  year: number;
  month: number; // 0-based
}

const Calendar: React.FC<CalendarProps> = ({ year, month }) => {
  const navigate = useNavigate();
  const days = getMonthDays(year, month);

  return (
    <div className="w-full grid grid-cols-7 gap-3">
      {["S", "M", "T", "W", "T", "F", "S"].map(d => (
        <div key={d} className="text-center text-secondary pb-2">{d}</div>
      ))}
      {days.map(({ date, inMonth }, i) => {
        const ymd = formatDateYMD(date);
        const tasks = getDayTasks(ymd);
        return (
          <button
            key={i}
            onClick={() => inMonth && navigate(`/day/${ymd}`)}
            className={`aspect-square w-full rounded-md flex flex-col items-center justify-center 
              ${inMonth ? "cursor-pointer" : "opacity-30 cursor-default"}
              ${isToday(date) ? "border border-foreground" : ""}
              hover:bg-accent transition-colors`}
            disabled={!inMonth}
            aria-label={ymd}
          >
            <span className="text-base">{date.getDate()}</span>
            {tasks.length > 0 && (
              <span className="w-1.5 h-1.5 mt-0.5 rounded-full bg-secondary inline-block"></span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Calendar;
