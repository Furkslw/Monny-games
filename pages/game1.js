import React from "react";
import { useRouter } from "next/router";

const game1 = () => {
  const router = useRouter();
  return (
    <iframe
      src="https://html5.gamedistribution.com/b63bcf485d1749479bb0d04864d10511/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}"
      width="1280"
      height="720"
      scrolling="none"
      frameborder="0"
    ></iframe>
  );
};

export default game1;
