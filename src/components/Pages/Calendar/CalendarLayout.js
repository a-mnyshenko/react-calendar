import React, { useState } from "react";
import Calendar from "./Calendar";

import NewEvent from "./NewEvent";

const CalendarLayout = () => {
  const [displayPopup, changeDisplayPopup] = useState(false);
  const [cell, setCell] = useState({});

  const showPopup = (date) => {
    changeDisplayPopup(!displayPopup);
    setCell(date);
  };

  return (
    <div
      style={{
        position: "absolute",
        width: "calc(100% - 95px - 75px)",
        paddingBottom: "103px",
      }}>
      <h1 style={{ fontWeight: "400", color: "#43425D", fontSize: "28px" }}>
        Calendar
      </h1>
      <div
        style={{
          position: "relative",
          padding: "20px",
          paddingBottom: "35px",
          background: "#fff",
          boxShadow: "0px 2px 6px #0000000A",
          minWidth: "640px",
          maxWidth: "1100px",
          width: "calc(100% - 40px)",
        }}>
        <h2 style={{ color: "#4D4F5C", fontWeight: "400", marginTop: "0" }}>
          Calendar View
        </h2>
        {displayPopup && <NewEvent coords={cell} />}
        <Calendar showPopup={showPopup} />
      </div>
    </div>
  );
};

export default CalendarLayout;
