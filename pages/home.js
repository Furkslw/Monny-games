import React from "react";
import { useContext, useState, useEffect } from "react";
import { GameContext } from "../contexts/GameContext";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.css";
import MultiplayerSwiper from "../components/MultiplayerSection/MultiplayerSwiper";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import Ad from "../components/Ad/Ad";
import GameGrid from "../components/GameGrid/GameGrid";

import useItemCount from "./hooks/useItemCount";
import useFetchGames from "./hooks/useFetchGames";
import Spinner from "../components/Spinner/Spinner";

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
          <div className={styles.normalGrid}>
            <GameGrid games={games} itemsToShow={30} key={games.id} />
            <div className={styles.multiplayerCardSection}>
              <div className={styles.swiperSection}>
                <MultiplayerSwiper />
              </div>
            </div>
          </div>
          <div className={styles.responsiveGrid}>
            <GameGrid games={games} itemsToShow={15} key={games.id} />
            <div className={styles.multiplayerCardSection}>
              <div className={styles.swiperSection}>
                <MultiplayerSwiper />
              </div>
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
              <GameGrid games={games} itemsToShow={15} key={games.id} />
            </div>
          </div>

          <div className={styles.bottomGrid}>
            <div className={styles.bottomGridItem}>
              <GameGrid games={games} itemsToShow={9} key={games.id} />
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
