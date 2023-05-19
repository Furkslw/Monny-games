import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetchGames = () => {
  const [games, setGames] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("https://apiv3.humoq.com/api/v1/games/homepage?domain_id=16")
  //       .then((response) => {
  //         setGames(response.data.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   });

  return games;
};

export default useFetchGames;
