import React from "react";
import { HeaderSearch } from "./HeaderSearch";
import { HeaderButtons } from "./HeaderButtons";
import { HeaderUser } from "./HeaderUser";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        height: "70px",
        width: "calc(100vw - 260px)",
        maxWidth: "calc(100vw - 260px)",
        minWidth: "380px",
        left: "260px",
        background: "#fff",
        boxShadow: "0px 2px 6px #0000000A",
        zIndex: "100",
      }}>
      <HeaderSearch />
      <HeaderButtons />
      <HeaderUser />
    </header>
  );
};

export default Header;
