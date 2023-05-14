import { useContext } from "react";
import Month from "./Month";
import GlobalContext from "../context";

const dayInWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Calendar = () => {
  const globalContext = useContext(GlobalContext);

  return (
    <div className="container">
      <div className="calendar">
        <div className="calendar-header">
          {dayInWeek.map((day, index) => {
            return (
              <div className="calendar-header-item" key={index}>
                <p>{day}</p>
              </div>
            );
          })}
        </div>
        <Month dayOfCalendar={globalContext?.dayOfCalendar} />
      </div>
    </div>
  );
};

export default Calendar;
