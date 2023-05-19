import { ReactNode, useMemo, useState } from "react";
import moment from "moment";
import GlobaContext from ".";
import IEvent from "../interfaces/event.interface";

interface IGlobalProps {
  children: ReactNode;
}

const eventDefault: IEvent[] = [
  {
    title: "🎨 Draw picture",
    start_date: "2023-05-01",
    end_date: "2023-05-01",
    label: "blue",
  },
  {
    title: "🚄 Go to Ho Chi Minh City",
    start_date: "2023-05-03",
    end_date: "2023-05-05",
    label: "blue",
  },

  {
    title: "🛒Buy food for diner",
    start_date: "2023-05-02",
    end_date: "2023-05-02",
    label: "blue",
  },
  {
    title: "📷 Google meet",
    start_date: "2023-05-03",
    end_date: "2023-05-03",
    label: "blue",
  },
  {
    title: "Relaxing",
    start_date: "2023-05-02",
    end_date: "2023-05-05",
    label: "blue",
  },
  {
    title: "🏡 Live in my friend's home",
    start_date: "2023-05-02",
    end_date: "2023-05-04",
    label: "blue",
  },
  {
    title: "👯‍♀️ Hang out with friends",
    start_date: "2023-05-09",
    end_date: "2023-05-09",
    label: "blue",
  },
  {
    title: "🥾 Hiking",
    start_date: "2023-05-17",
    end_date: "2023-05-17",
    label: "blue",
  },
];

function GlobalContextProvider({ children }: IGlobalProps) {
  const [currentMonth, setCurrentMonth] = useState<number>(moment().month());
  // const eventStore: IEvent[] = JSON.parse(
  //   localStorage.getItem("events") ?? JSON.stringify(eventDefault),
  // );
  const [eventStore, setEventStore] = useState<IEvent[]>(eventDefault);

  const dayOfCalendar = useMemo(() => {
    const nestedArrays: any[] = [...Array(5)].map(() => []);
    const firstDateOfMonth = moment().month(currentMonth).startOf("month");
    const skipDays = moment(firstDateOfMonth, "DD-MM-YYY").day() - 1;
    const startDay = firstDateOfMonth.subtract(skipDays, "days");

    nestedArrays.forEach((nestedArray, index) => {
      const startDateOfWeek = startDay.clone().add(index, "weeks");
      for (let i = 0; i < 7; i++) {
        const date = startDateOfWeek.clone().add(i, "days");
        nestedArray.push(date);
      }
    });

    return nestedArrays;
  }, [currentMonth]);

  const handleChangeDateEvent = (event: IEvent, day: moment.Moment) => {
    if (event.start_date === event.end_date) {
      const newEventList = eventStore.map(e => {
        if (e.title === event.title) {
          return {
            ...event,
            start_date: day.format("YYYY-MM-DD"),
            end_date: day.format("YYYY-MM-DD"),
          };
        }

        return e;
      });

      setEventStore(newEventList);
    }
  };

  return (
    <GlobaContext.Provider
      value={{
        currentMonth,
        setCurrentMonth,
        dayOfCalendar,
        eventStore,
        handleChangeDateEvent,
      }}
    >
      {children}
    </GlobaContext.Provider>
  );
}
export default GlobalContextProvider;
