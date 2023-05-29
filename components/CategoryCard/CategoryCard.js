import useFetchGames from "@/pages/hooks/useFetchGames";
import useFindGame from "@/pages/hooks/useFindGame";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import GameGrid from "../GameGrid/GameGrid";
import styles from "./CategoryCard.module.css";

const CategoryCard = ({ categoryTitle, categoryIcon, iconSize }) => {
  const router = useRouter();
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

  const handleClick = () => {
    router.push(`/category/${categoryTitle}`);
  };
  return (
    <div className={styles.categoryCard}>
      <div className={styles.titleSection}>
        <img
          src={categoryIcon}
          alt={`${categoryTitle} icon`}
          style={{ ...iconSize }}
        />

        <p className={styles.titleText}>
          {categoryTitle.charAt(0).toUpperCase() + categoryTitle.slice(1)}
        </p>
      </div>
      <div className={styles.gridSection}>
        <div className={styles.gameGridItems}>
          <GameGrid games={games} itemsToShow={30} />
        </div>
      </div>
      <div className={styles.viewAllButton} onClick={handleClick}>
        <p>View All</p>
        <img src="/viewtitlearrow.png" alt="arrow" />
      </div>
    </div>
  );
};

export default CategoryCard;
