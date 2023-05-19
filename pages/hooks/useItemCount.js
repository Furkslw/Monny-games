import { useState, useEffect } from "react";

export default function useItemCount(breakPoints, defaultCount) {
  const [itemCount, setItemCount] = useState(defaultCount);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const breakPoint = Object.keys(breakPoints).find((bp) => width <= bp);
      setItemCount(breakPoints[breakPoint]);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakPoints]);

  return itemCount;
}
