import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "../../contexts/GameContext";
import { useRouter } from "next/router";
import styles from "./category.module.css";
import Header from "../../components/Header/Header";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Ad from "../../components/Ad/Ad";
import MultiplayerSwiper from "@/components/MultiplayerSection/MultiplayerSwiper";
import Spinner from "../../components/Spinner/Spinner";
import GameGrid from "@/components/GameGrid/GameGrid";
import useItemCount from "@/pages/hooks/useItemCount";
import axios from "axios";
import useFetchGames from "../hooks/useFetchGames";

const Category = () => {
  const router = useRouter();
  const { getGames } = useFetchGames();
  const { category } = router.query;
  const { categories } = useContext(GameContext);
  const [games, setGames] = useState([]);
  const [bottomGames, setBottomGames] = useState([]);

  useEffect(() => {
    getGames().then((response) => {
      const { data } = response;
      if (data.data) {
        const initialGames = data.data.slice(0, 30);
        const remainingGames = data.data.slice(30);

        setGames(initialGames);
        setBottomGames(remainingGames);
      }
    });
  }, []);

  const activeCategory = categories.find((cat) => cat.title === category);
  const gamesInCategory = activeCategory ? activeCategory.games : [];

  const titleImage = category ? `/${category}.png` : "";
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

      <div className={styles.normalResponsive}>
        <main className={styles.main}>
          <div className={styles.container}>
            <div className={styles.adTop}>
              <Ad src="/ad.png" />
            </div>
            <div className={styles.mainContent}>
              {category && (
                <h2>
                  Last {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
                  games you played
                </h2>
              )}

              <div className={styles.topGrid}>
                <GameGrid games={games} itemsToShow={10} />
              </div>

              {category && (
                <h2>
                  {category.charAt(0).toUpperCase() + category.slice(1)} Games
                  You Played
                </h2>
              )}

              <div className={styles.gridLarge}>
                <GameGrid games={games} itemsToShow={24} />
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
                <GameGrid games={bottomGames} itemsToShow={24} />
              </div>
            </div>
            <div className={styles.adBot}>
              <Ad src="/ad.png" />
            </div>
          </div>
        </main>
      </div>

      <div className={styles.mobileRepsonsive}>
        <main className={styles.main}>
          {category && (
            <div className={styles.titleSection}>
              <img
                src={titleImage}
                alt={category}
                className={styles.titleImage}
              />
              <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            </div>
          )}
          <div className={styles.gridContainer}>
            <GameGrid games={games} itemsToShow={15} />
            <div className={styles.multiplayerCardSection}>
              <div className={`${styles.multiplayerCard}`}>
                <MultiplayerSwiper />
              </div>
            </div>
            <div className={styles.categorySectionMobile}>
              <div className={styles.categoryGridMobile}>
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
                <GameGrid games={bottomGames} itemsToShow={15} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Category;
