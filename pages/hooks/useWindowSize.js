import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [isSmallScreenForGrid, setIsSmallScreenForGrid] = useState(false);

  useEffect(() => {
    const checkScreenSizeForGrid = () => {
      setIsSmallScreenForGrid(window.innerWidth <= 500);
      console.log("checkScreenSizeForGrid");
    };
    checkScreenSizeForGrid();
    window.addEventListener("resize", checkScreenSizeForGrid);

    return () => window.removeEventListener("resize", checkScreenSizeForGrid);
  }, []);

  return isSmallScreenForGrid;
}
