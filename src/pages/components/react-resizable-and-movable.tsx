import React, { ReactElement } from "react";
import { Rnd } from "react-rnd";

interface Props {}

export default function ReactResizableAndMovable({}: Props): ReactElement {
  return (
    <>
      <Rnd
        className="bg-white border-2 border-slate-500 rounded-lg p-10 "
        default={{
          x: 300,
          y: 300,
          width: 400,
          height: 300,
        }}
      >
        <p className="text-xl text-black">Drag and resize me</p>
      </Rnd>
    </>
  );
}
