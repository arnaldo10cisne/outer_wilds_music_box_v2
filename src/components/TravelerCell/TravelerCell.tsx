import React, { useState } from "react";
import { TravelerInfo } from "../../models";
import styles from "./TravelerCell.module.scss";

interface TravelerCellProps {
  traveler: TravelerInfo;
}

const TravelerCell: React.FC<TravelerCellProps> = ({ traveler }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    setIsPlaying(!isPlaying);
    // Aquí podrías agregar la funcionalidad para hacer sonar el instrumento
  };

  return (
    <div
      className={`${styles.cellContainer} ${isPlaying ? styles.playing : ""}`}
      onClick={handleToggle}
    >
      <img
        src={traveler.photo}
        alt={`${traveler.name}'s photo`}
        className={styles.photo}
      />
      <div className={styles.infoContainer}>
        <h2>{traveler.name}</h2>
        <p>
          <strong>Instrument:</strong> {traveler.instrument}
        </p>
        <p>
          <strong>Hobbies:</strong> {traveler.hobbies.join(", ")}
        </p>
        <p>
          <strong>Location:</strong> {traveler.location}
        </p>
      </div>

      {/* Indicador de estado */}
      <div className={styles.statusContainer}>
        <p>{isPlaying ? "Playing" : "Off"}</p>
      </div>
    </div>
  );
};

export default TravelerCell;
