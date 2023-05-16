import { memo, useContext } from "react";
import moment from "moment";
import Day from "./Day";
import EventGrid from "./Event/EventGrid";

interface IMonthProps {
  dayOfCalendar: moment.Moment[][] | undefined;
}

const Month = ({ dayOfCalendar }: IMonthProps) => {
  return (
    <div className="calendar-month">
      {dayOfCalendar?.map((week, i) => (
        <div className="calendar-week" key={i}>
          <div className="calendar-day-container">
            {week.map((data, index: number) => (
              <Day key={index} day={data} />
            ))}
          </div>

          <EventGrid week={week} />
        </div>
      ))}
    </div>
  );
};

export default memo(Month);
