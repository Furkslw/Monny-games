import React from "react";
import Logo from "../components/Logo/Logo";
import SearchBar from "../components/SearchBar/SearchBar";
import Navbar from "../components/Navbar/Navbar";
import LogoText from "../components/Logo/LogoText";
import Ad from "../components/Ad/Ad";
import styles from "../index.module.css";
import GameGridItem from "../components/GameGridItem/GameGridItem";
import MultiplayerCard from "../components/MultiplayerSection/MultiplayerCard";
import CategoryCard from "../components/CategoryCard/CategoryCard";
const Home = () => {
  const games = [
    {
      id: 1,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 2,
      imageUrl: "/game2.png",
      gameTitle: "Game 2",
      gameLink: "/game2",
      category: "Gun",
    },
    {
      id: 3,
      imageUrl: "/game3.png",
      gameTitle: "Game 3",
      gameLink: "/game3",
      category: "Girls",
    },
    {
      id: 4,
      imageUrl: "/game4.png",
      gameTitle: "Game 4",
      gameLink: "/game4",
      category: "Racing",
    },
    {
      id: 5,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 6,
      imageUrl: "/game2.png",
      gameTitle: "Game 2",
      gameLink: "/game2",
      category: "Gun",
    },
    {
      id: 7,
      imageUrl: "/game3.png",
      gameTitle: "Game 3",
      gameLink: "/game3",
      category: "Girls",
    },
    {
      id: 8,
      imageUrl: "/game4.png",
      gameTitle: "Game 4",
      gameLink: "/game4",
      category: "Racing",
    },
    {
      id: 9,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 10,
      imageUrl: "/game2.png",
      gameTitle: "Game 2",
      gameLink: "/game2",
      category: "Gun",
    },
    {
      id: 11,
      imageUrl: "/game3.png",
      gameTitle: "Game 3",
      gameLink: "/game3",
      category: "Girls",
    },
    {
      id: 12,
      imageUrl: "/game4.png",
      gameTitle: "Game 4",
      gameLink: "/game4",
      category: "Racing",
    },
    {
      id: 13,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 14,
      imageUrl: "/game2.png",
      gameTitle: "Game 2",
      gameLink: "/game2",
      category: "Gun",
    },
    {
      id: 15,
      imageUrl: "/game3.png",
      gameTitle: "Game 3",
      gameLink: "/game3",
      category: "Girls",
    },
    {
      id: 16,
      imageUrl: "/game4.png",
      gameTitle: "Game 4",
      gameLink: "/game4",
      category: "Racing",
    },
    {
      id: 17,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 18,
      imageUrl: "/game2.png",
      gameTitle: "Game 2",
      gameLink: "/game2",
      category: "Gun",
    },
    {
      id: 19,
      imageUrl: "/game3.png",
      gameTitle: "Game 3",
      gameLink: "/game3",
      category: "Girls",
    },
    {
      id: 22,
      imageUrl: "/game4.png",
      gameTitle: "Game 4",
      gameLink: "/game4",
      category: "Racing",
    },
    {
      id: 21,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 23,
      imageUrl: "/game2.png",
      gameTitle: "Game 2",
      gameLink: "/game2",
      category: "Gun",
    },
    {
      id: 24,
      imageUrl: "/game3.png",
      gameTitle: "Game 3",
      gameLink: "/game3",
      category: "Girls",
    },
    {
      id: 25,
      imageUrl: "/game4.png",
      gameTitle: "Game 4",
      gameLink: "/game4",
      category: "Racing",
    },
    {
      id: 26,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 26,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 26,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 26,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 26,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 26,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 26,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 27,
      imageUrl: "/game2.png",
      gameTitle: "Game 2",
      gameLink: "/game2",
      category: "Sports",
    },
    {
      id: 28,
      imageUrl: "/game3.png",
      gameTitle: "Game 3",
      gameLink: "/game3",
      category: "Girls",
    },
    {
      id: 29,
      imageUrl: "/game4.png",
      gameTitle: "Game 4",
      gameLink: "/game4",
      category: "Racing",
    },
    {
      id: 30,
      imageUrl: "/game3.png",
      gameTitle: "Game 3",
      gameLink: "/game3",
      category: "Sports",
    },
    {
      id: 31,
      imageUrl: "/game4.png",
      gameTitle: "Game 4",
      gameLink: "/game4",
      category: "Sports",
    },
  ];
  const categories = [
    {
      title: "IO",
      games: games.filter((game) => game.category === "IO"),
      categoryIcon: "/IOCat.png",
      iconSize: { width: "21px", height: "23px" },
    },
    {
      title: "Gun",
      games: games.filter((game) => game.category === "Gun"),
      categoryIcon: "/gunCat.png",
      iconSize: { width: "27px", height: "21px" },
    },
    {
      title: "Girls",
      games: games.filter((game) => game.category === "Girls"),
      categoryIcon: "/girlsCat.png",
      iconSize: { width: "16px", height: "19.64px" },
    },
    {
      title: "Racing",
      games: games.filter((game) => game.category === "Racing"),
      categoryIcon: "/racingCat.png",
      iconSize: { width: "23px", height: "18px" },
    },
    {
      title: "Sports",
      games: games.filter((game) => game.category === "Sports"),
      categoryIcon: "/sportsCat.png",
      iconSize: { width: "20px", height: "20px" },
    },
  ];

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Logo />
          <div className={styles.logoText}>
            <LogoText />
          </div>
        </div>
        <div className={styles.logoText}></div>
        <div className={styles.social}>
          <p>
            Play games at <span>ponyygame.com</span>
            <br />
            Every day you can find the newest and best games on this website!
          </p>
          <SearchBar />
        </div>
      </header>
      <Navbar />
      <main className={styles.main}>
        <Ad src="/ad.png" />
        <div className={styles.gridContainer}>
          {games.slice(0, 30).map((game, index) => (
            <GameGridItem
              key={index}
              imageUrl={game.imageUrl}
              gameTitle={game.gameTitle}
              gameLink={game.gameLink}
            />
          ))}
          <div className={`${styles.multiplayerCard}`}>
            <MultiplayerCard />
          </div>
          <div className={styles.categoryGrid}>
            <div className={styles.categoryCard}>
              {categories.map((category) => (
                <CategoryCard
                  key={category.title}
                  categoryTitle={category.title}
                  games={category.games}
                  categoryIcon={category.categoryIcon}
                  iconSize={category.iconSize}
                />
              ))}
            </div>
          </div>
          <div className={styles.bottomGrid}>
            <div className={styles.bottomGridItem}>
              {games.slice(0, 9).map((game, index) => (
                <GameGridItem
                  key={index}
                  imageUrl={game.imageUrl}
                  gameTitle={game.gameTitle}
                  gameLink={game.gameLink}
                />
              ))}
            </div>
          </div>
        </div>

        <Ad src="/ad.png" />
      </main>
    </>
  );
};

export default Home;
