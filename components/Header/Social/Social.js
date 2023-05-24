import React from "react";
import styles from "./Social.module.css";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import SideBar from "../../../../components/SideBar/SideBar";

const Social = ({
  isSmallScreen,
  toggleSearchModal,
  toggleSidebar,
  games,
  categories,
  isSidebarOpen,
}) => (
  <div className={styles.social}>
    {!isSmallScreen && (
      <>
        <p>
          Play games at <span>ponyygame.com</span>
          <br />
          Every day you can find the newest and best games on this website!
        </p>
        <SearchBar />
      </>
    )}
    {isSmallScreen && (
      <>
        <div className={styles.buttons}>
          <img src="/search.png" alt="Search" onClick={toggleSearchModal} />
          <img
            src="/menu.png"
            alt="menu"
            width={50}
            height={20}
            onClick={toggleSidebar}
          />
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
);

export default Social;
