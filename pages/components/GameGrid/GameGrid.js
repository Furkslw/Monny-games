import React, { useState, useEffect } from "react";
import GameGridItem from "../GameGridItem/GameGridItem";

const GameGrid = ({ itemsToShow, games }) => {
  const [gamesToRender, setGamesToRender] = useState(null);
  useEffect(() => {
    console.log("Games length: ", games?.length, "Games type", typeof games);
    if (games.length && games.length !== 0) {
      const temp = games.slice(0, itemsToShow);

      setGamesToRender(temp);
    }
  }, [games]);

  return (
    <>
      {gamesToRender &&
        gamesToRender.map((game) => (
          <GameGridItem
            key={game.id}
            slug={game.slug}
            gameTitle={game.title}
            gameLink={`/scenes/game/${game.slug}?id=${game.id}`}
          />
        ))}
    </>
  );
};

export default GameGrid;
