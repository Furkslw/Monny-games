import React from "react";
import styles from "./GameCard.module.css";

const GameCard = ({ image, title }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default GameCard;
