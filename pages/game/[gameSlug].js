import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { GameContext } from "@/contexts/GameContext";
import styles from "./game.module.css";
import Header from "../../components/Header/Header";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Ad from "../../components/Ad/Ad";
import Spinner from "../../components/Spinner/Spinner";
import GameGrid from "@/components/GameGrid/GameGrid";
import useFetchGames from "@/pages/hooks/useFetchGames";
import MultiplayerSwiper from "@/components/MultiplayerSection/MultiplayerSwiper";

const Game = () => {
  const router = useRouter();
  const { categories } = useContext(GameContext);
  const { gameSlug, id } = router.query;
  const [loading, setLoading] = useState(false);
  const [game, setGame] = useState(null);
  const [games, setGames] = useState([]);
  const [bottomGames, setBottomGames] = useState([]);
  const { getGames } = useFetchGames();

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

  useEffect(() => {
    if (!game && id) {
      axios
        .get(`${process.env.HUMOQ_API_URL}/game/detail/${id}?domain_id=${16}`)
        .then((response) => {
          const { data } = response;
          if (data.data) {
            setGame(data.data);
            setLoading(false);
          }
        });
    }
  }, [game, id]);

  const createImageUrl = (slug) => {
    return `https://assets.humoq.com/cdn-cgi/image/quality=78,fit=cover,f=auto,width=256/images/h140/${slug}.webp`;
  };

  const titleImage = game ? createImageUrl(game.slug) : "";

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
                <div className={styles.gameTitle}>
                  <img src={titleImage} alt={game.title} />
                  <h2>{game.title}</h2>
                </div>
                <div className={styles.gridLarge}>
                  <div className={styles.gameSection}>
                    <iframe
                      src={game.url}
                      className={styles.gameFrame}
                      width="100%"
                      height="100%"
                    ></iframe>
                  </div>
                  <GameGrid
                    games={games}
                    itemsToShow={15}
                    excludedGameId={game.id}
                    key={game.id}
                  />
                </div>

                <div className={styles.multiplayerCardSection}>
                  <div className={`${styles.multiplayerCard}`}>
                    <MultiplayerSwiper />
                  </div>
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
                  <GameGrid
                    games={bottomGames}
                    itemsToShow={24}
                    excludedGameId={game.id}
                  />
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
