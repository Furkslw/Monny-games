import React, { useState, useEffect } from "react";
import axios from "axios";

const useFindGame = (gameSlug) => {
  const [game, setGame] = useState({});
  useEffect(() => {
    axios
      .get(`https://apiv3.humoq.com/api/v1/games/homepage?domain_id=16`)
      .then((response) => {
        setGame(response.data.data.find((game) => game.slug === gameSlug));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [gameSlug]);
  return game;
};

export default useFindGame;
