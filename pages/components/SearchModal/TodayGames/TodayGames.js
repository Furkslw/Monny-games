import React from "react";
import styles from "./TodayGames.module.css";
import GameGrid from "../../GameGrid/GameGrid";

const TodayGames = ({ games }) => {
  return (
    <div className={styles.todayGames}>
      <h2 className={styles.title}>What are you playing today?</h2>
      <div className={styles.games}>
        <GameGrid games={games} itemsToShow={35} />
      </div>
    </div>
  );
};

export default TodayGames;
