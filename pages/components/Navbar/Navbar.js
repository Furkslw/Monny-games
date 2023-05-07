import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";

const Navbar = () => {
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
    <div className={styles.navbar}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink href="/scenes/home">
              <img src="/home.png" alt="logo" className={styles.homeicon} />
              Home
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink href="/popular">
              <img
                src="/popular.png"
                alt="logo"
                className={styles.popularicon}
              />
              Popular
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink href="/io">
              <img src="/IO.png" alt="logo" className={styles.IOicon} />
              IO
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink href="/gun">
              <img src="/gun.png" alt="logo" className={styles.gunicon} />
              Gun
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink href="/girls">
              <img src="/girls.png" alt="logo" className={styles.girlsicon} />
              Girls
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink href="/racing">
              <img src="/racing.png" alt="logo" className={styles.racingicon} />
              Racing
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink href="/sports">
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
