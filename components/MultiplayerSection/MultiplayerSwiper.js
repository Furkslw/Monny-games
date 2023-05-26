import React, { useState, useEffect, useRef } from "react";
import styles from "./MultiplayerSwiper.module.css";
import CardsColumn from "./CardsColumn";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";

const MultiplayerSwiper = () => {
  const [cardsCount, setCardsCount] = useState(2);
  const [columns, setColumns] = useState([]);
  const swiperRef = useRef();
  const swiper = useSwiper();

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
          <img
            src="/backarrow.png"
            alt="barrow"
            onClick={() => {
              console.log("Prev");
              swiperRef?.current?.slidePrev();
            }}
          />
          <img
            src="/arrow.png"
            alt="arrow"
            onClick={() => {
              console.log("Next");
              swiperRef?.current?.slideNext();
            }}
          />
        </div>
      </div>
      <div className={styles.gameCards}>
        <Swiper
          ref={swiper}
          slidesPerView={1}
          modules={[Navigation]}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
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
