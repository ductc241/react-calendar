import { MouseEvent } from "react";
import IEvent from "../interfaces/event.interface";
import moment from "moment";

interface IEventProps {
  event: IEvent;
  eventList: IEvent[];
}

const Event = ({ event, eventList }: IEventProps) => {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    console.log("show event detail");
  };

  const orderEvent = eventList.findIndex(x => x.title === event.title);
  const totalDayOfEvent = moment(event.end_date).diff(moment(event.start_date), "days") + 1;

  return (
    <div
      className="event"
      onClick={e => handleClick(e)}
      style={{ top: `${orderEvent * 44}px`, width: `calc(${100 * totalDayOfEvent}%)` }}
    >
      <div className="event-container">
        <p className="event-title">{event.title}</p>
      </div>
    </div>
  );
};

export default Event;
