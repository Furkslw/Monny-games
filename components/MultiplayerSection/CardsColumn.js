import React from "react";
import styles from "./CardsColumn.module.css";

const CardsColumn = ({ arr }) => {
  console.log("Array of the column: ", arr, arr.length);
  return (
    <div className={styles.card}>
      {arr.map((game, index) => (
        <div key={index} className={styles.cardItem}>
          <img src={game.image} alt={game.title} />
          <p>{game.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CardsColumn;
