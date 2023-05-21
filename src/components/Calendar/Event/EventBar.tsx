import { MouseEvent, DragEvent } from "react";
import IEvent from "../../../interfaces/event.interface";
import moment from "moment";

interface IEventProps {
  event: IEvent;
  eventSortedList: IEvent[];
}

const EventBar = ({ event, eventSortedList }: IEventProps) => {
  // ⚠ dont use title to filter event, use id to handle this
  const orderEvent = eventSortedList.findIndex(x => x.title === event.title);

  // totalDayOfEvent use to calculate width of event
  const totalDayOfEvent = moment(event.end_date).diff(moment(event.start_date), "days") + 1;

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    console.log("show event detail");
  };

  const handleDragStart = (e: DragEvent<HTMLDivElement>, event: IEvent) => {
    console.log("start");
    e.dataTransfer.setData("eventDrag", JSON.stringify(event));
  };

  return (
    <div
      className="event"
      onClick={e => handleClick(e)}
      style={{ top: `${orderEvent * 44}px`, width: `calc(${100 * totalDayOfEvent}%)` }}
      draggable
      onDragStart={e => handleDragStart(e, event)}
    >
      <div className="event-container">
        <p className="event-title">{event.title}</p>
      </div>
    </div>
  );
};

export default EventBar;
