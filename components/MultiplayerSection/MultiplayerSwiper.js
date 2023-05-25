import React, { useState, useEffect } from "react";
import styles from "./MultiplayerSwiper.module.css";
import CardsColumn from "./CardsColumn";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const MultiplayerSwiper = () => {
  const [page, setPage] = useState(0);
  const [cardsCount, setCardsCount] = useState(3);
  const [columns, setColumns] = useState([]);
  const games = [
    // Örnek oyunlar, gerçek verilerle değiştirilebilir
    { image: "/multiplayer1.png", title: "Game 1" },
    { image: "/multiplayer2.png", title: "Game 2" },
    { image: "/multiplayer2.png", title: "Game 3" },
    { image: "/multiplayer2.png", title: "Game 4" },
    { image: "/multiplayer1.png", title: "Game 5" },
    { image: "/multiplayer2.png", title: "Game 6" },
  ];

  const prepareGameData = (column_size) => {
    const preparedGameData = [
      ...Array(Math.ceil(games.length / column_size)),
    ].map((_, i) =>
      games.slice(column_size * i, column_size + column_size * i)
    );

    setColumns(preparedGameData);
  };

  useEffect(() => {
    prepareGameData(cardsCount);
  }, [cardsCount]);

  return (
    <div className={styles.swiperContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Multiplayer</h2>
        <div className={styles.button}>
          <img src="/backarrow.png" alt="barrow" onClick={() => {}} />
          <img src="/arrow.png" alt="arrow" onClick={() => {}} />
        </div>
      </div>
      <div className={styles.gameCards}>
        <Swiper
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {columns.map((arr, index) => (
            <SwiperSlide key={index}>
              <CardsColumn arr={arr} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MultiplayerSwiper;
