import React, { useState, useEffect } from "react";
import styles from "./SearchModal.module.css";

import RecentlyPlayed from "./RecentlyPlayed/RecentlyPlayed";
import TodayGames from "./TodayGames/TodayGames";
import useFetchGames from "@/pages/hooks/useFetchGames";

const SearchModal = ({ isSearchModalOpen, toggleSearchModal, categories }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [games, setGames] = useState([]);
  const { getGames } = useFetchGames();

  useEffect(() => {
    getGames()
      .then((response) => {
        const { data } = response;
        if (data.data) {
          setGames(data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Filter the games and categories based on the search term

  const [inputValue, setInputValue] = useState("");
  const handleSearchClick = () => {
    console.log("Arama gerçekleştirildi");
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h1 className={styles.title}>Search</h1>
        <div className={styles.searchBar}>
          <input
            type="text"
            className={styles.searchInput}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
          {!inputValue && (
            <div className={styles.placeholder}>Enter a word..</div>
          )}
          <img src="/search.png" alt="search" onClick={handleSearchClick} />
        </div>

        {searchTerm && (
          <>
            <h2 className={styles.resultsTitle}>Search Results</h2>
            <div className={styles.results}>
              {searchResults.slice(0, 6).map((result, index) => {
                return (
                  <div className={styles.resultItem} key={index}>
                    <img src={result.imageUrl} alt={result.gameTitle} />
                  </div>
                );
              })}
            </div>
          </>
        )}
        {searchTerm === "" && (
          <>
            <RecentlyPlayed games={games} />
            <TodayGames games={games} />
          </>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
