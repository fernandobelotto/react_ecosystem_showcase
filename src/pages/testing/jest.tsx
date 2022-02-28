import React, { ReactElement } from "react";

interface Props {}

export default function Jest({}: Props): ReactElement {
  return (
    <>
      <div className="m-10 p-10 bg-white roudned-md prose">
        <h1>Jest</h1>
        <h2>
          Jest is a delightful JavaScript Testing Framework with a focus on
          simplicity.
        </h2>
        <p>
          It works with projects using: Babel, TypeScript, Node, React, Angular,
          Vue and more!
        </p>
      </div>
    </>
  );
}
