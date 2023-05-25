import React from "react";
import Link from "next/link";
const Logo = () => {
  return (
    <div>
      <Link href="/scenes/home">
        <img src="/logo.png" alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
