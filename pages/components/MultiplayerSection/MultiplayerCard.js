import React, { useState } from "react";
import styles from "./MultiplayerCard.module.css";
import GameCard from "./GameCard";

const MultiplayerCard = () => {
  const [page, setPage] = useState(0);

  const games = [
    // Örnek oyunlar, gerçek verilerle değiştirilebilir
    { image: "/multiplayer1.png", title: "Game 1" },
    { image: "/multiplayer2.png", title: "Game 2" },
    { image: "/multiplayer1.png", title: "Game 3" },
    { image: "/multiplayer2.png", title: "Game 4" },
    { image: "/multiplayer1.png", title: "Game 5" },
    { image: "/multiplayer2.png", title: "Game 6" },
  ];

  const handlePrevious = () => {
    setPage(Math.max(0, page - 1));
  };

  const handleNext = () => {
    setPage(Math.min(Math.ceil(games.length / 3) - 1, page + 1));
  };

  return (
    <div className={styles.card}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Multiplayer</h2>
        <div className={styles.button}>
          <button onClick={handlePrevious} className={styles.arrow}>
            &lt;
          </button>
          <button onClick={handleNext} className={styles.arrow}>
            &gt;
          </button>
        </div>
      </div>
      <div className={styles.gameCards}>
        {games.slice(page * 3, page * 3 + 3).map((game, index) => (
          <GameCard key={index} image={game.image} title={game.title} />
        ))}
      </div>
    </div>
  );
};

export default MultiplayerCard;
