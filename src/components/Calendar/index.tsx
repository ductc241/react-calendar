import { useContext } from "react";
import Month from "./Month";
import GlobalContext from "../../context";

const dayInWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Calendar = () => {
  const { dayOfCalendar } = useContext(GlobalContext);

  console.log("render calender");

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

        <Month dayOfCalendar={dayOfCalendar} />

        {/* Modal event detail */}
      </div>
    </div>
  );
};

export default Calendar;
