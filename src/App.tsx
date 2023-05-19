import { BrowserRouter, Route, Routes } from "react-router-dom";
import Application from "./modules/Application";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="react-calendar">
          <Route index path="" element={<Application />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
