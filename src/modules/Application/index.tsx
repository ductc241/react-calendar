import GlobalContextProvider from "../../context/Provider";
import Calendar from "../../components/Calendar";
import "../../index.scss";

const Application = () => {
  return (
    <GlobalContextProvider>
      <Calendar />
    </GlobalContextProvider>
  );
};

export default Application;
