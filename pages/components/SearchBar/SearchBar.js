import React from "react";
import { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  // Input value tutacak state
  const [inputValue, setInputValue] = useState("");
  //Arama yapacak fonksiyon
  const handleSearchClick = () => {
    console.log("Arama gerçekleştirildi");
  };

  // Arama inputu boşsa placeholder göstermek için
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.searchInput}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      {!inputValue && <div className={styles.placeholder}>Search</div>}
      <img src="/search.png" alt="search" onClick={handleSearchClick} />
    </div>
  );
};

export default SearchBar;
