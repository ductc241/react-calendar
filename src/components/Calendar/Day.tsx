import clsx from "clsx";
import moment from "moment";
import { MouseEvent } from "react";
interface IDayProps {
  day: moment.Moment;
}

const Day = ({ day }: IDayProps) => {
  const handleCreateEvent = (e: MouseEvent<HTMLDivElement>) => {
    console.log(day.format("DD-MM-YYYY"));
  };

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
