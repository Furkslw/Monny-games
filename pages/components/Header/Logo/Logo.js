import React from "react";
import styles from "./Logo.module.css";

const Logo = () => (
  <div className={styles.logo}>
    <img src="/logo.png" alt="logo" width={134} height={140.09} />
    <div className={styles.logoText}>
      <img
        src="/ponny-games-text.png"
        alt="logoText"
        width={147.67}
        height={70.43}
      />
    </div>
  </div>
);

export default Logo;
