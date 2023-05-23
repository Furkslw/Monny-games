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
import useWindowSize from "@/pages/hooks/useWindowSize";
import MultiplayerCard from "@/pages/components/MultiplayerSection/MultiplayerCard";

const Game = () => {
  const router = useRouter();
  const { categories } = useContext(GameContext);
  const { gameSlug, id } = router.query;
  const [loading, setLoading] = useState(false);
  const [game, setGame] = useState(null);
  const [games, setGames] = useState([]);
  const { getGames } = useFetchGames();
  const isSmallScreenForGrid = useWindowSize();

  useEffect(() => {
    getGames().then((response) => {
      const { data } = response;
      if (data.data) {
        setGames(data.data);
      }
    });
  }, []);

  useEffect(() => {
    if (!game && id) {
      axios
        .get(`${process.env.HUMOQ_API_URL}/game/detail/${id}?domain_id=${16}`)
        .then((response) => {
          const { data } = response;
          if (data.data) {
            console.log("Game data: ", data.data);
            setGame(data.data);
            setLoading(false);
          }
        });
    }
  }, [game, id]);

  return (
    <>
      {loading && (
        <>
          <Header games={games} categories={categories} />
          <Spinner />
        </>
      )}
      {!loading && game && (
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
                {isSmallScreenForGrid && (
                  <div className={styles.multiplayerCardSection}>
                    <div className={`${styles.multiplayerCard}`}>
                      <MultiplayerCard />
                    </div>
                  </div>
                )}

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
      )}
    </>
  );
};

export default Game;
