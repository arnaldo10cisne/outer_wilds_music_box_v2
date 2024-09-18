import React, { useState, useRef, useEffect } from "react";
import { TravelerInfo } from "../../utilities/models";
import styles from "./TravelerCell.module.scss";

interface TravelerCellProps {
  traveler: TravelerInfo;
}

const TravelerCell: React.FC<TravelerCellProps> = ({ traveler }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const musicRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!musicRef.current) {
      musicRef.current = new Audio(traveler.sound_file);
      musicRef.current.loop = true;
    }

    return () => {
      musicRef.current?.pause();
    };
  }, [traveler.sound_file]);

  const handleToggle = () => {
    if (isPlaying) {
      if (musicRef.current) {
        musicRef.current.pause();
        musicRef.current.currentTime = 0;
      }
    } else {
      musicRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (musicRef.current) {
      musicRef.current.volume = newVolume;
    }
  };

  return (
    <div className={`${styles.cellContainer}`}>
      <div
        className={`${styles.innerCellContainer} ${isPlaying ? styles.playing : ""}`}
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
      </div>

      <div className={styles.statusContainer}>
        <p>{isPlaying ? "Playing" : "Off"}</p>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          className={styles.volumeSlider}
        />
        <p>Volume: {Math.round(volume * 100)} / 100</p>
      </div>
    </div>
  );
};

export default TravelerCell;
