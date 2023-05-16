import moment from "moment";
import { useContext } from "react";
import GlobalContext from "../../context";
import Event from "../Events";
import IEvent from "../../interfaces/event.interface";

interface IEventCell {
  day: moment.Moment;
}

const EventCell = ({ day }: IEventCell) => {
  const globalContext = useContext(GlobalContext);

  const eventOfDay: IEvent[] =
    globalContext?.eventStore.filter(
      event => day.isSame(event.start_date) || day.isBetween(event.start_date, event.end_date),
    ) ?? [];

  const sortedEvents =
    eventOfDay &&
    eventOfDay.sort((a, b) => {
      if (moment(a.start_date).isSame(b.start_date)) {
        if (moment(a.end_date).isBefore(b.end_date)) return 1;
        return -1;
      }

      if (moment(a.start_date).isBefore(b.start_date)) return -1;
      return 1;
    });

  return (
    <div className="calendar-event-cell">
      {sortedEvents
        .filter(e => day.isSame(e.start_date))
        .map((event, index) => (
          <Event key={index} event={event} eventList={eventOfDay} />
        ))}
    </div>
  );
};

export default EventCell;
