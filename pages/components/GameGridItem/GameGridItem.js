import React from "react";
import Link from "next/link";
import styles from "./GameGridItem.module.css";

const GameGridItem = ({ imageUrl, gameTitle, gameLink, className, slug }) => {
  const createImageUrl = (slug) => {
    return `https://assets.humoq.com/cdn-cgi/image/quality=78,fit=cover,f=auto,width=256/images/h140/${slug}.webp`;
  };

  return (
    <Link href={gameLink}>
      <div className={`${styles.gridItem} ${className}`}>
        <img src={createImageUrl(slug)} alt={gameTitle} />
        <div className={styles.titleOverlay}>{gameTitle}</div>
      </div>
    </Link>
  );
};

export default GameGridItem;
