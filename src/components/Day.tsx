import clsx from "clsx";
import moment from "moment";

interface IDayProps {
  day: moment.Moment;
}

const Day = ({ day }: IDayProps) => {
  return (
    <div className="calendar-day">
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
      <div className="calendar-day-content">
        <div className="event">
          <p className="event-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugiat iste reiciendis
            sit. Debitis quis quod, dolorum numquam fugiat eveniet iste pariatur ab accusamus unde,
            excepturi velit assumenda cum voluptatibus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Day;
