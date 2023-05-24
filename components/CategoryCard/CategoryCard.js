import useFetchGames from "@/pages/hooks/useFetchGames";
import useFindGame from "@/pages/hooks/useFindGame";
import React, { useState, useEffect } from "react";
import GameGrid from "../GameGrid/GameGrid";
import styles from "./CategoryCard.module.css";

const CategoryCard = ({ categoryTitle, categoryIcon, iconSize }) => {
  const [games, setGames] = useState([]);
  const { getGames } = useFetchGames();
  useEffect(() => {
    getGames().then((response) => {
      const { data } = response;
      if (data.data) {
        setGames(data.data);
      }
    });
  }, []);
  const game = useFindGame();
  console.log(iconSize);

  return (
    <div className={styles.categoryCard}>
      <div className={styles.titleSection}>
        <img
          src={categoryIcon}
          alt={`${categoryTitle} icon`}
          style={{ ...iconSize }}
        />
        <h2 className={styles.categoryTitle}>
          {categoryTitle.charAt(0).toUpperCase() + categoryTitle.slice(1)}
        </h2>
      </div>
      <div className={styles.gridSection}>
        <div className={styles.gameGridItems}>
          <GameGrid games={games} itemsToShow={30} />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
