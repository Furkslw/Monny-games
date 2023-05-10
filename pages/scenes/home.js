import React from "react";
import { useState, useEffect } from "react";
import Logo from "../components/Logo/Logo";
import SearchBar from "../components/SearchBar/SearchBar";
import Navbar from "../components/Navbar/Navbar";
import LogoText from "../components/Logo/LogoText";
import Ad from "../components/Ad/Ad";
import styles from "../index.module.css";
import GameGridItem from "../components/GameGridItem/GameGridItem";
import MultiplayerCard from "../components/MultiplayerSection/MultiplayerCard";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import BottomGrid from "../components/BottomGrid/BottomGrid";

const Home = () => {
  /* DATA */
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
      id: 60,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 59,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 58,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 57,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 56,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 55,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 54,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 53,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 52,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 51,
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

  /* Ekran çözünürlüğüne göre göre menü bar */
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 1154);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  /* Gridlerin ekran boyutuna göre Kaç grid olacağına dair state */
  const [itemsToShow, setItemsToShow] = React.useState(30);

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      switch (true) {
        case width <= 500:
          setItemsToShow(15);
          break;
        case width <= 945:
          setItemsToShow(5);
          break;
        case width <= 1150:
          setItemsToShow(10);
          break;
        case width <= 1330:
          setItemsToShow(15);
          break;
        case width <= 1615:
          setItemsToShow(20);
          break;
        case width <= 1743:
          setItemsToShow(25);
          break;
        default:
          setItemsToShow(30);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* BottomGrid'in ekran boyutuna göre Kaç grid olacağına dair state */
  const [bottomItemCount, setBottomItemCount] = useState(9);

  useEffect(() => {
    const updateBottomItemCount = () => {
      if (window.innerWidth <= 1140) {
        setBottomItemCount(4);
      } else if (window.innerWidth <= 1340) {
        setBottomItemCount(6);
      } else if (window.innerWidth <= 1615) {
        setBottomItemCount(7);
      } else if (window.innerWidth <= 1743) {
        setBottomItemCount(8);
      }
    };

    window.addEventListener("resize", updateBottomItemCount);

    // Component unmount olduğunda event listener'ı temizle
    return () => {
      window.removeEventListener("resize", updateBottomItemCount);
    };
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="logo" width={134} height={140.09} />
          <div className={styles.logoText}>
            <img
              src="/ponny-games-text.png"
              alt="logoText"
              width={147.67}
              height={70.43}
            />
          </div>
        </div>
        <div className={styles.logoText}></div>
        <div className={styles.social}>
          {!isSmallScreen && (
            <>
              <p>
                Play games at <span>ponyygame.com</span>
                <br />
                Every day you can find the newest and best games on this
                website!
              </p>
              <SearchBar />
            </>
          )}
          {isSmallScreen && (
            <>
              <div className={styles.buttons}>
                <img src="/search.png" alt="search" />
                <img src="/menu.png" alt="menu" width={50} height={20} />
              </div>
            </>
          )}
        </div>
      </header>
      <Navbar />
      <main className={styles.main}>
        {window.innerWidth > 1343 && (
          <div className="ad">
            <Ad src="/ad.png" />
          </div>
        )}
        <div className={styles.gridContainer}>
          {games.slice(0, itemsToShow).map((game, index) => (
            <GameGridItem
              key={index}
              imageUrl={game.imageUrl}
              gameTitle={game.gameTitle}
              gameLink={game.gameLink}
            />
          ))}
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
          {isSmallScreen && (
            <>
              <div className={styles.bottomResGrid}>
                <div className={styles.bottomResGridItem}>
                  {games.slice(0, itemsToShow).map((game, index) => (
                    <GameGridItem
                      key={index}
                      imageUrl={game.imageUrl}
                      gameTitle={game.gameTitle}
                      gameLink={game.gameLink}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
          {!isSmallScreen && (
            <>
              <div className={styles.bottomGrid}>
                <div className={styles.bottomGridItem}>
                  {games.slice(0, bottomItemCount).map((game, index) => (
                    <GameGridItem
                      key={index}
                      imageUrl={game.imageUrl}
                      gameTitle={game.gameTitle}
                      gameLink={game.gameLink}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        {window.innerWidth > 1460 && (
          <div className="ad">
            <Ad src="/ad.png" />
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
