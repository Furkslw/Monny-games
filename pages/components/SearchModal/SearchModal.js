import React, { useState, useEffect } from "react";
import styles from "./SearchModal.module.css";

import RecentlyPlayed from "./RecentlyPlayed/RecentlyPlayed";
import TodayGames from "./TodayGames/TodayGames";

const SearchModal = ({
  isSearchModalOpen,
  toggleSearchModal,
  games,
  categories,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [placeholder, setPlaceholder] = useState("Enter a word..");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const getSearchResults = () => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase().replace(/\s/g, "");

      // Filter the games and categories based on the search term
      const filteredGames = games.filter((game) =>
        game.gameTitle
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(lowerCaseSearchTerm)
      );
      const filteredCategories = categories.filter((category) =>
        category.title
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(lowerCaseSearchTerm)
      );

      // Combine the results into a single array
      const results = [...filteredGames, ...filteredCategories];
      setSearchResults(results);
    };

    if (searchTerm) {
      getSearchResults();
    } else {
      // If there is no search term, clear the results
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value === "") {
      setPlaceholder("Enter a word..");
    } else {
      setPlaceholder("");
    }
  };

  const recentlyPlayedGames = games.slice(0, 6);

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h1 className={styles.title}>Search</h1>
        <div className={styles.searchBar}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            className={styles.searchInput}
          />
          <span className={styles.placeholder}>{placeholder}</span>
          <img src="/search.png" alt="Search" className={styles.searchIcon} />
        </div>

        {searchTerm && (
          <>
            <h2 className={styles.resultsTitle}>Search Results</h2>
            <div className={styles.results}>
              {searchResults.slice(0, 6).map((result, index) => {
                // This is a game
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
            <RecentlyPlayed recentlyPlayedGames={recentlyPlayedGames} />
            <TodayGames games={games} />
          </>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
