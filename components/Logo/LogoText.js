import React from "react";
import Link from "next/link";

const LogoText = () => {
  return (
    <div>
      <Link href="/scenes/home">
        <img src="/ponny-games-text.png" alt="logo" />
      </Link>
    </div>
  );
};

export default LogoText;
