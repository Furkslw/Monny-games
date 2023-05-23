import React from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.push("/home");
  }, []);

  return null;
};

export default Index;
