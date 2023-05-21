import { useContext, DragEvent, useState, useRef } from "react";
import moment from "moment";
import EventBar from "./EventBar";
import GlobalContext from "../../../context";
import IEvent from "../../../interfaces/event.interface";

interface IEventCell {
  day: moment.Moment;
}

const EventCell = ({ day }: IEventCell) => {
  const { eventStore, handleChangeDateEvent } = useContext(GlobalContext);
  const [eventOver, setEventOver] = useState<boolean>(false);
  const eventCell = useRef<HTMLDivElement>(null);

  const eventOfDay: IEvent[] = eventStore.filter(
    event =>
      day.isSame(event.start_date) ||
      day.isBetween(event.start_date, event.end_date) ||
      day.isSame(event.end_date),
  );

  // why we need sorted events ?
  // use to sort the position of events in a week to dispay
  // longer event -> shorter event
  const sortedEvents = eventOfDay.sort((a, b) => {
    // if (moment(a.start_date).isSame(b.start_date)) {
    //   if (moment(a.end_date).isBefore(b.end_date)) return 1;
    //   return -1;
    // }

    // if (moment(a.start_date).isBefore(b.start_date)) return -1;
    // return 1;

    if (moment(a.start_date).isBefore(b.start_date)) return -1;

    if (moment(a.start_date).isAfter(b.start_date)) return 1;

    if (moment(a.start_date).isSame(b.start_date)) {
      if (moment(a.end_date).isBefore(b.end_date)) return 1;
      if (moment(a.end_date).isAfter(b.end_date)) return -1;
    }

    return 0;
  });

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    const eventDrop = JSON.parse(e.dataTransfer.getData("eventDrag"));
    handleChangeDateEvent(eventDrop, day);
    eventCell.current?.classList.remove("event-over");
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    // if haven't preventDefault, event cant drop into cell
    e.preventDefault();
    eventCell.current?.classList.add("event-over");
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    eventCell.current?.classList.remove("event-over");
  };

  return (
    <div
      className="calendar-event-cell"
      onDrop={e => handleDrop(e)}
      onDragOver={e => handleDragOver(e)}
      onDragLeave={e => handleDragLeave(e)}
      ref={eventCell}
    >
      {sortedEvents
        .filter(e => day.isSame(e.start_date))
        .map((event, index) => (
          <EventBar key={index} event={event} eventSortedList={sortedEvents} />
        ))}
    </div>
  );
};

export default EventCell;
