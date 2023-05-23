import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "../contexts/GameContext";
import { useRouter } from "next/router";
import styles from "./category.module.css";
import Header from "../components/Header/Header";
import GameGridItem from "../components/GameGridItem/GameGridItem";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import Ad from "../components/Ad/Ad";
import MultiplayerCard from "../components/MultiplayerSection/MultiplayerCard";
import Spinner from "@/pages/components/Spinner/Spinner";
import GameGrid from "@/pages/components/GameGrid/GameGrid";
import useWindowSize from "@pages/hooks/useWindowSize";
import axios from "axios";
import useFetchGames from "@/pages/hooks/useFetchGames";
import useItemCount from "@/pages/hooks/useItemCount";
import useFetchCategories from "@/pages/hooks/useFetchCategories";

const Category = () => {
  const router = useRouter();

  const { categoryTitle, id } = router.query;
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);
  const { getCategories } = useFetchCategories();
  const games = useFetchGames();

  useEffect(() => {
    getCategories().then((response) => {
      const { data } = response;
      if (data.data) {
        setCategories(data.data);
      }
    });
  }, [categories, id]);

  useEffect(() => {
    if (!category && id) {
      axios
        .get(
          `${
            process.env.HUMOQ_API_URL
          }/api/v1/games/category/${id}/?domain_id=${16}`
        )
        .then((response) => {
          const { data } = response;
          if (data.data) {
            setCategory(data.data);
          }
        });
    }
  }, [category, id]);

  const isSmallScreenForGrid = useWindowSize();
  const breakPoints = {
    500: 15,
    945: 5,
    1150: 5,
    1350: 15,
    1615: 20,
    1800: 25,
    2200: 30,
  };
  const itemsToShow = useItemCount(breakPoints, 30);

  const bottomBreakPoints = {
    1154: 4,
    1350: 6,
    1615: 7,
    1743: 8,
  };

  const activeCategory = categories.find((cat) => cat.title === category);
  const gamesInCategory = activeCategory ? activeCategory.games : [];
  const bottomItemCount = useItemCount(bottomBreakPoints, 9);

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

      {!isSmallScreenForGrid ? (
        <>
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

                <div className={styles.gridLarge}>
                  <GameGrid games={gamesInCategory} itemsToShow={24} />
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

                {/* <div className={styles.categorySection}>
                  {categories.map((category) => (
                    <div className={styles.categoryCard} key={category.title}>
                      <CategoryCard
                        categoryTitle={category.title}
                        categoryIcon={category.categoryIcon}
                        iconSize={category.iconSize}
                      />
                    </div>
                  ))}
                </div> */}

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
      ) : (
        <>
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
              <GameGrid games={games} itemsToShow={itemsToShow} />
              <div className={styles.multiplayerCardSection}>
                <div className={`${styles.multiplayerCard}`}>
                  <MultiplayerCard />
                </div>
              </div>
              <div className={styles.categorySectionMobile}>
                <div className={styles.categoryGridMobile}>
                  {/* {categories.map((category) => (
                    <div className={styles.categoryCard} key={category.title}>
                      <CategoryCard
                        categoryTitle={category.title}
                        games={category.games}
                        categoryIcon={category.categoryIcon}
                        iconSize={category.iconSize}
                      />
                    </div>
                  ))} */}
                </div>
              </div>

              <div className={styles.bottomResGrid}>
                <div className={styles.bottomResGridItem}>
                  <GameGrid games={games} itemsToShow={itemsToShow} />
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default Category;
