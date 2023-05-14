import { Dispatch, SetStateAction, createContext } from "react";

interface IGlobalContext {
  currentMonth: number;
  setCurrentMonth: Dispatch<SetStateAction<number>>;
  dayOfCalendar: any[];
}

const GlobalContext = createContext<IGlobalContext | null>(null);

export default GlobalContext;
