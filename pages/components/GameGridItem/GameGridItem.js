import React from "react";
import Link from "next/link";
import styles from "./GameGridItem.module.css";

const GameGridItem = ({ imageUrl, gameTitle, gameLink, className }) => {
  return (
    <Link href={gameLink}>
      <div className={`${styles.gridItem} ${className}`}>
        <img src={imageUrl} alt={gameTitle} />
        <div className={styles.titleOverlay}>{gameTitle}</div>
      </div>
    </Link>
  );
};

export default GameGridItem;
