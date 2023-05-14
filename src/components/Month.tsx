import { memo, useContext } from "react";
import moment from "moment";
import Day from "./Day";

interface IMonthProps {
  dayOfCalendar: moment.Moment[][] | undefined;
}

const Month = ({ dayOfCalendar }: IMonthProps) => {
  return (
    <div className="calendar-week">
      {dayOfCalendar?.map((week, i) => (
        <div className="calendar-week-item" key={i}>
          {week.map((data, index: number) => (
            <Day key={index} day={data} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default memo(Month);
