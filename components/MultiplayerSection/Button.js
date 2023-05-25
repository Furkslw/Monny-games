import React from "react";

export default function Button() {
  return (
    <div>
      <img
        src="/backarrow.png"
        alt="barrow"
        onClick={() => swiperRef?.slideNext()}
      />
    </div>
  );
}
