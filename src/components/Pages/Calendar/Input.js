import React from "react";

const Input = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        position: "relative",
        width: "calc(100% - 50px)",
        padding: "0 24px",
        margin: "10px 0",
        height: "29px",
      }}>
      <label
        htmlFor={props.id}
        style={{
          color: "#D6D6D6",
          fontSize: "9px",
          zIndex: "1000",
          position: "absolute",
          marginTop: "-10px",
        }}>
        {props.inputName}
      </label>
      <input
        onChange={(e) => props.handleSetEvent(e, props.id)}
        id={props.id}
        type={props.type}
        defaultValue={props.defaultValue}
        style={{
          height: "16px",
          width: "100%",
          marginBottom: "20px",
          border: "none",
          borderBottom: "1px solid #43425D80",
          outline: "none",
          textAlign: "bottom",
        }}
      />
    </div>
  );
};

export default Input;
