// import React, { useState } from "react";
// import styles from "./ResponsiveMultiplayerCard.module.css";
// import GameCard from "./GameCard";
// import { Swiper, SwiperSlide } from "swiper/react";

// const ResponsiveMultiplayerCard = () => {
//   const [page, setPage] = useState(0);
//   const cardsToShow = 2;

//   const games = [
//     // Örnek oyunlar, gerçek verilerle değiştirilebilir
//     { image: "/multiplayer1.png", title: "Game 1" },
//     { image: "/multiplayer2.png", title: "Game 2" },
//     { image: "/multiplayer2.png", title: "Game 3" },
//     { image: "/multiplayer2.png", title: "Game 4" },
//     { image: "/multiplayer1.png", title: "Game 5" },
//     { image: "/multiplayer2.png", title: "Game 6" },
//   ];

//   const handlePrevious = () => {
//     setPage(Math.max(0, page - 1));
//   };

//   const handleNext = () => {
//     setPage(Math.min(Math.ceil(games.length / cardsToShow) - 1, page + 1));
//   };

//   return (
//     <div className={styles.card}>
//       <div className={styles.titleContainer}>
//         <h2 className={styles.title}>Multiplayer</h2>
//         <div className={styles.button}>
//           <img src="/backarrow.png" alt="barrow" onClick={handlePrevious} />
//           <img src="/arrow.png" alt="arrow" onClick={handleNext} />
//         </div>
//       </div>
//       <div className={styles.gameCards}>
//         <Swiper
//           spaceBetween={30}
//           slidesPerView={cardsToShow}
//           onSlideChange={() => console.log("slide change")}
//           onSwiper={(swiper) => console.log(swiper)}
//         >
//           {games.map((game, index) => (
//             <SwiperSlide key={index}>
//               <GameCard image={game.image} title={game.title} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default ResponsiveMultiplayerCard;
