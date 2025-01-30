import WeeklyPairing from "./Components/WeeklyFriends/WeeklyFriends";
import Home from "./Components/Home/Home";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home apiUrl="https://web-weekly-friends-generator.onrender.com" />
            }
          />
          <Route
            path="/admin"
            element={
              <WeeklyPairing apiUrl="https://web-weekly-friends-generator.onrender.com" />
            }
          />
        </Routes>
      </Router>
      {/* <div className="maintanier">
        <br />
        <br />
        <br />
        <br />
        Developed by:{" "}
        <span>
          {" "}
          <a href="https://t.me/sytemd_from_linux_kernel">Systemd</a>
        </span>{" "}
        <br />
        <br />
      </div> */}
    </>
  );
}

export default App;
