import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

// @ts-ignore: Unreachable code error
const DnDCalendar = withDragAndDrop(Calendar);

export default class ReactBigCalendar extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(1, "days").toDate(),
        title: "Some title",
      },
    ],
  };

  // onEventResize = (data:any) => {
  //     const { start, end } = data;

  //     this.setState((state) => {
  //         state?.events?.[0].start = start;
  //         state?.events?.[0].end = end;
  //         return { events: [...state.events] };
  //     });
  // };

  onEventDrop = (data: any) => {
    console.log(data);
  };

  render() {
    return (
      <div className="p-5 bg-slate-100 rounded-md shadow-lg">
        <DnDCalendar
          defaultDate={moment().toDate()}
          defaultView="month"
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.onEventDrop}
          // onEventResize={this.onEventResize}
          resizable
          style={{ height: "75vh" }}
        />
      </div>
    );
  }
}
