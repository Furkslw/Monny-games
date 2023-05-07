import React from "react";
import Link from "next/link";
import styles from "./GameGridItem.module.css";

const GameGridItem = ({ imageUrl, gameTitle, gameLink, className }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = gameLink;
  };

  return (
    <Link href={gameLink}>
      <div className={`${styles.gridItem} ${className}`} onClick={handleClick}>
        <img src={imageUrl} alt={gameTitle} />
        <div className={styles.titleOverlay}>{gameTitle}</div>
      </div>
    </Link>
  );
};

export default GameGridItem;
