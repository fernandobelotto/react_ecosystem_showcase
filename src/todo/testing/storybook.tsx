import React, { ReactElement } from "react";

interface Props {}

export default function Storybook({}: Props): ReactElement {
  return (
    <>
      <div className="m-10 p-10 bg-white roudned-md prose">
        <h1>Storybook</h1>
        <h2>
          Storybook is an open source tool for building UI components and pages
          in isolation. It streamlines UI development, testing, and
          documentation.
        </h2>
      </div>
    </>
  );
}
