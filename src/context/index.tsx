import { Dispatch, SetStateAction, createContext } from "react";
import IEvent from "../interfaces/event.interface";

interface IGlobalContext {
  currentMonth: number;
  setCurrentMonth: Dispatch<SetStateAction<number>>;
  dayOfCalendar: any[];
  eventStore: IEvent[];
}

const GlobalContext = createContext<IGlobalContext | null>(null);

export default GlobalContext;
