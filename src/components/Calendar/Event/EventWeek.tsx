import moment from "moment";
import EventCell from "./EventCell";

interface IEventGrid {
  week: moment.Moment[];
}

const EventGrid = ({ week }: IEventGrid) => {
  console.log("render event grid of week");
  return (
    <div className="calendar-event-container">
      {week.map((day, index) => (
        <EventCell day={day} key={index} />
      ))}
    </div>
  );
};

export default EventGrid;
