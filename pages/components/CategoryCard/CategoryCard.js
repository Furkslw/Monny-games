import useFetchGames from "@/pages/hooks/useFetchGames";
import useFindGame from "@/pages/hooks/useFindGame";
import React from "react";
import GameGrid from "../GameGrid/GameGrid";
import styles from "./CategoryCard.module.css";

const CategoryCard = ({ categoryTitle, categoryIcon, iconSize }) => {
  const games = useFetchGames();
  const game = useFindGame();

  return (
    <div className={styles.categoryCard}>
      <div className={styles.titleSection}>
        <img src={categoryIcon} alt={`${categoryTitle} icon`} style={{}} />
        <h2 className={styles.categoryTitle}>
          {categoryTitle.charAt(0).toUpperCase() + categoryTitle.slice(1)}
        </h2>
      </div>
      <div className={styles.gridSection}>
        <div className={styles.gameGridItems}>
          <GameGrid games={game} itemsToShow={24} />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
