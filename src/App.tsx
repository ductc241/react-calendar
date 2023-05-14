import moment from "moment";
import Calendar from "./components/Calendar";
import GlobalContextProvider from "./context/Provider";
import "./index.scss";

const App = () => {
  return (
    <GlobalContextProvider>
      <Calendar />
    </GlobalContextProvider>
  );
};

export default App;
