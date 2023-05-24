import React, { useState, useEffect } from "react";
import styles from "./MultiplayerCard.module.css";
import GameCard from "./GameCard";

const MultiplayerCard = () => {
  const isMobile = window.innerWidth <= 500;
  const [page, setPage] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  const games = [
    // Örnek oyunlar, gerçek verilerle değiştirilebilir
    { image: "/multiplayer1.png", title: "Game 1" },
    { image: "/multiplayer2.png", title: "Game 2" },
    { image: "/multiplayer2.png", title: "Game 3" },
    { image: "/multiplayer2.png", title: "Game 4" },
    { image: "/multiplayer1.png", title: "Game 5" },
    { image: "/multiplayer2.png", title: "Game 6" },
  ];

  const handlePrevious = () => {
    setPage(Math.max(0, page - 1));
  };

  const handleNext = () => {
    setPage(Math.min(Math.ceil(games.length / cardsToShow) - 1, page + 1));
  };

  useEffect(() => {
    if (isMobile) {
      setCardsToShow(2);
    } else {
      setCardsToShow(3);
    }
  });

  return (
    <div className={styles.card}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Multiplayer</h2>
        <div className={styles.button}>
          <img src="/backarrow.png" alt="barrow" onClick={handlePrevious} />
          <img src="/arrow.png" alt="arrow" onClick={handleNext} />
        </div>
      </div>
      <div className={styles.gameCards}>
        {games
          .slice(page * cardsToShow, page * cardsToShow + cardsToShow)
          .map((game, index) => (
            <GameCard key={index} image={game.image} title={game.title} />
          ))}
      </div>
    </div>
  );
};

export default MultiplayerCard;
