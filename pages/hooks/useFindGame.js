import React, { useState, useEffect } from "react";
import axios from "axios";

const useFindGame = (gameSlug) => {
  const [game, setGame] = useState({});
  useEffect(() => {}, [gameSlug]);
  return game;
};

export default useFindGame;
