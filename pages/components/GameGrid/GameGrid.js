import React, { useState, useEffect } from "react";
import GameGridItem from "../GameGridItem/GameGridItem";
import useFetchGames from "@/pages/hooks/useFetchGames";
import useFetchImage from "@/pages/hooks/useFetchImage";

const GameGrid = ({ itemsToShow }) => {
  const games = useFetchGames();

  return (
    <>
      {games.slice(0, itemsToShow).map((game) => (
        <GameGridItem
          key={game.id}
          imageUrl={"/game1.png"}
          gameTitle={game.title}
          gameLink={`/scenes/game/${game.slug}`}
        />
      ))}
    </>
  );
};

export default GameGrid;
