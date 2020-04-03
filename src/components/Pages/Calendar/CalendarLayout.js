import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

import "./style.css";

const CalendarLayout = () => {
  return (
    <div style={{ position: "relative", height: "100%", width: "100%" }}>
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
        }}>
        <h2 style={{ color: "#4D4F5C", fontWeight: "400", marginTop: "0" }}>
          Calendar View
        </h2>
        <FullCalendar
          defaultView='dayGridMonth'
          // eventTimeFormat={"H:MM"}
          buttonText={{
            today: "Today",
            prev: "Back",
            next: "Next",
            month: "Month",
            week: "Week",
            day: "Day",
            list: "Agenda",
          }}
          header={{
            left: "today,prev,next",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
          }}
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
        />
      </div>
    </div>
  );
};

export default CalendarLayout;
