import React from "react";
import arrow from "../../assets/Calendar 1/Path 26.svg";
import avatar from "../../assets/Avatar/Avatar.png";

export const HeaderUser = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", width: "auto" }}>
      <p
        style={{
          whiteSpace: "nowrap",
          fontSize: "13px",
          marginLeft: "20px",
        }}>
        John Doe
      </p>
      <img
        style={{
          marginLeft: "15px",
          width: "11px",
          height: "7px",
          paddingTop: "2px",
        }}
        src={arrow}
        alt='arrow'
      />
      <span
        style={{
          display: "block",
          marginLeft: "11px",
          marginRight: "20px",
          width: "38px",
          height: "38px",
          background: `url(${avatar})`,
          borderRadius: "50%",
        }}
      />
    </div>
  );
};
