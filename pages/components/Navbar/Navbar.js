import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const router = useRouter();

  const isActive = (href) => router.asPath.startsWith(href);

  const HomeLink = () => (
    <Link
      href="/scenes/home"
      className={`${styles.navLink} ${
        isActive("/scenes/home") ? styles.active : ""
      }`}
    >
      <img src="/home.png" alt="logo" className={styles.homeicon} />
      Home
    </Link>
  );

  const NavLink = ({ category, children }) => {
    const href = `/scenes/category/${category}`;

    return (
      <Link href={href}>
        <div
          className={`${styles.navLink} ${isActive(href) ? styles.active : ""}`}
        >
          {children}
        </div>
      </Link>
    );
  };
  return (
    <div className={styles.navbar}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <HomeLink />
          </li>
          <li className={styles.navItem}>
            <NavLink category={"popular"}>
              <img
                src="/popular.png"
                alt="logo"
                className={styles.popularicon}
              />
              Popular
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink category={"IO"}>
              <img src="/IO.png" alt="logo" className={styles.IOicon} />
              IO
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink category={"gun"}>
              <img src="/gun.png" alt="logo" className={styles.gunicon} />
              Gun
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink category={"girls"}>
              <img src="/girls.png" alt="logo" className={styles.girlsicon} />
              Girls
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink category={"racing"}>
              <img src="/racing.png" alt="logo" className={styles.racingicon} />
              Racing
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink category={"sports"}>
              <img src="/sports.png" alt="logo" className={styles.sportsicon} />
              Sports
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
