import React from "react";
import Draggable from "react-draggable";

export default class ReactDraggable extends React.Component {
  eventLogger = (e: MouseEvent, data: Object) => {
    console.log("Event: ", e);
    console.log("Data: ", data);
  };

  render() {
    return (
      <div className="p-10">
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          scale={1}
        >
          <div className="handle bg-white p-5 rounded-lg w-72">
            <div className="text-2xl">Draggable component</div>
          </div>
        </Draggable>
      </div>
    );
  }
}
