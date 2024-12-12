// import SignUp from "./Components/SignUp/SignUp";
// import Login from "./Components/SignIn/SignIn";
import WeeklyPairing from "./Components/WeeklyFriends/WeeklyFriends";

import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <WeeklyPairing apiUrl="https://web-weekly-friends-generator.onrender.com" />
  );
}

export default App;
