import React, { useState } from "react";
import Input from "./Input";

const NewEvent = (props) => {
  const [event, setEvent] = useState({});

  const handleSetEvent = (e, id) => {
    setEvent({ ...event, [id]: e.target.value });
    console.log(event);
  };
  const coordX = props.coords.jsEvent?.clientX;
  const coordY = props.coords.jsEvent?.clientY;

  return (
    <>
      <div
        id='popup'
        style={{
          position: "absolute",
          left: coordX - 438 + window.scrollX + "px",
          top: coordY - 165 + window.scrollY + "px",
          boxShadow: "0px 3px 18px: 00000029",
          border: "1px solid #43425D",
          borderRadius: "10px",
          height: "275px",
          width: "201px",
          zIndex: "1000",
          background: "#fff",
        }}>
        <span
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: "-16px",
            border: " 6px solid transparent",
            borderBottom: "9px solid #43425D",
          }}></span>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            top: "20px",
          }}>
          <Input
            handleSetEvent={handleSetEvent}
            id={"event"}
            type={"text"}
            inputName={"event name"}
          />
          <Input
            handleSetEvent={handleSetEvent}
            id={"date"}
            type={"date"}
            defaultValue={props.coords.dateStr}
            inputName={"event date"}
          />
          <Input
            handleSetEvent={handleSetEvent}
            id={"time"}
            type={"time"}
            defaultValue={null}
            inputName={"event time"}
          />
          <Input
            handleSetEvent={handleSetEvent}
            id={"description"}
            type={"text"}
            inputName={"notes"}
          />
        </div>
      </div>
    </>
  );
};

export default NewEvent;
