import React from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.push("/scenes/home");
  }, []);

  return null;
};

export default Index;
