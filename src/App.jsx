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
      <div className="maintanier">
        Developed by:{" "}
        <span>
          {" "}
          <a href="">Systemd</a>
        </span>{" "}
      </div>
    </>
  );
}

export default App;
