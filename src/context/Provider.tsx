import { ReactNode, useMemo, useState } from "react";
import moment from "moment";
import GlobaContext from ".";

interface IGlobalProps {
  children: ReactNode;
}

function GlobalContextProvider({ children }: IGlobalProps) {
  const [currentMonth, setCurrentMonth] = useState<number>(moment().month());

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

  return (
    <GlobaContext.Provider
      value={{
        currentMonth,
        setCurrentMonth,
        dayOfCalendar,
      }}
    >
      {children}
    </GlobaContext.Provider>
  );
}
export default GlobalContextProvider;
