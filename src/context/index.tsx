import { Dispatch, SetStateAction, createContext } from "react";
import IEvent from "../interfaces/event.interface";
import moment from "moment";

interface IGlobalContext {
  currentMonth: number;
  setCurrentMonth: Dispatch<SetStateAction<number>>;
  dayOfCalendar: any[];
  eventStore: IEvent[];
  setEventStore: Dispatch<SetStateAction<IEvent[]>>;
  handleChangeDateEvent: (event: IEvent, day: moment.Moment) => void;
  isShowCreateModal: boolean;
  setIsShowCreateModal: (state: boolean) => void;
}

const defaulValue = {
  currentMonth: moment().month(),
  setCurrentMonth: (month: number) => {},
  dayOfCalendar: [],
  eventStore: [],
  setEventStore: (eventList: IEvent[]) => {},
  handleChangeDateEvent: (event: IEvent, day: moment.Moment) => {},
  isShowCreateModal: false,
  setIsShowCreateModal: (state: boolean) => {},
} as IGlobalContext;

const GlobalContext = createContext<IGlobalContext>(defaulValue);

export default GlobalContext;
