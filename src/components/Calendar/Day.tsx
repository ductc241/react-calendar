import clsx from "clsx";
import moment from "moment";
import { MouseEvent, useContext } from "react";
import GlobalContext from "../../context";
interface IDayProps {
  day: moment.Moment;
}

const Day = ({ day }: IDayProps) => {
  const { setIsShowCreateModal, setSelectedDate } = useContext(GlobalContext);

  const handleCreateEvent = (e: MouseEvent<HTMLDivElement>) => {
    setIsShowCreateModal(true);
    setSelectedDate(day.format("YYYY-MM-DDThh:mm"));
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
    </div>
  );
};

export default Day;
