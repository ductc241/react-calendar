import clsx from "clsx";
import moment from "moment";
import { useContext, MouseEvent } from "react";
import GlobalContext from "../context";
import Event from "./Events";

interface IDayProps {
  day: moment.Moment;
}

const Day = ({ day }: IDayProps) => {
  const globalContext = useContext(GlobalContext);
  const eventOfDay = globalContext?.eventStore.filter(event =>
    moment(day.format("YYYY-MM-DD")).isSame(event.start_date),
  );

  const handleCreateEvent = (e: MouseEvent<HTMLDivElement>) => {
    // console.log(e.currentTarget, e.target);
    console.log("click day");
  };

  const handleShowEvent = () => {
    console.log("show event");
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

      {/* <div className="calendar-day-content">
        {eventOfDay?.map((event, index) => (
          <Event key={index} />
        ))}

        {eventOfDay && eventOfDay?.length >= 2 && <p className="event-more">+1 More</p>}
      </div> */}
    </div>
  );
};

export default Day;
