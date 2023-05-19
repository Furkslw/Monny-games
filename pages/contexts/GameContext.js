import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const categories = [
    {
      title: "IO",

      categoryIcon: "/IOCat.png",
      iconSize: { width: "21px", height: "23px" },
    },
    {
      title: "gun",

      categoryIcon: "/gunCat.png",
      iconSize: { width: "27px", height: "21px" },
    },
    {
      title: "girls",

      categoryIcon: "/girlsCat.png",
      iconSize: { width: "16px", height: "19.64px" },
    },
    {
      title: "racing",

      categoryIcon: "/racingCat.png",
      iconSize: { width: "23px", height: "18px" },
    },
    {
      title: "Sports",

      categoryIcon: "/sportsCat.png",
      iconSize: { width: "20px", height: "20px" },
    },
  ];

  // Resize logic and other states will go here

  return (
    <GameContext.Provider value={{ categories }}>
      {children}
    </GameContext.Provider>
  );
};
