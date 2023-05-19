import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { GameContext } from "@/pages/contexts/GameContext";
import styles from "./game.module.css";
import Header from "../../components/Header/Header";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Ad from "../../components/Ad/Ad";
import Spinner from "../../components/Spinner/Spinner";
import GameGrid from "@/pages/components/GameGrid/GameGrid";
import useFetchGames from "@/pages/hooks/useFetchGames";
import useFindGame from "@/pages/hooks/useFindGame";

const Game = () => {
  const router = useRouter();
  const { categories } = useContext(GameContext);
  const { gameSlug } = router.query;

  const games = useFetchGames();
  const game = useFindGame(gameSlug);

  if (!games.length) {
    return (
      <>
        <Header games={games} categories={categories} />
        <Spinner />
      </>
    );
  }

  return (
    <>
      <Header games={games} categories={categories} />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.adTop}>
            <Ad src="/ad.png" />
          </div>
          <div className={styles.mainContent}>
            <h2>{game.title}</h2>
            <div className={styles.gridLarge}>
              <div className={styles.gameSection}>
                <iframe
                  src={game.url}
                  className={styles.gameFrame}
                  width="100%"
                  height="100%"
                ></iframe>
              </div>
              <GameGrid games={games} itemsToShow={15} />
            </div>
            <div className={styles.categorySection}>
              {categories.map((category) => (
                <div className={styles.categoryCard} key={category.title}>
                  <CategoryCard
                    categoryTitle={category.title}
                    categoryIcon={category.categoryIcon}
                    iconSize={category.iconSize}
                  />
                </div>
              ))}
            </div>
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

export default Game;
