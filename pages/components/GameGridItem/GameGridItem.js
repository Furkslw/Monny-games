import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./GameGridItem.module.css";

const GameGridItem = ({ gameTitle, slug, id }) => {
  const router = useRouter();
  const createImageUrl = (slug) => {
    return `https://assets.humoq.com/cdn-cgi/image/quality=78,fit=cover,f=auto,width=256/images/h140/${slug}.webp`;
  };
  `/game/${slug}?id=${id}`;
  const onClick = (e) => {
    e.preventDefault();
    router.push({
      pathname: `/game/[slug]`,
      query: { slug: slug, id: id },
    });
  };

  console.log(slug);
  return (
    <div className={`${styles.gridItem}`} onClick={onClick}>
      <img src={createImageUrl(slug)} alt={gameTitle} />
      <div className={styles.titleOverlay}>{gameTitle}</div>
    </div>
  );
};

export default GameGridItem;
