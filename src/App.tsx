import React from "react";
import TravelerCell from "./components/TravelerCell/TravelerCell";
import { mockTravelerList } from "./utilities/models";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={`${styles.app}`}>
      <h1>MY OUTER WILDS MUSIC BOX</h1>
      <div className={`${styles.cardsContainer}`}>
        {mockTravelerList.map((traveler) => (
          <TravelerCell traveler={traveler} />
        ))}
      </div>
    </div>
  );
}

export default App;
