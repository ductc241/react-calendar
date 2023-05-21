import { memo } from "react";
import moment from "moment";
import Day from "./Day";
import EventWeek from "./Event/EventWeek";

interface IMonthProps {
  dayOfCalendar: moment.Moment[][] | undefined;
}

const Month = ({ dayOfCalendar }: IMonthProps) => {
  return (
    <div className="calendar-month">
      {/* render weeks in a month */}
      {dayOfCalendar?.map((week, i) => (
        <div className="calendar-week" key={i}>
          <div className="calendar-day-container">
            {week.map((data, index: number) => (
              <Day key={index} day={data} />
            ))}
          </div>

          <EventWeek week={week} />
        </div>
      ))}
    </div>
  );
};

// use memo to avoid re-render date of month
export default memo(Month);
