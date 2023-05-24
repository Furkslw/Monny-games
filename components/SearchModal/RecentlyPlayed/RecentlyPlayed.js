import React from "react";
import GameGrid from "../../GameGrid/GameGrid";
import styles from "./RecentlyPlayed.module.css";

const RecentlyPlayed = ({ games }) => {
  return (
    <div className={styles.recentlyPlayed}>
      <h2 className={styles.title}>Recently Played</h2>
      <div className={styles.games}>
        <GameGrid games={games} itemsToShow={6} />
      </div>
    </div>
  );
};

export default RecentlyPlayed;
