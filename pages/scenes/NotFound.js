import React, { useContext } from "react";
import { useRouter } from "next/router";
import Ad from "../components/Ad/Ad";
import Header from "../components/Header/Header";
import { GameContext } from "../contexts/GameContext";
import GameGridItem from "../components/GameGridItem/GameGridItem";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import styles from "../styles/NotFound.module.css";
import useFetchGames from "../hooks/useFetchGames";
import GameGrid from "../components/GameGrid/GameGrid";

const NotFound = () => {
  const router = useRouter();
  const games = useFetchGames();
  const { categories } = useContext(GameContext);

  return (
    <>
      <Header games={games} categories={categories} />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.adTop}>
            <Ad src="/ad.png" />
          </div>
          <div className={styles.mainContent}>
            <div className={styles.notFound}>
              <img
                src="/notfound.png"
                alt="404"
                className={styles.notFoundImage}
              />
            </div>
            <h2>Games You May Like </h2>
            <div className={styles.gridLarge}>
              <GameGrid games={games} itemsToShow={24} />
            </div>
          </div>
          <div className={styles.adBot}>
            <Ad src="/ad.png" />
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
