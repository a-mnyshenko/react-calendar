import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/list/main.css";

import "./style.css";

const CalendarLayout = () => {
  console.log(window.innerWidth);
  const handleAddEvent = (args) => {
    console.log(args);
  };
  const handleShowEvent = (info) => {
    console.log(info.event.title);
  };
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
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
        }}>
        <h2 style={{ color: "#4D4F5C", fontWeight: "400", marginTop: "0" }}>
          Calendar View
        </h2>
        <FullCalendar
          dateClick={handleAddEvent}
          eventClick={handleShowEvent}
          displayEventTime={true}
          slotLabelFormat={[
            { month: "long", year: "numeric" }, // top level of text
            { hour: "numeric", minute: "2-digit" }, // lower level of text
          ]}
          defaultView='dayGridMonth'
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
          events={[
            {
              title: "My custom event",
              // date: "2020-04-03T10:30:00",
              start: "2020-04-03T10:30:00",
              // end: "2020-04-04T07:30:00",
              backgroundColor: "#000",
              borderColor: "#000",
              allDay: true,
              editable: true,
              extentedProps: {
                status: "done",
              },
              description: "This is a cool eventsome note",
              // resourceEditable: false,
            },
            {
              title: "event 2",
              // date: "2020-04-03",
              start: "2020-04-03",
              end: "2020-04-04",
              allDay: true,
              editable: true,
              notes: "some note",
              backgroundColor: "black",
              borderColor: "black",
              // resourceEditable: false,
            },
          ]}
          nowIndicator={true}
        />
      </div>
    </div>
  );
};

export default CalendarLayout;
