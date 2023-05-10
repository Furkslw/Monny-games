import React from "react";
import styles from "./BottomGrid.module.css";
import GameGridItem from "../GameGridItem/GameGridItem";

const BottomGrid = ({ games, bottomItemCount }) => {
  return (
    <div className={styles.bottomGrid}>
      <div className={styles.bottomGridItem}>
        {games.slice(0, bottomItemCount).map((game, index) => (
          <GameGridItem
            key={index}
            imageUrl={game.imageUrl}
            gameTitle={game.gameTitle}
            gameLink={game.gameLink}
          />
        ))}
      </div>
    </div>
  );
};
export default BottomGrid;
