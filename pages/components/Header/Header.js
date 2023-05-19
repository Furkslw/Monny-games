import React from "react";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
import SearchModal from "../SearchModal/SearchModal";

const Header = ({ games, categories }) => {
  // Sidebarla ilgili state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 1154);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  // SearchModal State
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const toggleSearchModal = () => {
    setIsSearchModalOpen(!isSearchModalOpen);
  };

  useEffect(() => {
    if (isSearchModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSearchModalOpen]);
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
                <img
                  src="/search.png"
                  alt="Search"
                  onClick={toggleSearchModal}
                />
                <img src="/menu.png" alt="menu" onClick={toggleSidebar} />
              </div>
              {isSidebarOpen && (
                <SideBar
                  isOpen={isSidebarOpen}
                  toggleSidebar={toggleSidebar}
                  games={games}
                  categories={categories}
                />
              )}
            </>
          )}
        </div>
      </header>
      <Navbar />
      {isSearchModalOpen && (
        <SearchModal
          isOpen={isSearchModalOpen}
          toggleModal={toggleSearchModal}
          games={games}
          categories={categories}
        />
      )}
    </>
  );
};

export default Header;
