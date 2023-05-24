import React from "react";
import { useContext, useState, useEffect } from "react";
import { GameContext } from "../contexts/GameContext";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.css";
import MultiplayerCard from "../components/MultiplayerSection/MultiplayerCard";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import Ad from "../components/Ad/Ad";
import GameGrid from "../components/GameGrid/GameGrid";

import useItemCount from "./hooks/useItemCount";
import useFetchGames from "./hooks/useFetchGames";
import Spinner from "../components/Spinner/Spinner";
import useFetchImage from "./hooks/useFetchImage";

const Home = () => {
  /* Context'ten gelen oyun ve kategori bilgileri */
  const { categories } = useContext(GameContext);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getGames } = useFetchGames();

  useEffect(() => {
    setLoading(true);
    getGames().then((response) => {
      const { data } = response;
      console.log("Response : ", response);
      if (data.data) {
        setGames(data.data);
        setLoading(false);
      }
    });
  }, []);

  const bottomBreakPoints = {
    500: 15,
    1154: 4,
    1340: 6,
    1615: 7,
    1743: 8,
    2000: 9,
  };

  const bottomItemCount = useItemCount(bottomBreakPoints, 9);
  const breakPoints = {
    500: 15,
    945: 20,
    1150: 20,
    1350: 30,
    1615: 20,
    1800: 25,
    2200: 30,
  };

  const itemsToShow = useItemCount(breakPoints, 30);
  if (loading) {
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
        <div className={styles.adTop}>
          <Ad src="/ad.png" />
        </div>

        <div className={styles.gridContainer}>
          <GameGrid games={games} itemsToShow={itemsToShow} />
          <div className={styles.multiplayerCardSection}>
            <div className={`${styles.multiplayerCard}`}>
              <MultiplayerCard />
            </div>
          </div>
          <div className={styles.categorySection}>
            <div className={styles.categoryGrid}>
              {categories.map((category) => (
                <div className={styles.categoryCard} key={category.title}>
                  <CategoryCard
                    categoryTitle={category.title}
                    games={category.games}
                    categoryIcon={category.categoryIcon}
                    iconSize={category.iconSize}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.bottomResGrid}>
            <div className={styles.bottomResGridItem}>
              <GameGrid games={games} itemsToShow={bottomItemCount} />
            </div>
          </div>

          <div className={styles.bottomGrid}>
            <div className={styles.bottomGridItem}>
              <GameGrid games={games} itemsToShow={bottomItemCount} />
            </div>
          </div>
        </div>

        <div className={styles.adBot}>
          <Ad src="/ad.png" />
        </div>
      </main>
    </>
  );
};

export default Home;
