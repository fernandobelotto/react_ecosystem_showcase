import React, { ReactElement } from "react";

interface Props {}

export default function HomePage({}: Props): ReactElement {
  return (
    <>
      <div className="m-10 p-10 bg-white roudned-md prose">
        <h1>Welcome to react ecosystem</h1>
        <h2>The react universe centralized</h2>
        <p>
          This website collects all sort of tools, libraries and links to help
          you discover the world os react and the community around it. I hope
          you find your way to build amazing web applications
        </p>
        <p>
          You can also check the code for this website{" "}
          <a
            href="https://github.com/fernandobelotto/react_ecosystem"
            target="_blank"
          >
            here
          </a>
        </p>
      </div>
    </>
  );
}
