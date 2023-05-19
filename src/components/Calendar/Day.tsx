import clsx from "clsx";
import moment from "moment";
import { MouseEvent } from "react";
interface IDayProps {
  day: moment.Moment;
}

const Day = ({ day }: IDayProps) => {
  const handleCreateEvent = (e: MouseEvent<HTMLDivElement>) => {
    console.log("click day");
  };

  console.log("render day");

  return (
    <div className="calendar-day" onClick={e => handleCreateEvent(e)}>
      <div className="calendar-day-header">
        <p
          className={clsx(
            day.isSame(moment(), "month") ? "current-month" : "other-month",
            day.isSame(moment(), "day") && "current-day",
          )}
        >
          {day.date()}
        </p>
      </div>
    </div>
  );
};

export default Day;
