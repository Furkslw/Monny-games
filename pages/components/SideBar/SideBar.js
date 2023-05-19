import React from "react";
import styles from "./Sidebar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const Sidebar = ({ toggleSidebar, isOpen }) => {
  const router = useRouter();

  const isActive = (href) => router.pathname === href;

  const NavLink = ({ href, children }) => (
    <Link
      href={href}
      className={`${styles.navLink} ${isActive(href) ? styles.active : ""}`}
    >
      {children}
    </Link>
  );

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={toggleSidebar}></div>}
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.sidebarHeader}>
          <h1>Menu</h1>
          <img src="/cross.png" alt="Close menu" onClick={toggleSidebar} />
        </div>
        <div className={styles.categorySection}>
          <h2>Category</h2>
        </div>
        <ul>
          <li className={styles.navItem}>
            <img src="/home.png" alt="logo" className={styles.homeicon} />
            <NavLink href="/scenes/home">Home</NavLink>
          </li>
          <li className={styles.navItem}>
            <img src="/popular.png" alt="logo" className={styles.popularicon} />
            <NavLink href="/scenes/category/popular">Popular</NavLink>
          </li>
          <li className={styles.navItem}>
            <img src="/gun.png" alt="logo" className={styles.gunicon} />
            <NavLink href="/scenes/category/gun">Gun</NavLink>
          </li>
          <li className={styles.navItem}>
            <img src="/girls.png" alt="logo" className={styles.girlsicon} />
            <NavLink href="/scenes/category/girls">Girls</NavLink>
          </li>
          <li className={styles.navItem}>
            <img src="/racing.png" alt="logo" className={styles.racingicon} />
            <NavLink href="/scenes/category/racing">Racing</NavLink>
          </li>
          <li className={styles.navItem}>
            <img src="/sports.png" alt="logo" className={styles.sportsicon} />
            <NavLink href="/scenes/category/sports">Sports</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
