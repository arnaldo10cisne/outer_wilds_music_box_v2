import React from "react";
import "./App.css";
import TravelerCell from "./components/TravelerCell/TravelerCell";
import { mockTravelerList } from "./models";

function App() {
  return (
    <div className="App">
      {mockTravelerList.map((traveler) => (
        <TravelerCell traveler={traveler} />
      ))}
    </div>
  );
}

export default App;
