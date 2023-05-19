import React from "react";
import styles from "./RecentlyPlayed.module.css";

const RecentlyPlayed = ({ recentlyPlayedGames }) => {
  const games = [
    {
      id: 1,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 2,
      imageUrl: "/game2.png",
      gameTitle: "Game 2",
      gameLink: "/game2",
      category: "Gun",
    },
    {
      id: 3,
      imageUrl: "/game3.png",
      gameTitle: "Game 3",
      gameLink: "/game3",
      category: "Girls",
    },
    {
      id: 4,
      imageUrl: "/game4.png",
      gameTitle: "Game 4",
      gameLink: "/game4",
      category: "Racing",
    },
    {
      id: 5,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 6,
      imageUrl: "/game2.png",
      gameTitle: "Game 2",
      gameLink: "/game2",
      category: "Gun",
    },
    {
      id: 7,
      imageUrl: "/game3.png",
      gameTitle: "Game 3",
      gameLink: "/game3",
      category: "Girls",
    },
    {
      id: 8,
      imageUrl: "/game4.png",
      gameTitle: "Game 4",
      gameLink: "/game4",
      category: "Racing",
    },
    {
      id: 9,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 10,
      imageUrl: "/game2.png",
      gameTitle: "Game 2",
      gameLink: "/game2",
      category: "Gun",
    },
    {
      id: 11,
      imageUrl: "/game3.png",
      gameTitle: "Game 3",
      gameLink: "/game3",
      category: "Girls",
    },
    {
      id: 12,
      imageUrl: "/game4.png",
      gameTitle: "Game 4",
      gameLink: "/game4",
      category: "Racing",
    },
    {
      id: 13,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 14,
      imageUrl: "/game2.png",
      gameTitle: "Game 2",
      gameLink: "/game2",
      category: "Gun",
    },
    {
      id: 15,
      imageUrl: "/game3.png",
      gameTitle: "Game 3",
      gameLink: "/game3",
      category: "Girls",
    },
    {
      id: 16,
      imageUrl: "/game4.png",
      gameTitle: "Game 4",
      gameLink: "/game4",
      category: "Racing",
    },
    {
      id: 17,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 60,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 59,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 58,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 57,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 56,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 55,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 54,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 53,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 52,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 51,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 18,
      imageUrl: "/game2.png",
      gameTitle: "Game 2",
      gameLink: "/game2",
      category: "Gun",
    },
    {
      id: 19,
      imageUrl: "/game3.png",
      gameTitle: "Game 3",
      gameLink: "/game3",
      category: "Girls",
    },
    {
      id: 22,
      imageUrl: "/game4.png",
      gameTitle: "Game 4",
      gameLink: "/game4",
      category: "Racing",
    },
    {
      id: 21,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },
    {
      id: 23,
      imageUrl: "/game2.png",
      gameTitle: "Game 2",
      gameLink: "/game2",
      category: "Gun",
    },
    {
      id: 24,
      imageUrl: "/game3.png",
      gameTitle: "Game 3",
      gameLink: "/game3",
      category: "Girls",
    },
    {
      id: 25,
      imageUrl: "/game4.png",
      gameTitle: "Game 4",
      gameLink: "/game4",
      category: "Racing",
    },
    {
      id: 26,
      imageUrl: "/game1.png",
      gameTitle: "Game 1",
      gameLink: "/game1",
      category: "IO",
    },

    {
      id: 27,
      imageUrl: "/game2.png",
      gameTitle: "Game 2",
      gameLink: "/game2",
      category: "Sports",
    },
    {
      id: 28,
      imageUrl: "/game3.png",
      gameTitle: "Game 3",
      gameLink: "/game3",
      category: "Girls",
    },
    {
      id: 29,
      imageUrl: "/game4.png",
      gameTitle: "Game 4",
      gameLink: "/game4",
      category: "Racing",
    },
    {
      id: 30,
      imageUrl: "/game3.png",
      gameTitle: "Game 3",
      gameLink: "/game3",
      category: "Sports",
    },
    {
      id: 31,
      imageUrl: "/game4.png",
      gameTitle: "Game 4",
      gameLink: "/game4",
      category: "Sports",
    },
  ];
  return (
    <div className={styles.recentlyPlayed}>
      <h2 className={styles.title}>Recently Played</h2>
      <div className={styles.games}>
        {recentlyPlayedGames.slice(0, 6).map((game, index) => (
          <div key={index} className={styles.game}>
            <img src={game.imageUrl} alt={game.title} />
            <h3>{game.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyPlayed;
