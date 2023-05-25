import React from "react";
import styles from "./CardsColumn.module.css";

const CardsColumn = ({ arr }) => {
  console.log("Array of the column: ", arr, arr.length);

  const onClick = (title) => {
    console.log("Clicked to ", title);
  };
  return (
    <div className={styles.card}>
      {arr.map((game, index) => (
        <div
          key={index}
          className={styles.cardItem}
          onClick={() => onClick(game.title)}
        >
          <img src={game.image} alt={game.title} className={styles.image} />
          <p className={styles.title}>{game.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CardsColumn;
