import React, { ReactElement } from "react";

interface Props {}

export default function ReactIcons({}: Props): ReactElement {
  return (
    <>
      <div className="m-10 p-10 bg-white roudned-md prose">
        <h1>React Icons</h1>
        <h2>
          Include popular icons in your React projects easily with react-icons,
          which utilizes ES6 imports that allows you to include only the icons
          that your project is using.
        </h2>
      </div>
    </>
  );
}
