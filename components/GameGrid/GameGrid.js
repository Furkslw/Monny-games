import React, { useState, useEffect } from "react";
import GameGridItem from "../GameGridItem/GameGridItem";

const GameGrid = ({ itemsToShow, games, excludedGameId }) => {
  const [gamesToRender, setGamesToRender] = useState(null);
  useEffect(() => {
    console.log("Games length: ", games?.length, "Games type", typeof games);
    if (games.length && games.length !== 0) {
      const temp = games
        .filter((game) => game.id !== excludedGameId)
        .slice(0, itemsToShow);

      setGamesToRender(temp);
    }
  }, [games, excludedGameId]);

  return (
    <>
      {gamesToRender &&
        gamesToRender.map((game) => (
          <GameGridItem id={game.id} slug={game.slug} gameTitle={game.title} />
        ))}
    </>
  );
};

export default GameGrid;
