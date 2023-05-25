import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetchGames = () => {
  const getGames = async () => {
    return axios.get(
      `${process.env.HUMOQ_API_URL}/games/homepage?domain_id=16`
    );
  };

  const getGameById = async (id) => {
    return await axios.get("asfsdf");
  };
  return { getGames, getGameById };
};

export default useFetchGames;
