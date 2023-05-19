import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;

const Spinner = (loading) => {
  return (
    <div
      className="sweet-loading"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // This makes sure the spinner is centered vertically
      }}
    >
      <FadeLoader
        color={"#ffffff"} // Change spinner color to white
        loading={loading}
        css={override}
        size={150}
      />
    </div>
  );
};

export default Spinner;
