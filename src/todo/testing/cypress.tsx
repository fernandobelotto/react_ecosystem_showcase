import React, { ReactElement } from "react";

interface Props {}

export default function Cypress({}: Props): ReactElement {
  return (
    <>
      <div className="m-10 p-10 bg-white roudned-md prose">
        <h1>Cypress</h1>
        <h2>
          Fast, easy and reliable testing for anything that runs in a browser.
        </h2>
        <p>
          It works with projects using: Babel, TypeScript, Node, React, Angular,
          Vue and more!
        </p>
      </div>
    </>
  );
}
