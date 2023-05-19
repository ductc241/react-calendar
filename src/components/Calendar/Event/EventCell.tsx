import { useContext, DragEvent } from "react";
import moment from "moment";
import EventBar from "./EventBar";
import GlobalContext from "../../../context";
import IEvent from "../../../interfaces/event.interface";

interface IEventCell {
  day: moment.Moment;
}

const EventCell = ({ day }: IEventCell) => {
  const { eventStore, handleChangeDateEvent } = useContext(GlobalContext);

  const eventOfDay: IEvent[] =
    eventStore.filter(
      event => day.isSame(event.start_date) || day.isBetween(event.start_date, event.end_date),
    ) ?? [];

  // why we need sorted events ?
  // use to sort the position of events in a week to dispay
  // longer event -> shorter event
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

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    const eventDrop = JSON.parse(e.dataTransfer.getData("eventDrag"));
    handleChangeDateEvent(eventDrop, day);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  console.log("render cell of event grid");
  return (
    <div
      className="calendar-event-cell"
      onDrop={e => handleDrop(e)}
      onDragOver={e => handleDragOver(e)}
    >
      {sortedEvents
        .filter(e => day.isSame(e.start_date))
        .map((event, index) => (
          <EventBar key={index} event={event} eventList={eventOfDay} />
        ))}
    </div>
  );
};

export default EventCell;
