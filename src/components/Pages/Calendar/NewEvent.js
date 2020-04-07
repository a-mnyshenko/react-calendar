import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Input from "./Input";
import EventColorPicker from "./EventColorPicker";

import moment from "moment";

import { inputFields } from "./mock/inputFields";
import { addEvent } from "../../../store/actions/calendar";

const NewEvent = (props) => {
  const [event, setEvent] = useState({});
  const [scroll, setScroll] = useState({
    x: window.scrollX,
    y: window.scrollY,
  });

  useEffect(() => {
    setEvent({
      title: props.event.title || "no title",
      start: moment(props.event.date)
        .set("hour", 13)
        .set("minute", 0)
        .format(),
      end: moment(props.event.date)
        .set("hour", 13)
        .set("minute", 0)
        .add(1, "h")
        .format(),
      background: "#blue",
      editable: true,
      allDay: true,
      description: "",
    });
  }, [props.event.date, props.event.title, props.event.dateStr]);

  const handleCreateEvent = () => {
    props.create({
      ...event,
      start: event.start,
      end: event.end,
    });
    props.showPopup({});
  };

  const handleBackgroundPick = (e) => {
    console.log(e.target.style.background);
    setEvent({ ...event, background: e.target.style.background });
  };

  const handleSetEvent = (e, id) => {
    const [hh, mm] =
      (id === "time" && e.target.value.split(":")) ||
      e.target.defaultValue.split(":");
    id === "time"
      ? setEvent({
          ...event,
          start: moment(event.start)
            .set("hour", hh)
            .set("minute", mm)
            .format(),
          end: moment(event.start)
            .set("hour", hh)
            .set("minute", mm)
            .add(1, "h")
            .format(),
        })
      : id === "date"
      ? setEvent({ ...event })
      : setEvent({ ...event, [id]: e.target.value });
  };

  return (
    <>
      <div
        id='popup'
        style={{
          position: "absolute",
          left: props.event.jsEvent?.clientX - 438 + scroll.x + "px",
          top: props.event.jsEvent?.clientY - 165 + scroll.y + "px",
          boxShadow: "0px 3px 18px: 00000029",
          border: "1px solid #43425D",
          borderRadius: "10px",
          height: "275px",
          width: "201px",
          zIndex: "1000",
          background: "#fff",
        }}>
        <span
          onClick={props.showPopup}
          style={{
            position: "absolute",
            height: "16px",
            width: "16px",
            left: "calc(100% - 27px)",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            top: "7px",
            border: "2px solid #D6D6D6",
            borderRadius: "50%",
          }}>
          <span
            style={{
              position: "absolute",
              width: "2px",
              height: "10px",
              transform: "rotate(45deg)",
              background: "#D6D6D6",
            }}
          />
          <span
            style={{
              position: "absolute",
              width: "2px",
              height: "10px",
              transform: "rotate(-45deg)",
              background: "#D6D6D6",
            }}
          />
        </span>
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
          {inputFields.map((input) => (
            <Input
              handleSetEvent={handleSetEvent}
              id={input.id}
              type={input.type}
              inputName={input.inputName}
              defaultValue={
                input.id === "date"
                  ? props.event.dateStr
                  : input.id === "time"
                  ? "13:00"
                  : ""
              }
            />
          ))}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "0 24px",
              justifyContent: "center",
              marginTop: "-6px",
              alignItems: "center",
            }}>
            <EventColorPicker background={handleBackgroundPick} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "0 24px",
              justifyContent: "space-between",
              marginTop: "12px",
            }}>
            <button
              onClick={props.showPopup}
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                paddingLeft: "0",
                paddingRight: "0",
                color: "#FF5F5F",
              }}>
              Cancel
            </button>
            <button
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                paddingLeft: "0",
                paddingRight: "0",
                color: "#6A6996",
              }}
              onClick={handleCreateEvent}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  create: (data) => dispatch(addEvent(data)),
});
const mapStateToProps = (state) => ({
  data: state.calendar,
});

export default connect(mapStateToProps, mapDispatchToProps)(NewEvent);
