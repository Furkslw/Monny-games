import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Ad from "../components/Ad/Ad";
import Header from "../components/Header/Header";
import { GameContext } from "../contexts/GameContext";
import styles from "../styles/searchScreen.module.css";
import Link from "next/link";
import useFetchGames from "../hooks/useFetchGames";
import GameGrid from "../components/GameGrid/GameGrid";
import SearchBar from "../components/SearchBar/SearchBar";

const SearchScreen = () => {
  const [games, setGames] = useState([]);
  const router = useRouter();
  const { getGames } = useFetchGames();
  const { categories } = useContext(GameContext);
  useEffect(() => {
    getGames().then((response) => {
      const { data } = response;
      if (data.data) {
        setGames(data.data);
      }
    });
  }, []);

  // Input value tutacak state
  const [inputValue, setInputValue] = useState("");
  //Arama yapacak fonksiyon
  const handleSearchClick = () => {
    console.log("Arama gerçekleştirildi");
  };

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
              <h2>Search</h2>
              <p>
                Use the box below to search through thousands of free online
                games:
              </p>

              <div className={styles.search}>
                <input
                  type="text"
                  className={styles.searchInput}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                ></input>
                {!inputValue && (
                  <div className={styles.placeholder}>Search</div>
                )}
                <div className={styles.button}>
                  <Link href={"/scenes/searchscreen"}>
                    <img
                      src="/search.png"
                      alt="search"
                      onClick={handleSearchClick}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.gridLarge}>
              <GameGrid games={games} itemsToShow={27} />
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

export default SearchScreen;
