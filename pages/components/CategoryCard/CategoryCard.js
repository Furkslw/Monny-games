import React from "react";
import styles from "./CategoryCard.module.css";

const CategoryCard = ({ categoryTitle, games, categoryIcon, iconSize }) => {
  const handleClick = (gameLink) => {
    window.location.href = gameLink;
  };

  return (
    <div className={styles.categoryCard}>
      <div className={styles.titleSection}>
        <img
          src={categoryIcon}
          alt={`${categoryTitle} icon`}
          style={{
            width: iconSize.width,
            height: iconSize.height,
            color: iconSize.color,
          }}
        />
        <h2 className={styles.categoryTitle}>{categoryTitle}</h2>
      </div>
      <div className={styles.gridSection}>
        <div className={styles.gameGridItems}>
          {games.map((game) => (
            <div
              key={game.id}
              className={styles.gridItem}
              onClick={() => handleClick(game.gameLink)}
            >
              <img src={game.imageUrl} alt={game.gameTitle} />
              <div className={styles.titleOverlay}>{game.gameTitle}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
