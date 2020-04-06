import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import momentPlugin from "@fullcalendar/moment";

import { events } from "./events";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/list/main.css";

import "./style.css";

const Calendar = (props) => {
  return (
    <FullCalendar
      dateClick={(e) => e.view.type === "dayGridMonth" && props.showPopup(e)}
      eventClick={function(info) {
        console.log("Event: " + info.event.title);
        console.log("Notes: " + info.event.extendedProps.description);
        console.log(
          "View: " + info.event.start.toLocaleDateString(),
          info.event?.end?.toLocaleDateString() ||
            info.event.start.toLocaleDateString(),
        );
      }}
      displayEventTime={true}
      slotLabelFormat={[
        { month: "long", year: "numeric" },
        { hour: "numeric", minute: "2-digit" },
      ]}
      eventTimeFormat={{
        hour: "2-digit",
        minute: "2-digit",
        meridiem: true,
      }}
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
        momentPlugin,
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin,
        listPlugin,
      ]}
      // selectable={true}
      events={events}
      nowIndicator={true}
      eventRender={function(list) {
        if (list.view.type === "listWeek") {
          list.el.style.display = "flex";
          list.el.style.flexDirection = "row";
          list.el.innerHTML += list.event.extendedProps.description
            ? `<td class="fc-list-item-description fc-widget-content">
              ${list.event.extendedProps.description}
              </td>`
            : `<td class="fc-list-item-description fc-widget-content"></td>`;
        }
      }}
    />
  );
};

export default Calendar;
