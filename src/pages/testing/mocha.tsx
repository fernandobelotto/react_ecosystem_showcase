import React, { ReactElement } from "react";

interface Props {}

export default function Mocha({}: Props): ReactElement {
  return (
    <>
      {" "}
      <div className="m-10 p-10 bg-white roudned-md prose">
        <h1>Mocha</h1>
        <h2>
          simple, flexible, fun javascript test framework for node.js & the
          browser
        </h2>
      </div>
    </>
  );
}
