import React from "react";
import styles from "./TodayGames.module.css";

const TodayGames = ({ games }) => {
  return (
    <div className={styles.todayGames}>
      <h2 className={styles.title}>What are you playing today?</h2>
      <div className={styles.games}>
        {games.map((game, index) => (
          <div key={index} className={styles.game}>
            <img src={game.imageUrl} alt={game.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayGames;
