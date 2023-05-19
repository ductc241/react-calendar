import { Dispatch, SetStateAction, createContext } from "react";
import IEvent from "../interfaces/event.interface";
import moment from "moment";

interface IGlobalContext {
  currentMonth: number;
  setCurrentMonth: Dispatch<SetStateAction<number>>;
  dayOfCalendar: any[];
  eventStore: IEvent[];
  handleChangeDateEvent: (event: IEvent, day: moment.Moment) => void;
}

const defaulValue = {
  currentMonth: moment().month(),
  setCurrentMonth: (month: number) => {},
  dayOfCalendar: [],
  eventStore: [],
  handleChangeDateEvent: (event: IEvent, day: moment.Moment) => {},
} as IGlobalContext;

const GlobalContext = createContext<IGlobalContext>(defaulValue);

export default GlobalContext;
